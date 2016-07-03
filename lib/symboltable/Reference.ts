/// <reference path="../../typings/index.d.ts"/>
'use strict';

import ChangeCase = require('change-case');
import api = require('../api');

export class Reference implements api.IReference {

    constructor(public primaryTableName : string,
                public foreignTableName : string,
                public associationName : string,
                public primaryKey : string,
                public foreignKey : string,
                public isView : boolean,
                public schema: api.ISchema,
                private naming : any) {

    }

    public primaryTableModelName() : string {
        var name : string = ChangeCase.snake(this.primaryTableName) + '_model';
        return ChangeCase[this.naming.defaults.caseType](name);
    }

    public foreignTableModelName() : string {
        var name : string = ChangeCase.snake(this.foreignTableName) + '_model';
        return ChangeCase[this.naming.defaults.caseType](name);
    }

    public primaryTableNameCamel() : string {
        return ChangeCase.camel(this.primaryTableName);
    }

    public primaryTableNameModel() : string {
        if (!this.schema) {
            return this.primaryTableName
        } else {
            return this.schema.useModelFactory ? this.primaryTableNameCamel() : this.primaryTableName;
        }
    }

    public foreignTableNameCamel() : string {
        return ChangeCase.camel(this.foreignTableName);
    }

    associationNameQuoted() : string {
        return this.associationName
            ? '\'' + this.associationName + '\''
            : undefined;
    }
}