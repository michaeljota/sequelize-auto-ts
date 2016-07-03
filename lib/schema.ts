/// <reference path="../typings/index.d.ts"/>
'use strict';

/****************************
 *
 * Loads and exposes schema from database
 */

import sequelize = require('sequelize');
var Sequelize : sequelize.SequelizeStatic = require("sequelize");
import fs = require('fs');
import _ = require('lodash');
import ChangeCase = require('change-case');

import util = require('./util');
import api = require('./api');

import {Association} from './symboltable/Association';
import {Field} from './symboltable/Field';
import {Reference} from './symboltable/Reference';
import {Schema} from './symboltable/Schema';
import {Table} from './symboltable/Table';
import {TypeMapper} from './symboltable/TypeMapper';
import {Xref} from './symboltable/Xref';

const DEFAULT_CASE_TYPE = 'pascalCase';
var naming: any;


interface ColumnDefinitionRow {
    table_name : string;
    column_name : string;
    column_type : string;
    column_default : string;
    data_type : string;
    is_nullable : string;
    ordinal_position : number;
}

interface ReferenceDefinitionRow {
    table_name : string;
    column_name : string;
    referenced_table_name : string;
    referenced_column_name : string;
}

interface CustomFieldDefinitionRow extends ColumnDefinitionRow, ReferenceDefinitionRow {

}

export function read(database : string, username : string, password : string, options : sequelize.Options, namingOptions : any, callback : (err : Error, schema : api.ISchema) => void) : void {
    naming = namingOptions || {};
    naming.defaults = naming.defaults || {};
    naming.defaults.caseType = naming.defaults.caseType || DEFAULT_CASE_TYPE;

    var schema : Schema;
    var sequelize : sequelize.Sequelize = new Sequelize(database, username, password, options);
    var tableLookup : api.IDictionary<api.ITable> = {};
    var xrefs : api.IDictionary<Xref> = {};
    var associationsFound : api.IDictionary<boolean> = {};
    var customReferenceRows : ReferenceDefinitionRow[] = [];
    var idFieldLookup: api.IDictionary<boolean> = {};

    TypeMapper.init(options.dialect);

    var sql : string =
        "select table_name, column_name, is_nullable, data_type, column_type, column_default, ordinal_position " +
        "from information_schema.columns " +
        "where table_schema = '" + database + "' " +
        "order by table_name, ordinal_position";

    switch (options.dialect) {
        case 'mysql' :
        case 'mariadb' :
            break;
        case 'postgres' :
            sql =
                "select table_name, column_name, data_type, ordinal_position " +
                "from information_schema.columns " +
                "where table_catalog = '" + database + "' and " +
                "table_schema = 'public' " +
                "order by table_name, ordinal_position";
            break;
        case 'mssql':
            sql =
                "select table_name, column_name, data_type, ordinal_position " +
                "from information_schema.columns " +
                "where table_catalog = '" + database + "' "
                "order by table_name, ordinal_position";
            break;
        default:
            break;
    }

    if(options.dialect == 'sqlite') {
        sql =
            "select name " +
            "from sqlite_master " +
            "where name != 'sqlite_sequence' " +
            "order by name";
        sequelize
            .query(sql)
            .then((rows)=>processTablesSQLite(undefined, rows))
            .catch((err)=>processTablesSQLite(err, null));
    } else {
        sequelize
            .query(sql)
            .then((rows)=>processTablesAndColumns(undefined, rows[0]))
            .catch((err)=>processTablesAndColumns(err, null));
    }

    function processTablesSQLite(err : Error, tables : Array<string>) : void {
        if (err) {
            callback(err, null);
            return;
        }

        if (tables == null) {
            var err : Error = new Error("No schema info returned for database.");
            callback(err, null);
            return;
        }

        var rows = <Array<ColumnDefinitionRow>> new Array<any>();
        var index : number = 0;

        (function iterate() {
            var table : any = tables[index];
            var sql = "PRAGMA table_info('" + table + "')";
            sequelize
                .query(sql)
                .then((pragma)=>{
                    index++;
                    for (var k : number = 0; k < pragma[0].length; k++) {
                        var column : any = pragma[0][k];
                        var row = <ColumnDefinitionRow>{};
                        var type = column.type.toLowerCase();
                        if(type === "")
                            type = "text";
                        row.table_name = table;
                        row.column_name = column.name;
                        row.column_type = type;
                        row.data_type = type;
                        row.column_default = column.dflt_value;
                        row.is_nullable = (column.notnull =='1') ? '0' : '1';
                        row.ordinal_position = column.cid;
                        rows.push(row);
                    }

                    if(index < tables.length) {
                        iterate();
                    } else {
                        readCustomFields(rows);
                    }
                });
        })();
    }

    function processTablesAndColumns(err : Error, rows : Array<ColumnDefinitionRow>) : void {
        if (err) {
            callback(err, null);
            return;
        }

        if (rows == null) {
            var err : Error = new Error("No schema info returned for database.");
            callback(err, null);
            return;
        }

        if (rows.length == 0) {
            var err : Error = new Error("Empty schema info returned for database.");
            callback(err, null);
            return;
        }

        readCustomFields(rows);
    }

    function readCustomFields(originalRows : ColumnDefinitionRow[]) : void {

        if (!_.any(originalRows, r => r.table_name == 'SequelizeCustomFieldDefinitions')) {
            processTablesAndColumnsWithCustom(originalRows, {});
            return;
        }

        var sql : string =
            "select table_name, column_name, is_nullable, data_type, column_type, column_default, referenced_table_name, referenced_column_name, ordinal_position " +
            "from SequelizeCustomFieldDefinitions " +
            "order by table_name, ordinal_position";

        sequelize
            .query(sql)
            .then((customFields)=>processCustomFields(undefined, customFields))
            .catch((err)=>processCustomFields(err, null));

        function processCustomFields(err : Error, customFields : CustomFieldDefinitionRow[]) : void {

            if (err) {
                callback(err, null);
                return;
            }

            var customFieldLookup : api.IDictionary<ColumnDefinitionRow> =
                util.arrayToDictionary(customFields, 'column_name');

            var combined : ColumnDefinitionRow[] = originalRows.concat(customFields);
            combined.sort(sortByTableNameThenOrdinalPosition);

            customReferenceRows = _.where(customFields, cf => cf.referenced_table_name != null && cf.referenced_column_name != null);

            processTablesAndColumnsWithCustom(combined, customFieldLookup);
        }

    }

    function sortByTableNameThenOrdinalPosition(row1 : ColumnDefinitionRow, row2 : ColumnDefinitionRow) : number {
        return row1.table_name < row2.table_name
            ? -1
            : (row1.table_name > row2.table_name
            ? 1
            : ( row1.ordinal_position < row2.ordinal_position
            ? -1
            : ( row1.ordinal_position > row2.ordinal_position
            ? 1
            : 0)));
    }

    function processTablesAndColumnsWithCustom(rows : ColumnDefinitionRow[], customFieldLookup : api.IDictionary<ColumnDefinitionRow>) : void {

        var tables : Array<Table> = [];
        schema = new Schema(tables, naming);

        var table : Table = new Table(schema, "", naming);

        var calculatedFieldsFound : _.Dictionary<boolean> = {};

        for (var index : number = 0; index < rows.length; index++) {
            var row : ColumnDefinitionRow = rows[index];

            if (row.table_name === 'SequelizeCustomFieldDefinitions') {
                continue;
            }

            if (row.table_name != table.tableName) {
                table = new Table(schema, row.table_name, naming);
                tables.push(table);
            }

            var isCalculated : boolean = customFieldLookup[row.column_name] !== undefined;

            var field: Field = new Field(
                row.column_name,
                row.data_type,
                row.column_type,
                row.column_default,
                row.is_nullable,
                table,
                naming,
                false,
                isCalculated);
            table.fields.push(field);
            table.columns.push(field);

            if (isCalculated && !calculatedFieldsFound[field.fieldName]) {
                schema.calculatedFields.push(field);
                calculatedFieldsFound[field.fieldName] = true;
            }
        }

        processIdFields();

        readReferences();
    }

    function readReferences() : void {

        var sql : string =
            "SELECT	table_name, column_name, referenced_table_name, referenced_column_name " +
            "FROM 	information_schema.key_column_usage " +
            "WHERE	constraint_schema = '" + database + "' " +
            "AND	referenced_table_name IS NOT NULL;";

        switch (options.dialect) {
            case 'mariadb' :
            case 'mysql' :
                break;
            case 'mssql':
            case 'postgres' :
                sql =
                    "SELECT " +
                    "tc.table_name, kcu.column_name, " +
                    "ccu.table_name AS referenced_table_name, " +
                    "ccu.column_name AS referenced_column_name " +
                    "FROM " +
                    "information_schema.table_constraints AS tc " +
                    "JOIN information_schema.key_column_usage AS kcu " +
                    "ON tc.constraint_name = kcu.constraint_name " +
                    "JOIN information_schema.constraint_column_usage AS ccu " +
                    "ON ccu.constraint_name = tc.constraint_name " +
                    "WHERE " +
                    "constraint_type = 'FOREIGN KEY' and " +
                    "kcu.constraint_catalog = '" + database + "' ";
                break;
            default:
                break;
        }

        if(options.dialect == 'sqlite') {
            sql =
                "select name " +
                "from sqlite_master " +
                "where name != 'sqlite_sequence' " +
                "order by name";
            sequelize
                .query(sql)
                .then((rows)=>readReferencesSQLite(undefined, rows))
                .catch((err)=>readReferencesSQLite(err, null));
        } else {
            sequelize
                .query(sql)
                .then((rows)=>processReferences(undefined, rows[0]))
                .catch((err)=>processReferences(err, null));
        }
    }

    function readReferencesSQLite(err : Error, tables : Array<string>) : void {
        if (err) {
            callback(err, null);
            return;
        }

        var index : number = 0;
        var rows = <Array<ReferenceDefinitionRow>> new Array<any>();

        (function iterate() {
            var table : any = tables[index];
            var sql = "PRAGMA foreign_key_list('" + table + "')";
            sequelize
                .query(sql)
                .then((pragma)=>{
                    index++;
                    if(pragma.length > 0) {
                        var row = <ReferenceDefinitionRow>{};
                        row.table_name = table;
                        row.column_name = pragma[0].from;
                        row.referenced_table_name = pragma[0].table;
                        row.referenced_column_name = pragma[0].to;
                        rows.push(row);
                    }
                    if(index < tables.length) {
                        iterate();
                    } else {
                        processReferences(undefined, rows);
                    }
                });
        })();
    }

    function processReferences(err : Error, rows : Array<ReferenceDefinitionRow>) : void {
        if (err) {
            callback(err, null);
            return;
        }

        if (rows == null || rows.length == 0) {
            console.log("Warning: No references defined in database.");
            callback(null, schema);
            return;
        }

        schema.tables.forEach(table => tableLookup[table.tableName] = table);

        rows.forEach(processReferenceRow);
        customReferenceRows.forEach(processReferenceRow);

        processReferenceXrefs();

        switch (options.dialect) {
            case 'postgres' :
                callback(null, schema);
                break;
            case 'mariadb' :
            case 'mysql' :
            default:
                fixViewNames();
                break;
        }

        function processReferenceRow(row : ReferenceDefinitionRow) : void {
            if (row.table_name.length > 4 && row.table_name.substr(0, 4) == 'Xref') {
                processReferenceXrefRow(row);
                return;
            }

            // Example rows for
            //
            // CREATE TABLE Leads (
            //    leadId integer PRIMARY KEY AUTO_INCREMENT,
            //    accountId integer NOT NULL,
            //
            //    FOREIGN KEY (accountId) REFERENCES Accounts (accountId),
            //  );
            //
            // table_name               =   Leads
            // column_name              =   accountId
            // referenced_table_name    =   Accounts
            // referenced_column_name   =   accountId
            //
            var parentTable = tableLookup[row.referenced_table_name];
            var childTable = tableLookup[row.table_name];

            var associationName : string;

            if (row.column_name !== row.referenced_column_name) {

                // example, row.column_name is ownerUserID
                // we want association to be called OwnerUsers
                // so we take first character and make it uppercase,
                // then take rest of prefix from foreign key
                // then append the referenced table name
                associationName = ChangeCase.snake(row.column_name);
                associationName = row.column_name.slice(0, (row.referenced_column_name.length + 1) * -1);
                if (_.has(naming, 'associationName.tail') && naming.associationName.tail !== null) {
                    if (naming.associationName.tail === 'tableName') {
                        associationName += '_' + row.referenced_table_name;
                    }
                }
                if (_.has(naming, 'associationName.caseType')) {
                    associationName = ChangeCase[naming.associationName.caseType](associationName);
                }

                if (!associationsFound[associationName]) {
                    schema.associations.push(new Association(associationName));
                    associationsFound[associationName] = true;
                }
            }

            // create array of children in parent, i.e., AccountPojo.leads:LeadPojo[]
            // but not for custom fields
            // if (!row.hasOwnProperty('ordinal_position')) {
            // parentTable.fields.push(new Field(
            //     util.camelCase(row.table_name),                                     // Leads -> leads
            //     Sequelize.Utils.singularize(row.table_name) + 'Pojo[]',             // Leads -> LeadPojo[]
            //     undefined,
            //     undefined,
            //     parentTable,                                                        // Accounts table reference
            //     true));
            // }

            // create singular parent reference from child if it's not reflexive
            if(row.table_name != row.referenced_table_name ) {
                var field = new Field(
                    util.camelCase(Sequelize.Utils.singularize(
                        (associationName === undefined || associationName === "")
                            ? row.referenced_table_name                             // Accounts -> account
                            : associationName)),                                    // ownerUserId -> OwnerUsers -> ownerUser
                    ChangeCase[naming.defaults.caseType](ChangeCase.snake(row.referenced_table_name) + '_pojo'),    // Accounts -> AccountPojo
                    undefined,
                    undefined,
                    undefined,
                    childTable,
                    naming,
                    true);
                childTable.fields.push(field);
                childTable.refs.push(field);
            }

            // tell Sequelize about the reference
            schema.references.push(new Reference(
                row.referenced_table_name,
                row.table_name,
                associationName,
                util.camelCase(Sequelize.Utils.singularize(row.referenced_table_name)) + util.toTitleCase(Schema.idSuffix),
                row.column_name,
                false,
                schema,
                naming));
        }

        function processReferenceXrefRow(row : ReferenceDefinitionRow) : void {
            var xref : Xref = xrefs[row.table_name];

            if (xref == null) {
                xrefs[row.table_name] = new Xref(
                    row.referenced_table_name,
                    row.referenced_column_name,
                    null,
                    null,
                    row.table_name,
                    naming);
            } else {
                xref.secondTableName = row.referenced_table_name;
                xref.secondFieldName = row.referenced_column_name;
            }
        }

        function processReferenceXrefs(): void {
            for (var xrefName in xrefs) {

                if (!xrefs.hasOwnProperty(xrefName)) {
                    continue;
                }

                var xref : Xref = xrefs[xrefName];

                schema.xrefs.push(xref);

                var firstTable : api.ITable = tableLookup[xref.firstTableName];
                var secondTable : api.ITable = tableLookup[xref.secondTableName];

                var field = new Field(
                    util.camelCase(xref.secondTableName),
                    Sequelize.Utils.singularize(xref.secondTableName) + 'Pojo[]',
                    undefined,
                    undefined,
                    undefined,
                    firstTable,
                    naming,
                    true);

                firstTable.fields.push(field);
                firstTable.refs.push(field);

                field = new Field(
                    util.camelCase(xref.firstTableName),
                    Sequelize.Utils.singularize(xref.firstTableName) + 'Pojo[]',
                    undefined,
                    undefined,
                    undefined,
                    secondTable,
                    naming,
                    true);

                secondTable.fields.push(field);
                secondTable.refs.push(field);
            }
        }
    }

    function fixViewNames() : void {

        var tableNamesManyForms : string[] = [];

        _.each(schema.tables, extrapolateTableNameForms);

        _.each(schema.tables, fixViewName);

        if (schema.views.length) {
            addViewReferences();
        }

        callback(null, schema);

        function extrapolateTableNameForms(table : Table, index : number, array : Table[]) : void {

            if (table.tableName === table.tableName.toLowerCase()) {
                return;
            }

            tableNamesManyForms.push(table.tableName);
            tableNamesManyForms.push(Sequelize.Utils.singularize(table.tableName));
        }

        function fixViewName(table : Table, index : number, array : Table[]) : void {

            if (table.tableName !== table.tableName.toLowerCase()) {
                return;
            }
            table.isView = true;
            schema.views.push(table);

            _.each(tableNamesManyForms, fixViewNamePart);

            function fixViewNamePart(otherTableNameForm : string, index : number, array : string[]) : void {
                var i : number = table.tableName.indexOf(otherTableNameForm.toLowerCase());
                if (i < 0) {
                    return;
                }

                var newTableName : string = '';

                if (i !== 0) {
                    newTableName = table.tableName.substr(0, i);
                }

                newTableName += otherTableNameForm;

                if (table.tableName.length > i + otherTableNameForm.length + 1) {
                    newTableName += table.tableName.charAt(i + otherTableNameForm.length).toUpperCase() +
                        table.tableName.substr(i + otherTableNameForm.length + 1);
                }

                table.tableName = newTableName;
            }
        }
    }

    function addViewReferences() : void {
        schema.views.forEach(addViewReference);
    }

    function addViewReference(view : Table, index : number, array : Table[]) : void {
        view.fields.forEach(addViewFieldReference);

        function addViewFieldReference(field : Field, index : number, array : Field[]) : void {
            if (!field.isIdField()) {
                return;
            }

            var otherTableName : string = Sequelize.Utils.pluralize(field.fieldNameProperCase().substr(0, field.fieldName.length - Schema.idSuffix.length));

            switch (options.dialect) {
                case 'mariadb' :
                case 'mysql' :
                    break;
                case 'postgres' :
                    otherTableName = otherTableName.toLowerCase();
                    break;
                default:
                    break;
            }

            var otherTable : api.ITable = tableLookup[otherTableName];
            if (otherTable === undefined) {
                console.log('Unable to find related table for view ' + view.tableName + '.' + field.fieldName + ', expected ' + otherTableName + '.');
                return;
            }

            var reference : Reference = new Reference(otherTableName,
                view.tableName,
                undefined,
                field.fieldName,
                field.fieldName,
                true,
                schema,
            	naming);

            schema.references.push(reference);

            var otherTableSingular : string = Sequelize.Utils.singularize(otherTableName);

            var field = new Field(
                otherTableSingular,
                otherTableSingular + 'Pojo',
                undefined,
                undefined,
                undefined,
                view,
                naming,
                true);
            view.fields.push(field);
            view.refs.push(field);

            field = new Field(
                util.camelCase(view.tableName),
                Sequelize.Utils.singularize(view.tableName) + 'Pojo[]',
                undefined,
                undefined,
                undefined,
                otherTable,
                naming,
                true);
            otherTable.fields.push(field);
            otherTable.refs.push(field);

        }
    }

    function processIdFields() : void {
        var idSuffix = Schema.idSuffix;

        if (idSuffix == null || !idSuffix.length) {
            return;
        }

        var idFields : Array<api.IField> = [];

        var idSuffixLen : number = idSuffix.length;

        for (var tableIndex : number = 0; tableIndex < schema.tables.length; tableIndex++) {
            var table : api.ITable = schema.tables[tableIndex];

            if (table == null || table.fields == null || table.fields.length === 0) {
                continue;
            }

            var field : api.IField = table.fields[0];
            var fieldName : string = field.fieldName;

            if (!idFieldLookup[fieldName] &&
                fieldName.length > idSuffixLen &&
                fieldName.substr(fieldName.length - idSuffixLen, idSuffixLen).toLocaleLowerCase() == idSuffix) {
                idFields.push(field);
                idFieldLookup[fieldName] = true;
            }
        }

        schema.idFields = idFields;
        schema.idFieldLookup = idFieldLookup;

        processPrefixedForeignKeyTypes();
    }

    function processPrefixedForeignKeyTypes() : void {

        var idSuffix = Schema.idSuffix;
        var idSuffixLen : number = idSuffix.length;

        for (var tableIndex : number = 0; tableIndex < schema.tables.length; tableIndex++) {
            var table : api.ITable = schema.tables[tableIndex];

            if (table == null || table.fields == null || table.fields.length < 2) {
                continue;
            }

            // first field is never a prefixed foreign key
            for (var fieldIndex : number = 1; fieldIndex < table.fields.length; fieldIndex++) {
                var field : api.IField = table.fields[fieldIndex];
                var fieldName : string = field.fieldName;

                if (!idFieldLookup[fieldName] &&
                    fieldName.length > idSuffixLen &&
                    fieldName.substr(fieldName.length - idSuffixLen, idSuffixLen).toLocaleLowerCase() == idSuffix) {
                    // not in lookup but is id field, so must be prefixed id field
                    // ex. ownerUserId
                    //
                    // need to find the actual id field
                    // ex. userId

                    for (var c : number = 1; c < fieldName.length - 2; c++) {
                        var rest : string = fieldName.charAt(c).toLowerCase() + fieldName.substr(c + 1);
                        if (idFieldLookup[rest]) {
                            // found it
                            field.targetIdFieldType = ChangeCase[naming.defaults.caseType](rest);
                        }
                    }
                }
            }
        }
    }
}