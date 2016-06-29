/// <reference path="../../../typings/index.d.ts" />
import generator = require("./../../sequelize-auto-ts");
import schema = require("./../../schema");
export declare class Generator implements generator.Generator {
    generateTypes(options: generator.GenerateOptions, schema: schema.Schema, callback: (err: Error) => void): void;
}
