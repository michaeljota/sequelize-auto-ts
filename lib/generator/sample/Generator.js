'use strict';
var Generator = (function () {
    function Generator() {
    }
    Generator.prototype.generateTypes = function (options, schema, callback) {
        console.log("Sample Generator");
        schema.tables.forEach(function (table) {
            console.log("Table: " + table.tableName);
        });
    };
    return Generator;
}());
exports.Generator = Generator;
//# sourceMappingURL=Generator.js.map