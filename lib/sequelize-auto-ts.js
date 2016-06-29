'use strict';
var path = require("path");
var schema = require("./schema");
var Sequelize = require("sequelize");
function generate(options, callback) {
    var generator = null;
    if (callback == undefined) {
        callback = function (err) {
        };
    }
    if (options.generatorPath == undefined) {
        options.generatorPath = path.join(__dirname, 'generator');
    }
    if (options.generatorName == undefined) {
        options.generatorName = "default";
    }
    try {
        var generatorFullPath = path.join(path.join(options.generatorPath, options.generatorName), 'Generator.js');
        var gen = require(generatorFullPath);
        generator = new gen.Generator();
    }
    catch (err) {
        callback(err);
    }
    schema.read(options.database, options.username, options.password, options.options, options.naming, function (err, schema) {
        if (err) {
            callback(err);
            return;
        }
        schema.useModelFactory = options.modelFactory;
        generator.generateTypes(options, schema, callback);
    });
}
exports.generate = generate;
//# sourceMappingURL=sequelize-auto-ts.js.map