/// <reference path="../../typings/index.d.ts"/>
'use strict';

import _ = require('lodash');
import ChangeCase = require('change-case');
import api = require('../api');
import {TypeMapper} from './TypeMapper';

export class Field implements api.IField {
    public targetIdFieldType : string; // if this is a prefixed foreign key, then the name of the non-prefixed key is here

    constructor(public fieldName: string,
                public fieldType: string,
                public columnType: string,
                public columnDefault: string,
                public isNullableString: string,
                public table: api.ITable,
                private naming: any,
                public isReference: boolean = false,
                public isCalculated: boolean = false) {
       ;
    }

    isNullable() : boolean {
        return this.isNullableString === 'YES';
    }

    fieldNameAndIsNullable() : string {
        var isNullable : boolean = (
            this.isNullable() ||
            /(_at)|(At)$/.test(this.fieldName) ||
            (!_.isNull(this.columnDefault) && !_.isUndefined(this.columnDefault)) ||
            this.fieldName === 'id' ||
            this.isReference
        );
        return this.fieldName + (isNullable ? '?' : '');
    }

    fieldNameProperCase() : string {
        var fieldName : string = ChangeCase[this.naming.defaults.caseType](this.fieldName);
        return fieldName;
    }

    translatedFieldType() : string {
        var fieldType : string = this.fieldType;
        var translated: string = TypeMapper.fieldTypeTranslations[fieldType];

        if (translated == undefined) {
            var fieldTypeLength : number = fieldType.length;
            if (fieldTypeLength < 6 ||
                (   fieldType.substr(fieldTypeLength - 4, 4) !== 'Pojo' &&
                fieldType.substr(fieldTypeLength - 6, 6) !== 'Pojo[]')
            ) {
                console.log('Unable to translate field type: ' + fieldType);
            }

            if (fieldType.substr(0, 6) === 'types.') {
                console.log('Removing types prefix from ' + fieldType);
                translated = fieldType.substr(6);
            } else {
                translated = fieldType;
            }
        }
        return translated;
    }

    sequelizeFieldType() : string[] {
        var translated : string = TypeMapper.fieldTypeSequelize[this.fieldType];
        if (translated == undefined) {
            console.log('Unable to sequelize field type:' + this.fieldType);
            translated = this.fieldType;
        }
        if (this.fieldType === 'enum') {
            translated += this.columnType.slice(4).replace(/'/g, '"').replace(/""/g, "'");
        }
        return [`type: ${translated}`];
    }

    isIdField() : boolean {
        return this.targetIdFieldType != undefined || Boolean(this.table.schema.idFieldLookup[this.fieldName]);
    }

    customFieldType() : string {
        if (this.isIdField()) {
            if (this.targetIdFieldType == undefined) {
                return this.fieldNameProperCase();
            } else {
                return this.targetIdFieldType;
            }
        } else if (this.isReference) {
            return this.fieldType;
        } else {
            return this.translatedFieldType();
        }
    }

    defineFieldType() : string {
        var fieldType : string[] = [];
        if (this == this.table.fields[0]) {
            fieldType = [
                'type: Sequelize.INTEGER',
                'primaryKey: true',
                'autoIncrement: true'
            ];
        } else if (this.table.tableName.substr(0, 4) == 'Xref' && this == this.table.fields[1]) {
            fieldType = [
                'type: "number"',
                'primaryKey: true'
            ];
        } else {
            fieldType = this.sequelizeFieldType();
            if (!this.isNullable() && !/(_at)|(At)$/.test(this.fieldName)) {
                fieldType.push('allowNull: false');
            }
            if (!_.isNull(this.columnDefault)) {
                fieldType.push('defaultValue: ' + this.generateDefaultValue());
            }
        }
        return '{' + fieldType.join(', ') + '}';
    }

    private generateDefaultValue() : string {
        var raw = this.columnDefault;
        if (this.fieldType === 'tinyint') {
            raw = (raw === '1') ? 'true' : 'false';
        } else if (_.isString(raw) && !/^[1-9][0-9]*$/.test(raw)) {
            raw = `"${raw}"`;
        }
        return raw;
    }

    public tableNameSingular() : string {
        return this.table.tableNameSingular();
    }

    public tableNameSingularCamel() : string {
        return this.table.tableNameSingularCamel();
    }
}