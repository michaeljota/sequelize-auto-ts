/// <reference path="../typings/index.d.ts"/>
'use strict';

import api = require("./api");

export function camelCase(s : string) : string {
    switch (s.length) {
        case 0:
            return '';

        case 1:
            return s.toLowerCase();

        default:
            return s.charAt(0).toLowerCase() + s.substr(1);
    }
}

export function arrayToDictionary<T>(array : T[], key : any) : api.IDictionary<T> {
    var d : api.IDictionary<T> = {};
    var keyFn : (t : T) => string;

    if (typeof key === 'string') {
        keyFn = function (t : T) : string {
            return t[key];
        }
    } else {
        keyFn = key;
    }
    array.forEach(item => d[keyFn(item)] = item);

    return d;
}

export function isNullOrWhiteSpace(str) {
    return str == undefined || str == null || str.replace(/\s/g, '').length < 1;
}

export function toTitleCase(text : string) : string {
    return text.charAt(0).toUpperCase() + text.substr(1, text.length - 1);
}

export function toCamelCase(text : string) : string {
    return text.charAt(0).toLowerCase() + text.substr(1);
}
