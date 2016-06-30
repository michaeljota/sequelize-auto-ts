/// <reference path="../typings/index.d.ts" />
import api = require("./api");
export declare function camelCase(s: string): string;
export declare function arrayToDictionary<T>(array: T[], key: any): api.IDictionary<T>;
