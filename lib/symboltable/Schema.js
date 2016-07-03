'use strict';
var Reference_1 = require('./Reference');
var Schema = (function () {
    function Schema(tables, naming) {
        this.tables = tables;
        this.naming = naming;
        this.references = [];
        this.xrefs = [];
        this.associations = [];
        this.calculatedFields = [];
        this.views = [];
        this.idFields = [];
        this.idFieldLookup = {};
        this.useModelFactory = false;
    }
    Schema.prototype.uniqueReferences = function () {
        var u = [];
        var self = this;
        var foundIds = {};
        this.references.forEach(addReferenceIfUnique);
        this.tables.forEach(addTablePrimaryKeys);
        return u;
        function addReferenceIfUnique(reference, index, array) {
            if (reference.isView || foundIds[reference.foreignKey]) {
                return;
            }
            u.push(reference);
            foundIds[reference.foreignKey] = true;
        }
        function addTablePrimaryKeys(table, index, array) {
            if (table.isView || table.tableName.substr(0, 4) === 'Xref') {
                return;
            }
            var pk = table.fields[0];
            if (foundIds[pk.fieldName]) {
                return;
            }
            foundIds[pk.fieldName] = true;
            var r = new Reference_1.Reference(table.tableName, table.tableName, undefined, pk.fieldName, pk.fieldName, false, this, self.naming);
            u.push(r);
        }
    };
    Schema.idSuffix = "id";
    return Schema;
}());
exports.Schema = Schema;
//# sourceMappingURL=Schema.js.map