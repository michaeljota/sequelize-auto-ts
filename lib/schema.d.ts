/// <reference path="../typings/index.d.ts" />
import sequelize = require('sequelize');
import api = require('./api');
export declare function read(database: string, username: string, password: string, options: sequelize.Options, namingOptions: any, callback: (err: Error, schema: api.ISchema) => void): void;
