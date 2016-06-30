/// <reference path="../../../typings/index.d.ts" />
import api = require("./../../api");
export declare class Generator implements api.IGenerator {
    generateTypes(options: api.IGenerateOptions, schema: api.ISchema, callback: (err: Error) => void): void;
}
