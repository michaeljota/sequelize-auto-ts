/// <reference path="../../typings/index.d.ts" />
import generator = require("./../sequelize-auto-ts");
import schema = require("./../schema");
export declare abstract class BaseGenerator implements generator.Generator {
    private targetProjectRootDirectory;
    private options;
    private schema;
    abstract generateTypes(options: generator.GenerateOptions, schema: schema.Schema, callback: (err: Error) => void): void;
    protected init(options: generator.GenerateOptions, schema: schema.Schema, callback: (err: Error) => void): boolean;
    protected getTargetProjectRootDirectory(): string;
    protected translateReferences(source: string, options: generator.GenerateOptions): string;
    private findTargetProjectRootDirectory(options);
    private hasFile(directory, file);
    private findTargetPath(fileName, searchDirectory);
}
