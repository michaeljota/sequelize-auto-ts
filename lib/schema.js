'use strict';
var Sequelize = require("sequelize");
var _ = require('lodash');
var ChangeCase = require('change-case');
var util = require('./util');
var Association_1 = require('./symboltable/Association');
var Field_1 = require('./symboltable/Field');
var Reference_1 = require('./symboltable/Reference');
var Schema_1 = require('./symboltable/Schema');
var Table_1 = require('./symboltable/Table');
var TypeMapper_1 = require('./symboltable/TypeMapper');
var Xref_1 = require('./symboltable/Xref');
var DEFAULT_CASE_TYPE = 'pascalCase';
var naming;
function read(database, username, password, options, namingOptions, callback) {
    naming = namingOptions || {};
    naming.defaults = naming.defaults || {};
    naming.defaults.caseType = naming.defaults.caseType || DEFAULT_CASE_TYPE;
    var schema;
    var sequelize = new Sequelize(database, username, password, options);
    var tableLookup = {};
    var xrefs = {};
    var associationsFound = {};
    var customReferenceRows = [];
    var idFieldLookup = {};
    TypeMapper_1.TypeMapper.init(options.dialect);
    var sql = "select table_name, column_name, is_nullable, data_type, column_type, column_default, ordinal_position " +
        "from information_schema.columns " +
        "where table_schema = '" + database + "' " +
        "order by table_name, ordinal_position";
    switch (options.dialect) {
        case 'mysql':
        case 'mariadb':
            break;
        case 'postgres':
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
                    "where table_catalog = '" + database + "' ";
            "order by table_name, ordinal_position";
            break;
        default:
            break;
    }
    if (options.dialect == 'sqlite') {
        sql =
            "select name " +
                "from sqlite_master " +
                "where name != 'sqlite_sequence' " +
                "order by name";
        sequelize
            .query(sql)
            .then(function (rows) { return processTablesSQLite(undefined, rows); })
            .catch(function (err) { return processTablesSQLite(err, null); });
    }
    else {
        sequelize
            .query(sql)
            .then(function (rows) { return processTablesAndColumns(undefined, rows[0]); })
            .catch(function (err) { return processTablesAndColumns(err, null); });
    }
    function processTablesSQLite(err, tables) {
        if (err) {
            callback(err, null);
            return;
        }
        if (tables == null) {
            var err = new Error("No schema info returned for database.");
            callback(err, null);
            return;
        }
        var rows = new Array();
        var index = 0;
        (function iterate() {
            var table = tables[index];
            var sql = "PRAGMA table_info('" + table + "')";
            sequelize
                .query(sql)
                .then(function (pragma) {
                index++;
                for (var k = 0; k < pragma[0].length; k++) {
                    var column = pragma[0][k];
                    var row = {};
                    var type = column.type.toLowerCase();
                    if (type === "")
                        type = "text";
                    row.table_name = table;
                    row.column_name = column.name;
                    row.column_type = type;
                    row.data_type = type;
                    row.column_default = column.dflt_value;
                    row.is_nullable = (column.notnull == '1') ? '0' : '1';
                    row.ordinal_position = column.cid;
                    rows.push(row);
                }
                if (index < tables.length) {
                    iterate();
                }
                else {
                    readCustomFields(rows);
                }
            });
        })();
    }
    function processTablesAndColumns(err, rows) {
        if (err) {
            callback(err, null);
            return;
        }
        if (rows == null) {
            var err = new Error("No schema info returned for database.");
            callback(err, null);
            return;
        }
        if (rows.length == 0) {
            var err = new Error("Empty schema info returned for database.");
            callback(err, null);
            return;
        }
        readCustomFields(rows);
    }
    function readCustomFields(originalRows) {
        if (!_.any(originalRows, function (r) { return r.table_name == 'SequelizeCustomFieldDefinitions'; })) {
            processTablesAndColumnsWithCustom(originalRows, {});
            return;
        }
        var sql = "select table_name, column_name, is_nullable, data_type, column_type, column_default, referenced_table_name, referenced_column_name, ordinal_position " +
            "from SequelizeCustomFieldDefinitions " +
            "order by table_name, ordinal_position";
        sequelize
            .query(sql)
            .then(function (customFields) { return processCustomFields(undefined, customFields); })
            .catch(function (err) { return processCustomFields(err, null); });
        function processCustomFields(err, customFields) {
            if (err) {
                callback(err, null);
                return;
            }
            var customFieldLookup = util.arrayToDictionary(customFields, 'column_name');
            var combined = originalRows.concat(customFields);
            combined.sort(sortByTableNameThenOrdinalPosition);
            customReferenceRows = _.where(customFields, function (cf) { return cf.referenced_table_name != null && cf.referenced_column_name != null; });
            processTablesAndColumnsWithCustom(combined, customFieldLookup);
        }
    }
    function sortByTableNameThenOrdinalPosition(row1, row2) {
        return row1.table_name < row2.table_name
            ? -1
            : (row1.table_name > row2.table_name
                ? 1
                : (row1.ordinal_position < row2.ordinal_position
                    ? -1
                    : (row1.ordinal_position > row2.ordinal_position
                        ? 1
                        : 0)));
    }
    function processTablesAndColumnsWithCustom(rows, customFieldLookup) {
        var tables = [];
        schema = new Schema_1.Schema(tables, naming);
        var table = new Table_1.Table(schema, "", naming);
        var calculatedFieldsFound = {};
        for (var index = 0; index < rows.length; index++) {
            var row = rows[index];
            if (row.table_name === 'SequelizeCustomFieldDefinitions') {
                continue;
            }
            if (row.table_name != table.tableName) {
                table = new Table_1.Table(schema, row.table_name, naming);
                tables.push(table);
            }
            var isCalculated = customFieldLookup[row.column_name] !== undefined;
            var field = new Field_1.Field(row.column_name, row.data_type, row.column_type, row.column_default, row.is_nullable, table, naming, false, isCalculated);
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
    function readReferences() {
        var sql = "SELECT	table_name, column_name, referenced_table_name, referenced_column_name " +
            "FROM 	information_schema.key_column_usage " +
            "WHERE	constraint_schema = '" + database + "' " +
            "AND	referenced_table_name IS NOT NULL;";
        switch (options.dialect) {
            case 'mariadb':
            case 'mysql':
                break;
            case 'mssql':
            case 'postgres':
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
        if (options.dialect == 'sqlite') {
            sql =
                "select name " +
                    "from sqlite_master " +
                    "where name != 'sqlite_sequence' " +
                    "order by name";
            sequelize
                .query(sql)
                .then(function (rows) { return readReferencesSQLite(undefined, rows); })
                .catch(function (err) { return readReferencesSQLite(err, null); });
        }
        else {
            sequelize
                .query(sql)
                .then(function (rows) { return processReferences(undefined, rows[0]); })
                .catch(function (err) { return processReferences(err, null); });
        }
    }
    function readReferencesSQLite(err, tables) {
        if (err) {
            callback(err, null);
            return;
        }
        var index = 0;
        var rows = new Array();
        (function iterate() {
            var table = tables[index];
            var sql = "PRAGMA foreign_key_list('" + table + "')";
            sequelize
                .query(sql)
                .then(function (pragma) {
                index++;
                if (pragma.length > 0) {
                    var row = {};
                    row.table_name = table;
                    row.column_name = pragma[0].from;
                    row.referenced_table_name = pragma[0].table;
                    row.referenced_column_name = pragma[0].to;
                    rows.push(row);
                }
                if (index < tables.length) {
                    iterate();
                }
                else {
                    processReferences(undefined, rows);
                }
            });
        })();
    }
    function processReferences(err, rows) {
        if (err) {
            callback(err, null);
            return;
        }
        if (rows == null || rows.length == 0) {
            console.log("Warning: No references defined in database.");
            callback(null, schema);
            return;
        }
        schema.tables.forEach(function (table) { return tableLookup[table.tableName] = table; });
        rows.forEach(processReferenceRow);
        customReferenceRows.forEach(processReferenceRow);
        processReferenceXrefs();
        switch (options.dialect) {
            case 'postgres':
                callback(null, schema);
                break;
            case 'mariadb':
            case 'mysql':
            default:
                fixViewNames();
                break;
        }
        function processReferenceRow(row) {
            if (row.table_name.length > 4 && row.table_name.substr(0, 4) == 'Xref') {
                processReferenceXrefRow(row);
                return;
            }
            var parentTable = tableLookup[row.referenced_table_name];
            var childTable = tableLookup[row.table_name];
            var associationName;
            if (row.column_name !== row.referenced_column_name) {
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
                    schema.associations.push(new Association_1.Association(associationName));
                    associationsFound[associationName] = true;
                }
            }
            if (row.table_name != row.referenced_table_name) {
                var field = new Field_1.Field(util.camelCase(Sequelize.Utils.singularize((associationName === undefined || associationName === "")
                    ? row.referenced_table_name
                    : associationName)), ChangeCase[naming.defaults.caseType](ChangeCase.snake(row.referenced_table_name) + '_pojo'), undefined, undefined, undefined, childTable, naming, true);
                childTable.fields.push(field);
                childTable.refs.push(field);
            }
            schema.references.push(new Reference_1.Reference(row.referenced_table_name, row.table_name, associationName, util.camelCase(Sequelize.Utils.singularize(row.referenced_table_name)) + util.toTitleCase(Schema_1.Schema.idSuffix), row.column_name, false, schema, naming));
        }
        function processReferenceXrefRow(row) {
            var xref = xrefs[row.table_name];
            if (xref == null) {
                xrefs[row.table_name] = new Xref_1.Xref(row.referenced_table_name, row.referenced_column_name, null, null, row.table_name, naming);
            }
            else {
                xref.secondTableName = row.referenced_table_name;
                xref.secondFieldName = row.referenced_column_name;
            }
        }
        function processReferenceXrefs() {
            for (var xrefName in xrefs) {
                if (!xrefs.hasOwnProperty(xrefName)) {
                    continue;
                }
                var xref = xrefs[xrefName];
                schema.xrefs.push(xref);
                var firstTable = tableLookup[xref.firstTableName];
                var secondTable = tableLookup[xref.secondTableName];
                var field = new Field_1.Field(util.camelCase(xref.secondTableName), Sequelize.Utils.singularize(xref.secondTableName) + 'Pojo[]', undefined, undefined, undefined, firstTable, naming, true);
                firstTable.fields.push(field);
                firstTable.refs.push(field);
                field = new Field_1.Field(util.camelCase(xref.firstTableName), Sequelize.Utils.singularize(xref.firstTableName) + 'Pojo[]', undefined, undefined, undefined, secondTable, naming, true);
                secondTable.fields.push(field);
                secondTable.refs.push(field);
            }
        }
    }
    function fixViewNames() {
        var tableNamesManyForms = [];
        _.each(schema.tables, extrapolateTableNameForms);
        _.each(schema.tables, fixViewName);
        if (schema.views.length) {
            addViewReferences();
        }
        callback(null, schema);
        function extrapolateTableNameForms(table, index, array) {
            if (table.tableName === table.tableName.toLowerCase()) {
                return;
            }
            tableNamesManyForms.push(table.tableName);
            tableNamesManyForms.push(Sequelize.Utils.singularize(table.tableName));
        }
        function fixViewName(table, index, array) {
            if (table.tableName !== table.tableName.toLowerCase()) {
                return;
            }
            table.isView = true;
            schema.views.push(table);
            _.each(tableNamesManyForms, fixViewNamePart);
            function fixViewNamePart(otherTableNameForm, index, array) {
                var i = table.tableName.indexOf(otherTableNameForm.toLowerCase());
                if (i < 0) {
                    return;
                }
                var newTableName = '';
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
    function addViewReferences() {
        schema.views.forEach(addViewReference);
    }
    function addViewReference(view, index, array) {
        view.fields.forEach(addViewFieldReference);
        function addViewFieldReference(field, index, array) {
            if (!field.isIdField()) {
                return;
            }
            var otherTableName = Sequelize.Utils.pluralize(field.fieldNameProperCase().substr(0, field.fieldName.length - Schema_1.Schema.idSuffix.length));
            switch (options.dialect) {
                case 'mariadb':
                case 'mysql':
                    break;
                case 'postgres':
                    otherTableName = otherTableName.toLowerCase();
                    break;
                default:
                    break;
            }
            var otherTable = tableLookup[otherTableName];
            if (otherTable === undefined) {
                console.log('Unable to find related table for view ' + view.tableName + '.' + field.fieldName + ', expected ' + otherTableName + '.');
                return;
            }
            var reference = new Reference_1.Reference(otherTableName, view.tableName, undefined, field.fieldName, field.fieldName, true, schema, naming);
            schema.references.push(reference);
            var otherTableSingular = Sequelize.Utils.singularize(otherTableName);
            var field = new Field_1.Field(otherTableSingular, otherTableSingular + 'Pojo', undefined, undefined, undefined, view, naming, true);
            view.fields.push(field);
            view.refs.push(field);
            field = new Field_1.Field(util.camelCase(view.tableName), Sequelize.Utils.singularize(view.tableName) + 'Pojo[]', undefined, undefined, undefined, otherTable, naming, true);
            otherTable.fields.push(field);
            otherTable.refs.push(field);
        }
    }
    function processIdFields() {
        var idSuffix = Schema_1.Schema.idSuffix;
        if (idSuffix == null || !idSuffix.length) {
            return;
        }
        var idFields = [];
        var idSuffixLen = idSuffix.length;
        for (var tableIndex = 0; tableIndex < schema.tables.length; tableIndex++) {
            var table = schema.tables[tableIndex];
            if (table == null || table.fields == null || table.fields.length === 0) {
                continue;
            }
            var field = table.fields[0];
            var fieldName = field.fieldName;
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
    function processPrefixedForeignKeyTypes() {
        var idSuffix = Schema_1.Schema.idSuffix;
        var idSuffixLen = idSuffix.length;
        for (var tableIndex = 0; tableIndex < schema.tables.length; tableIndex++) {
            var table = schema.tables[tableIndex];
            if (table == null || table.fields == null || table.fields.length < 2) {
                continue;
            }
            for (var fieldIndex = 1; fieldIndex < table.fields.length; fieldIndex++) {
                var field = table.fields[fieldIndex];
                var fieldName = field.fieldName;
                if (!idFieldLookup[fieldName] &&
                    fieldName.length > idSuffixLen &&
                    fieldName.substr(fieldName.length - idSuffixLen, idSuffixLen).toLocaleLowerCase() == idSuffix) {
                    for (var c = 1; c < fieldName.length - 2; c++) {
                        var rest = fieldName.charAt(c).toLowerCase() + fieldName.substr(c + 1);
                        if (idFieldLookup[rest]) {
                            field.targetIdFieldType = ChangeCase[naming.defaults.caseType](rest);
                        }
                    }
                }
            }
        }
    }
}
exports.read = read;
//# sourceMappingURL=schema.js.map