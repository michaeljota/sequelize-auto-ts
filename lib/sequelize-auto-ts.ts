/// <reference path="../typings/index.d.ts"/>
'use strict';

import path = require("path");
import fs = require("fs");
import sequelize = require('sequelize');
import schema = require("./schema");
//import {DefaultGenerator} from "./generator/default/DefaultGenerator";

var Sequelize : sequelize.SequelizeStatic = require("sequelize");

export interface GenerateOptions {
    database : string;
    username : string;
    password : string;
    options : sequelize.Options;
    naming : any;
    modelFactory? : boolean;
    targetDirectory: string;
    generatorName?: string;
    generatorPath?: string;
}

export interface Generator {
    generateTypes(options: GenerateOptions, schema: schema.Schema, callback: (err: Error) => void): void;
}

export function generate(options : GenerateOptions, callback? : (err : Error) => void) : void {
    var generator: Generator = null;

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
        function (err : Error, schema : schema.Schema) {
            if (err) {
                callback(err);
                return;
            }
            schema.useModelFactory = options.modelFactory;
            generator.generateTypes(options, schema, callback);
        });
}
