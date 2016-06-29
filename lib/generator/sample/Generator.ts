/// <reference path="../../../typings/index.d.ts"/>
'use strict';

import generator = require("./../../sequelize-auto-ts");
import schema = require("./../../schema");

export class Generator implements generator.Generator {

    public generateTypes(options: generator.GenerateOptions, schema: schema.Schema, callback: (err: Error) => void): void {
        console.log("Sample Generator");
        schema.tables.forEach((table: schema.Table) => {
            console.log("Table: " + table.tableName);
        });
    }
}