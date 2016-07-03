/// <reference path="../../typings/index.d.ts"/>
'use strict';

import api = require('../api');
import {Reference} from './Reference';

export class Schema implements api.ISchema {
    public static idSuffix : string = "id"; // NOTE: Must be LOWER case

    public references : api.IReference[] = [];
    public xrefs : api.IXref[] = [];
    public associations : api.IAssociation[] = [];
    public calculatedFields : Array<api.IField> = [];
    public views : api.ITable[] = [];
    public idFields : api.IField[] = [];
    public idFieldLookup : api.IDictionary<boolean> = {};

    public useModelFactory : boolean = false;

    constructor(public tables : Array<api.ITable>,
                private naming : any) {

    }

    public uniqueReferences() : api.IReference[] {
        var u : api.IReference[] = [];

        var self = this;
        var foundIds : api.IDictionary<boolean> = {};

        this.references.forEach(addReferenceIfUnique);

        this.tables.forEach(addTablePrimaryKeys);

        return u;

        function addReferenceIfUnique(reference : api.IReference, index : number, array : Reference[]) : void {
            if (reference.isView || foundIds[reference.foreignKey]) {
                return;
            }

            u.push(reference);

            foundIds[reference.foreignKey] = true;
        }

        function addTablePrimaryKeys(table : api.ITable, index : number, array : api.ITable[]) : void {
            if (table.isView || table.tableName.substr(0, 4) === 'Xref') {
                return;
            }
            var pk : api.IField = table.fields[0];

            if (foundIds[pk.fieldName]) {
                return;
            }
            foundIds[pk.fieldName] = true;

            var r : api.IReference = new Reference(table.tableName,
                table.tableName,
                undefined,
                pk.fieldName,
                pk.fieldName,
                false,
                this,
                self.naming);
            u.push(r);
        }
    }
}
