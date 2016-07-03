/// <reference path="../../typings/index.d.ts"/>
'use strict';

import api = require('../api');

// Associations are named foreign keys, like OwnerUserID
export class Association implements api.IAssociation {
    constructor(public associationName : string) {
    }
}