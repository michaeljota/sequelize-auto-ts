'use strict';
var _ = require('lodash');
var Sequelize = require("sequelize");
var ChangeCase = require('change-case');
var Table = (function () {
    function Table(schema, tableName, naming) {
        this.schema = schema;
        this.tableName = tableName;
        this.naming = naming;
        this.fields = [];
        this.columns = [];
        this.refs = [];
        this.isView = false;
    }
    Table.prototype.entityName = function () {
        var name = ChangeCase.snake(this.tableName);
        return ChangeCase[this.naming.defaults.caseType](name);
    };
    Table.prototype.pojoName = function () {
        var name = ChangeCase.snake(this.tableName) + '_pojo';
        return ChangeCase[this.naming.defaults.caseType](name);
    };
    Table.prototype.instanceTypeName = function () {
        var name = ChangeCase.snake(this.tableName) + '_instance';
        return ChangeCase[this.naming.defaults.caseType](name);
    };
    Table.prototype.modelTypeName = function () {
        var name = ChangeCase.snake(this.tableName) + '_model';
        return ChangeCase[this.naming.defaults.caseType](name);
    };
    Table.prototype.assertValidMethodName = function () {
        var name = 'assert_valid_' + ChangeCase.snake(this.tableName);
        var type = _.has(this.naming, 'naming.methodName') ? this.naming.methodName.caseType : this.naming.defaults.caseType;
        return ChangeCase[type](name);
    };
    Table.prototype.getterName = function () {
        var name = 'get_' + ChangeCase.snake(this.tableName);
        var type = _.has(this.naming, 'getterName.caseType') ? this.naming.getterName.caseType : this.naming.defaults.caseType;
        return ChangeCase[type](name);
    };
    Table.prototype.tableNameSingular = function () {
        return Sequelize.Utils.singularize(this.tableName);
    };
    Table.prototype.tableNameSingularCamel = function () {
        return ChangeCase.snake(this.tableNameSingular());
    };
    Table.prototype.tableNamePascal = function () {
        return ChangeCase.pascal(this.tableName);
    };
    Table.prototype.tableNameCamel = function () {
        return ChangeCase.camel(this.tableName);
    };
    Table.prototype.tableNameModelSnake = function () {
        return this.tableNameModel().replace(/\s/g, "_");
    };
    Table.prototype.tableNameModel = function () {
        return this.schema.useModelFactory ? this.tableNameCamel() : this.tableName;
    };
    Table.prototype.realDbFields = function () {
        return this.fields.filter(function (f) { return !f.isReference && !f.isCalculated; });
    };
    Table.prototype.idField = function () {
        return _.find(this.fields, function (f) { return f.isIdField(); });
    };
    Table.prototype.idFieldName = function () {
        var idField = this.idField();
        if (idField === undefined) {
            return '!!cannotFindIdFieldOn' + this.tableName + '!!';
        }
        return idField.fieldName;
    };
    Table.prototype.idFieldNameTitleCase = function () {
        var idField = this.idField();
        if (idField === undefined) {
            return '!!cannotFindIdFieldOn' + this.tableName + '!!';
        }
        return idField.fieldNameProperCase();
    };
    return Table;
}());
exports.Table = Table;
//# sourceMappingURL=Table.js.map