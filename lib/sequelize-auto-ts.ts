/// <reference path="../typings/index.d.ts"/>
'use strict';

import sequelize = require('sequelize');
import schema = require("./schema");
import {DefaultGenerator} from "./generator/default/DefaultGenerator";

var Sequelize : sequelize.SequelizeStatic = require("sequelize");

export interface GenerateOptions {
    database : string;
    username : string;
    password : string;
    options : sequelize.Options;
    naming : any;
    modelFactory? : boolean;

    targetDirectory : string;
}

export interface Generator {
    generateTypes(options: GenerateOptions, schema: schema.Schema, callback: (err: Error) => void): void;
}

export function generate(options : GenerateOptions, callback? : (err : Error) => void) : void {
    if (callback == undefined) {
        callback = function (err : Error) : void {
        };
    }

    schema.read(options.database, options.username, options.password, options.options, options.naming,
        function (err : Error, schema : schema.Schema) {
            if (err) {
                callback(err);
                return;
            }
            schema.useModelFactory = options.modelFactory;

            var generator: Generator = new DefaultGenerator();
            generator.generateTypes(options, schema, callback);
        });
}
