/// <reference path="../typings/index.d.ts" />
import api = require('./api');
import sequelize = require('sequelize');
export declare function read(database: string, username: string, password: string, options: sequelize.Options, namingOptions: any, callback: (err: Error, schema: api.ISchema) => void): void;
