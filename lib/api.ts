export interface ISchema {
    tables: Array<ITable>;
    references: IReference[];
    xrefs: IXref[];
    associations: IAssociation[];
    calculatedFields: Array<IField>;
    views: ITable[];
    idFields: IField[];
    idFieldLookup: IDictionary<boolean>;
    useModelFactory: boolean;
    uniqueReferences(): IReference[];
}

export interface ITable {
    schema: ISchema;
    tableName: string;
    fields: Array<IField>;
    columns: Array<IField>;
    refs: Array<IField>;
    isView: boolean;
    entityName(): string;
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
    realDbFields(): IField[];
    idField(): IField;
    idFieldName(): string;
    idFieldNameTitleCase(): string;
}

export interface IField {
    fieldName: string;
    fieldType: string;
    columnType: string;
    columnDefault: string;
    isNullableString: string;
    table: ITable;
    isReference: boolean;
    isCalculated: boolean;
    targetIdFieldType: string;
    isNullable(): boolean;
    fieldNameAndIsNullable(): string;
    fieldNameProperCase(): string;
    translatedFieldType(): string;
    sequelizeFieldType(): string[];
    isIdField(): boolean;
    customFieldType(): string;
    defineFieldType(): string;
    tableNameSingular(): string;
    tableNameSingularCamel(): string;
}

export interface IReference {
    primaryTableName: string;
    foreignTableName: string;
    associationName: string;
    primaryKey: string;
    foreignKey: string;
    isView: boolean;
    schema: ISchema;
    primaryTableModelName(): string;
    foreignTableModelName(): string;
    primaryTableNameCamel(): string;
    primaryTableNameModel(): string;
    foreignTableNameCamel(): string;
    associationNameQuoted(): string;
}

export interface IXref {
    firstTableName: string;
    firstFieldName: string;
    secondTableName: string;
    secondFieldName: string;
    xrefTableName: string;
    firstTableModelName(): string;
    secondTableModelName(): string;
    firstTableNameCamel(): string;
    secondTableNameCamel(): string;
}

export interface IAssociation {
    associationName: string;
}

export interface IDictionary<TValue> {
    [key : string] : TValue;
}

export interface IGenerateOptions {
    database : string;
    username : string;
    password : string;
    options: any; //sequelize.Options;
    naming : any;
    modelFactory? : boolean;
    targetDirectory: string;
    generatorName?: string;
    generatorPath?: string;
    generatorTemplatePath?: string;
    generatorOptions?: any;
}

export interface IGenerator {
    generateTypes(options: IGenerateOptions, schema: ISchema, callback: (err: Error) => void): void;
}
