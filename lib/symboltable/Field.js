'use strict';
var _ = require('lodash');
var ChangeCase = require('change-case');
var TypeMapper_1 = require('./TypeMapper');
var Field = (function () {
    function Field(fieldName, fieldType, columnType, columnDefault, isNullableString, table, naming, isReference, isCalculated) {
        if (isReference === void 0) { isReference = false; }
        if (isCalculated === void 0) { isCalculated = false; }
        this.fieldName = fieldName;
        this.fieldType = fieldType;
        this.columnType = columnType;
        this.columnDefault = columnDefault;
        this.isNullableString = isNullableString;
        this.table = table;
        this.naming = naming;
        this.isReference = isReference;
        this.isCalculated = isCalculated;
        ;
    }
    Field.prototype.isNullable = function () {
        return this.isNullableString === 'YES';
    };
    Field.prototype.fieldNameAndIsNullable = function () {
        var isNullable = (this.isNullable() ||
            /(_at)|(At)$/.test(this.fieldName) ||
            (!_.isNull(this.columnDefault) && !_.isUndefined(this.columnDefault)) ||
            this.fieldName === 'id' ||
            this.isReference);
        return this.fieldName + (isNullable ? '?' : '');
    };
    Field.prototype.fieldNameProperCase = function () {
        var fieldName = ChangeCase[this.naming.defaults.caseType](this.fieldName);
        return fieldName;
    };
    Field.prototype.translatedFieldType = function () {
        var fieldType = this.fieldType;
        var translated = TypeMapper_1.TypeMapper.fieldTypeTranslations[fieldType];
        if (translated == undefined) {
            var fieldTypeLength = fieldType.length;
            if (fieldTypeLength < 6 ||
                (fieldType.substr(fieldTypeLength - 4, 4) !== 'Pojo' &&
                    fieldType.substr(fieldTypeLength - 6, 6) !== 'Pojo[]')) {
                console.log('Unable to translate field type: ' + fieldType);
            }
            if (fieldType.substr(0, 6) === 'types.') {
                console.log('Removing types prefix from ' + fieldType);
                translated = fieldType.substr(6);
            }
            else {
                translated = fieldType;
            }
        }
        return translated;
    };
    Field.prototype.sequelizeFieldType = function () {
        var translated = TypeMapper_1.TypeMapper.fieldTypeSequelize[this.fieldType];
        if (translated == undefined) {
            console.log('Unable to sequelize field type:' + this.fieldType);
            translated = this.fieldType;
        }
        if (this.fieldType === 'enum') {
            translated += this.columnType.slice(4).replace(/'/g, '"').replace(/""/g, "'");
        }
        return [("type: " + translated)];
    };
    Field.prototype.isIdField = function () {
        return this.targetIdFieldType != undefined || Boolean(this.table.schema.idFieldLookup[this.fieldName]);
    };
    Field.prototype.customFieldType = function () {
        if (this.isIdField()) {
            if (this.targetIdFieldType == undefined) {
                return this.fieldNameProperCase();
            }
            else {
                return this.targetIdFieldType;
            }
        }
        else if (this.isReference) {
            return this.fieldType;
        }
        else {
            return this.translatedFieldType();
        }
    };
    Field.prototype.defineFieldType = function () {
        var fieldType = [];
        if (this == this.table.fields[0]) {
            fieldType = [
                'type: Sequelize.INTEGER',
                'primaryKey: true',
                'autoIncrement: true'
            ];
        }
        else if (this.table.tableName.substr(0, 4) == 'Xref' && this == this.table.fields[1]) {
            fieldType = [
                'type: "number"',
                'primaryKey: true'
            ];
        }
        else {
            fieldType = this.sequelizeFieldType();
            if (!this.isNullable() && !/(_at)|(At)$/.test(this.fieldName)) {
                fieldType.push('allowNull: false');
            }
            if (!_.isNull(this.columnDefault)) {
                fieldType.push('defaultValue: ' + this.generateDefaultValue());
            }
        }
        return '{' + fieldType.join(', ') + '}';
    };
    Field.prototype.generateDefaultValue = function () {
        var raw = this.columnDefault;
        if (this.fieldType === 'tinyint') {
            raw = (raw === '1') ? 'true' : 'false';
        }
        else if (_.isString(raw) && !/^[1-9][0-9]*$/.test(raw)) {
            raw = "\"" + raw + "\"";
        }
        return raw;
    };
    Field.prototype.tableNameSingular = function () {
        return this.table.tableNameSingular();
    };
    Field.prototype.tableNameSingularCamel = function () {
        return this.table.tableNameSingularCamel();
    };
    return Field;
}());
exports.Field = Field;
//# sourceMappingURL=Field.js.map