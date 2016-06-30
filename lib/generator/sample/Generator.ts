/// <reference path="../../../typings/index.d.ts"/>
'use strict';

import api = require("./../../api");

export class Generator implements api.IGenerator {

    public generateTypes(options: api.IGenerateOptions, schema: api.ISchema, callback: (err: Error) => void): void {
        console.log("Sample Generator");
        schema.tables.forEach((table: api.ITable) => {
            console.log("Table: " + table.tableName);
        });
    }
}