/// <reference path="../typings/index.d.ts" />
import util = require('./util');
import sequelize = require('sequelize');
export declare class Schema {
    tables: Array<Table>;
    static idSuffix: string;
    references: Reference[];
    xrefs: Xref[];
    associations: Association[];
    calculatedFields: Array<Field>;
    views: Table[];
    idFields: Field[];
    idFieldLookup: util.Dictionary<boolean>;
    useModelFactory: boolean;
    constructor(tables: Array<Table>);
    static fieldTypeTranslations: util.Dictionary<string>;
    static fieldTypeSequelize: util.Dictionary<string>;
    uniqueReferences(): Reference[];
}
export declare class Table {
    schema: Schema;
    tableName: string;
    fields: Array<Field>;
    isView: boolean;
    constructor(schema: Schema, tableName: string);
    pojoName(): string;
    instanceTypeName(): string;
    modelTypeName(): string;
    assertValidMethodName(): string;
    getterName(): string;
    tableNameSingular(): string;
    tableNameSingularCamel(): string;
    tableNamePascal(): string;
    tableNameCamel(): string;
    tableNameModelSnake(): string;
    tableNameModel(): string;
    realDbFields(): Field[];
    idField(): Field;
    idFieldName(): string;
    idFieldNameTitleCase(): string;
}
export declare class Field {
    fieldName: string;
    fieldType: string;
    columnType: string;
    columnDefault: string;
    isNullableString: string;
    table: Table;
    isReference: boolean;
    isCalculated: boolean;
    targetIdFieldType: string;
    constructor(fieldName: string, fieldType: string, columnType: string, columnDefault: string, isNullableString: string, table: Table, isReference?: boolean, isCalculated?: boolean);
    isNullable(): boolean;
    fieldNameAndIsNullable(): string;
    fieldNameProperCase(): string;
    translatedFieldType(): string;
    sequelizeFieldType(): string[];
    isIdField(): boolean;
    customFieldType(): string;
    defineFieldType(): string;
    private generateDefaultValue();
    tableNameSingular(): string;
    tableNameSingularCamel(): string;
}
export declare class Reference {
    primaryTableName: string;
    foreignTableName: string;
    associationName: string;
    primaryKey: string;
    foreignKey: string;
    isView: boolean;
    schema: Schema;
    constructor(primaryTableName: string, foreignTableName: string, associationName: string, primaryKey: string, foreignKey: string, isView: boolean, schema: Schema);
    primaryTableModelName(): string;
    foreignTableModelName(): string;
    primaryTableNameCamel(): string;
    primaryTableNameModel(): string;
    foreignTableNameCamel(): string;
    associationNameQuoted(): string;
}
export declare class Xref {
    firstTableName: string;
    firstFieldName: string;
    secondTableName: string;
    secondFieldName: string;
    xrefTableName: string;
    constructor(firstTableName: string, firstFieldName: string, secondTableName: string, secondFieldName: string, xrefTableName: string);
    firstTableModelName(): string;
    secondTableModelName(): string;
    firstTableNameCamel(): string;
    secondTableNameCamel(): string;
}
export declare class Association {
    associationName: string;
    constructor(associationName: string);
}
export declare function read(database: string, username: string, password: string, options: sequelize.Options, namingOptions: any, callback: (err: Error, schema: Schema) => void): void;
