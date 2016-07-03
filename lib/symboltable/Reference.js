'use strict';
var ChangeCase = require('change-case');
var Reference = (function () {
    function Reference(primaryTableName, foreignTableName, associationName, primaryKey, foreignKey, isView, schema, naming) {
        this.primaryTableName = primaryTableName;
        this.foreignTableName = foreignTableName;
        this.associationName = associationName;
        this.primaryKey = primaryKey;
        this.foreignKey = foreignKey;
        this.isView = isView;
        this.schema = schema;
        this.naming = naming;
    }
    Reference.prototype.primaryTableModelName = function () {
        var name = ChangeCase.snake(this.primaryTableName) + '_model';
        return ChangeCase[this.naming.defaults.caseType](name);
    };
    Reference.prototype.foreignTableModelName = function () {
        var name = ChangeCase.snake(this.foreignTableName) + '_model';
        return ChangeCase[this.naming.defaults.caseType](name);
    };
    Reference.prototype.primaryTableNameCamel = function () {
        return ChangeCase.camel(this.primaryTableName);
    };
    Reference.prototype.primaryTableNameModel = function () {
        if (!this.schema) {
            return this.primaryTableName;
        }
        else {
            return this.schema.useModelFactory ? this.primaryTableNameCamel() : this.primaryTableName;
        }
    };
    Reference.prototype.foreignTableNameCamel = function () {
        return ChangeCase.camel(this.foreignTableName);
    };
    Reference.prototype.associationNameQuoted = function () {
        return this.associationName
            ? '\'' + this.associationName + '\''
            : undefined;
    };
    return Reference;
}());
exports.Reference = Reference;
//# sourceMappingURL=Reference.js.map