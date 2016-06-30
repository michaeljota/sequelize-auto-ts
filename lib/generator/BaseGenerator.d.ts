/// <reference path="../../typings/index.d.ts" />
import api = require("./../api");
export declare abstract class BaseGenerator implements api.IGenerator {
    private targetProjectRootDirectory;
    private options;
    private schema;
    abstract generateTypes(options: api.IGenerateOptions, schema: api.ISchema, callback: (err: Error) => void): void;
    protected init(options: api.IGenerateOptions, schema: api.ISchema, callback: (err: Error) => void): boolean;
    protected getTargetProjectRootDirectory(): string;
    protected translateReferences(source: string, options: api.IGenerateOptions): string;
    private findTargetProjectRootDirectory(options);
    private hasFile(directory, file);
    private findTargetPath(fileName, searchDirectory);
}
