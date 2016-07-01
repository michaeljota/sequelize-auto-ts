/// <reference path="../typings/index.d.ts"/>
'use strict';

export function AsyncDone (fn) {
    let self = this;
    let called = false;

    this.trigger = function (params) {
        if (called) {
            return;
        }

        fn.apply(self, arguments);
        called = true;
    };
};
