'use strict';
var ChangeCase = require('change-case');
var util = require('../util');
var Xref = (function () {
    function Xref(firstTableName, firstFieldName, secondTableName, secondFieldName, xrefTableName, naming) {
        this.firstTableName = firstTableName;
        this.firstFieldName = firstFieldName;
        this.secondTableName = secondTableName;
        this.secondFieldName = secondFieldName;
        this.xrefTableName = xrefTableName;
        this.naming = naming;
    }
    Xref.prototype.firstTableModelName = function () {
        var name = ChangeCase.snake(this.firstTableName) + '_model';
        return ChangeCase[this.naming.defaults.caseType](name);
    };
    Xref.prototype.secondTableModelName = function () {
        var name = ChangeCase.snake(this.secondTableName) + '_model';
        return ChangeCase[this.naming.defaults.caseType](name);
    };
    Xref.prototype.firstTableNameCamel = function () {
        return util.toCamelCase(this.firstTableName);
    };
    Xref.prototype.secondTableNameCamel = function () {
        return util.toCamelCase(this.secondTableName);
    };
    return Xref;
}());
exports.Xref = Xref;
//# sourceMappingURL=Xref.js.map