/// <reference path="../../typings/index.d.ts"/>
'use strict';

import _ = require('lodash');
import sequelize = require('sequelize');
var Sequelize : sequelize.SequelizeStatic = require("sequelize");
import ChangeCase = require('change-case');
import api = require('../api');

export class Table implements api.ITable {
    fields: Array<api.IField> = [];
    columns: Array<api.IField> = [];
    refs: Array<api.IField> = [];
    isView: boolean = false;

    constructor(public schema: api.ISchema,
                public tableName: string,
                private naming : any) {

    }

    entityName() : string {
        var name : string = ChangeCase.snake(this.tableName);
        return ChangeCase[this.naming.defaults.caseType](name);
    }

    pojoName() : string {
        var name : string = ChangeCase.snake(this.tableName) + '_pojo';
        return ChangeCase[this.naming.defaults.caseType](name);
    }

    instanceTypeName() : string {
        var name : string = ChangeCase.snake(this.tableName) + '_instance';
        return ChangeCase[this.naming.defaults.caseType](name);
    }

    modelTypeName() : string {
        var name : string = ChangeCase.snake(this.tableName) + '_model';
        return ChangeCase[this.naming.defaults.caseType](name);
    }

    assertValidMethodName() : string {
        var name : string = 'assert_valid_' + ChangeCase.snake(this.tableName);
        var type : string = _.has(this.naming, 'naming.methodName') ? this.naming.methodName.caseType : this.naming.defaults.caseType;
        return ChangeCase[type](name);
    }

    getterName() : string {
        var name : string = 'get_' + ChangeCase.snake(this.tableName);
        var type : string = _.has(this.naming, 'getterName.caseType') ? this.naming.getterName.caseType : this.naming.defaults.caseType;
        return ChangeCase[type](name);
    }

    public tableNameSingular() : string {
        return Sequelize.Utils.singularize(this.tableName);
    }

    public tableNameSingularCamel(): string {
        return ChangeCase.snake(this.tableNameSingular());
    }

    public tableNamePascal() : string {
        return ChangeCase.pascal(this.tableName);
    }

    public tableNameCamel() : string {
        return ChangeCase.camel(this.tableName);
    }

    public tableNameModelSnake() : string {
        return this.tableNameModel().replace(/\s/g,"_");
    }

    public tableNameModel() : string {
        return this.schema.useModelFactory ? this.tableNameCamel() : this.tableName;
    }

    public realDbFields() : api.IField[] {
        return this.fields.filter(f => !f.isReference && !f.isCalculated);
    }

    idField() : api.IField {
        return _.find(this.fields, f => f.isIdField());
    }

    idFieldName() : string {
        var idField : api.IField = this.idField();
        if (idField === undefined) {
            // console.log('Unable to find ID field for type: ' + this.tableName);
            return '!!cannotFindIdFieldOn' + this.tableName + '!!';
        }
        return idField.fieldName;
    }

    idFieldNameTitleCase() : string {
        var idField : api.IField = this.idField();
        if (idField === undefined) {
            // console.log('Unable to find ID field for type: ' + this.tableName);
            return '!!cannotFindIdFieldOn' + this.tableName + '!!';
        }
        return idField.fieldNameProperCase();
    }
}