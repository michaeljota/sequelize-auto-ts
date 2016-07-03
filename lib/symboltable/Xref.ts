/// <reference path="../../typings/index.d.ts"/>
'use strict';

import ChangeCase = require('change-case');
import api = require('../api');
import util = require('../util');

export class Xref implements api.IXref {

    constructor(public firstTableName : string,
                public firstFieldName : string,
                public secondTableName : string,
                public secondFieldName : string,
                public xrefTableName : string,
                private naming : any) {

    }

    public firstTableModelName() : string {
        var name : string = ChangeCase.snake(this.firstTableName) + '_model';
        return ChangeCase[this.naming.defaults.caseType](name);
    }

    public secondTableModelName() : string {
        var name : string = ChangeCase.snake(this.secondTableName) + '_model';
        return ChangeCase[this.naming.defaults.caseType](name);
    }

    public firstTableNameCamel() : string {
        return util.toCamelCase(this.firstTableName);
    }

    public secondTableNameCamel() : string {
        return util.toCamelCase(this.secondTableName);
    }

}
