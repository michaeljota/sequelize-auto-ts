/// <reference path="../typings/index.d.ts"/>
'use strict';

var config = require('./config.js');
try { config = require('./config.local.js'); } catch (ex) { }
import api = require("../lib/api");
import generator = require("../lib/sequelize-auto-ts");

for (var dialect of config.runOnDialects) {
    var entry = config[dialect];

    var options = {
        host: entry.host,
        pool: entry.pool,
        port: entry.port,
        storage: entry.storage,
        dialect: dialect
    };

    var generateOptions = <api.IGenerateOptions>{
        database: entry.database,
        username: entry.username,
        password: entry.password,
        options: options,
        naming: null,
        modelFactory: null,
        targetDirectory: __dirname + "/" + dialect,
        generatorName: null
    };

    generate(generateOptions);
}

function generate(options : api.IGenerateOptions) : void {
    console.log("Database: " + options.database);
    console.log("Username: " + options.username);
    console.log("Password: <hidden>");
    console.log("Target  : " + options.targetDirectory);
    console.log("Database Dialect: " + options.options.dialect);
    if(options.options.host !== undefined)
        console.log("Host : " + options.options.host);
    if(options.options.storage !== undefined)
        console.log("Storage : " + options.options.storage);
    console.log("");

    generator.generate(options, function (err) {
        if (err) {
            throw err;
        }
    });
}