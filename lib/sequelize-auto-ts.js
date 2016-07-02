'use strict';
var path = require("path");
var fs = require("fs");
var schema = require("./schema");
var util = require("./util");
function generate(options, callback) {
    var generator = null;
    var generatorPath = options.generatorPath;
    var generatorName = options.generatorName;
    if (callback == undefined) {
        callback = function (err) {
        };
    }
    if (util.isNullOrWhiteSpace(options.generatorPath)) {
        generatorPath = path.join(__dirname, 'generator');
    }
    if (util.isNullOrWhiteSpace(options.generatorName)) {
        generatorName = "default";
    }
    try {
        var generatorFullPath = path.join(path.join(generatorPath, generatorName), 'Generator.js');
        if (!fs.existsSync(generatorFullPath)) {
            generatorPath = process.cwd();
            generatorFullPath = path.join(path.join(generatorPath, generatorName), 'Generator.js');
        }
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