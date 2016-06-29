/// <reference path="../typings/index.d.ts" />
export interface Dictionary<TValue> {
    [key: string]: TValue;
}
export declare function camelCase(s: string): string;
export declare function arrayToDictionary<T>(array: T[], key: any): Dictionary<T>;
