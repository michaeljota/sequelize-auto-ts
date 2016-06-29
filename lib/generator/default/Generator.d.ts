/// <reference path="../../../typings/index.d.ts" />
import generator = require("./../../sequelize-auto-ts");
import schema = require("./../../schema");
import { BaseGenerator } from "./../BaseGenerator";
export declare class Generator extends BaseGenerator {
    generateTypes(options: generator.GenerateOptions, schema: schema.Schema, callback: (err: Error) => void): void;
    private generateFromTemplate(options, schema, templateName, callback);
}
