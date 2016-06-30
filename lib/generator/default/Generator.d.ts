/// <reference path="../../../typings/index.d.ts" />
import api = require("./../../api");
import { BaseGenerator } from "./../BaseGenerator";
export declare class Generator extends BaseGenerator {
    generateTypes(options: api.IGenerateOptions, schema: api.ISchema, callback: (err: Error) => void): void;
    private generateFromTemplate(options, schema, templateName, callback);
}
