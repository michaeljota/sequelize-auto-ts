/// <reference path="../typings/index.d.ts" />
import sequelize = require('sequelize');
import schema = require("./schema");
export interface GenerateOptions {
    database: string;
    username: string;
    password: string;
    options: sequelize.Options;
    naming: any;
    modelFactory?: boolean;
    targetDirectory: string;
    generatorName?: string;
    generatorPath?: string;
}
export interface Generator {
    generateTypes(options: GenerateOptions, schema: schema.Schema, callback: (err: Error) => void): void;
}
export declare function generate(options: GenerateOptions, callback?: (err: Error) => void): void;
