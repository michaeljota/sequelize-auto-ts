'use strict';
function camelCase(s) {
    switch (s.length) {
        case 0:
            return '';
        case 1:
            return s.toLowerCase();
        default:
            return s.charAt(0).toLowerCase() + s.substr(1);
    }
}
exports.camelCase = camelCase;
function arrayToDictionary(array, key) {
    var d = {};
    var keyFn;
    if (typeof key === 'string') {
        keyFn = function (t) {
            return t[key];
        };
    }
    else {
        keyFn = key;
    }
    array.forEach(function (item) { return d[keyFn(item)] = item; });
    return d;
}
exports.arrayToDictionary = arrayToDictionary;
function isNullOrWhiteSpace(str) {
    return str == undefined || str == null || str.replace(/\s/g, '').length < 1;
}
exports.isNullOrWhiteSpace = isNullOrWhiteSpace;
function toTitleCase(text) {
    return text.charAt(0).toUpperCase() + text.substr(1, text.length - 1);
}
exports.toTitleCase = toTitleCase;
function toCamelCase(text) {
    return text.charAt(0).toLowerCase() + text.substr(1);
}
exports.toCamelCase = toCamelCase;
//# sourceMappingURL=util.js.map