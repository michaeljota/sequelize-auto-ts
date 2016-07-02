/// <reference path="../../typings/index.d.ts"/>

'use strict';

const fs = require('fs');
const path = require('path');

import util = require("./../util");
import api = require("./../api");

export abstract class BaseGenerator implements api.IGenerator {
    private targetProjectRootDirectory: string = null;
    private options: api.IGenerateOptions = null;
    private schema: api.ISchema = null;

    public abstract generateTypes(options: api.IGenerateOptions, schema: api.ISchema, callback: (err: Error) => void): void;

    protected init(options: api.IGenerateOptions, schema: api.ISchema, callback: (err: Error) => void): boolean {
        this.options = options;
        this.schema = schema;
        return true;
    }

    protected getTargetProjectRootDirectory() {
        if (this.targetProjectRootDirectory == null) {
            this.targetProjectRootDirectory = this.findTargetProjectRootDirectory(this.options);
        }
        return this.targetProjectRootDirectory;
    }

    protected translateReferences(source : string, options : api.IGenerateOptions) : string {
        var re : RegExp = new RegExp("///\\s+<reference\\s+path=[\"']([\\./\\w\\-\\d]+?[\\w\\.\\-]+)[\"']\\s*/>", "g");

        var self = this;
        function replaceFileName(match: string, fileName: string): string {
            fileName = fileName.replace(/\.\.\//g, '').replace(/\.\//g, '');
            var targetPath: string = self.findRelativeTargetPath(fileName, options.targetDirectory, self.getTargetProjectRootDirectory());
            var relativePath : string = targetPath == null
                ? null
                : targetPath;

            if (relativePath == null) {
                var sourceText : string = fs.readFileSync(path.join(__dirname, fileName), "utf8");
                var targetText = self.translateReferences(sourceText, options);
                fs.writeFileSync(path.join(options.targetDirectory, fileName), targetText);

                relativePath = "./" + fileName;
            }
            else if (relativePath.charAt(0) != ".") {
                relativePath = "./" + relativePath;
            }
            return "/// <reference path=\"" + relativePath.replace(/\\/g, '/') + "\" />";
        }

        return source.replace(re, replaceFileName);
    }

    protected getTemplateDir(options: api.IGenerateOptions, baseDir: string): string {
        var dir = options.generatorTemplatePath;

        if (!util.isNullOrWhiteSpace(dir)) {
            if (!fs.existsSync(dir)) {
                dir = path.join(process.cwd(), dir);
            }
        } else {
            dir = path.join(baseDir,"templates");
        }

        return dir;
    }

    private findTargetProjectRootDirectory(options : api.IGenerateOptions) : string {
        var dir : string = options.targetDirectory;

        while (!this.hasFile(dir, "package.json")) {
            var parent : string = path.resolve(dir, "..");
            if (parent == null || parent == dir) {
                // found root without finding a package.json file
                return options.targetDirectory;
            }
            dir = parent;
        }

        return dir;
    }

    private hasFile(directory : string, file : string) : boolean {
        var files: string[] = fs.readdirSync(directory);
        return (files.indexOf(file) >= 0);
    }

    private findRelativeTargetPath(fileName: string, targetDirectory: string, projectDirectory: string): string {
        var target : string = path.join(targetDirectory, fileName);
        if (fs.existsSync(target)) {
            return target;
        }

        targetDirectory = path.normalize(targetDirectory);
        projectDirectory = path.normalize(projectDirectory);

        var dir = targetDirectory;
        var dirRelative = "./";

        while (true) {
            var file = path.join(dir, fileName);
            if (fs.existsSync(file)) {
                return path.join(dirRelative, fileName);
            }

            dir = path.resolve(path.join(dir, ".."));
            dirRelative += "../";

            if (dir.length < projectDirectory.length)
                break;
        }

        return null;
    }

}