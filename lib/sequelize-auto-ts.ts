/// <reference path="../typings/index.d.ts"/>
'use strict';

import path = require("path");
import api = require("./api");
import schema = require("./schema");

export function generate(options : api.IGenerateOptions, callback? : (err : Error) => void) : void {
    var generator: api.IGenerator = null;

    if (callback == undefined) {
        callback = function (err : Error) : void {
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
    } catch (err) {
        callback(err);
    }

    schema.read(options.database, options.username, options.password, options.options, options.naming,
        function (err : Error, schema : api.ISchema) {
            if (err) {
                callback(err);
                return;
            }
            schema.useModelFactory = options.modelFactory;
            generator.generateTypes(options, schema, callback);
        });
}
