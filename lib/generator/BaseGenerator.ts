/// <reference path="../../typings/index.d.ts"/>
'use strict';

import fs = require("fs");
import path = require("path");
import _ = require("lodash");

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
        var re : RegExp = new RegExp("///\\s+<reference\\s+path=[\"'][\\./\\w\\-\\d]+?([\\w\\.\\-]+)[\"']\\s*/>", "g");

        var self = this;
        function replaceFileName(match : string, fileName : string) : string {
            var targetPath : string = self.findTargetPath(fileName, self.getTargetProjectRootDirectory());

            var relativePath : string = targetPath == null
                ? null
                : path.relative(options.targetDirectory, targetPath);

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

    private findTargetProjectRootDirectory(options : api.IGenerateOptions) : string {
        var dir : string = path.resolve(options.targetDirectory);

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
        var files : string[] = fs.readdirSync(directory);
        return _.contains(files, file);
    }


    private findTargetPath(fileName : string, searchDirectory : string) : string {
        var target : string = path.join(searchDirectory, fileName);
        if (fs.existsSync(target)) {
            return target;
        }

        var childDirectories : string[] = fs.readdirSync(searchDirectory);
        for (var i = 0; i < childDirectories.length; i++) {
            var childName : string = childDirectories[i];
            var childPath : string = path.join(searchDirectory, childName);

            var stat : fs.Stats = fs.statSync(childPath);

            if (stat.isDirectory() && childName.charAt(0) != '.' && childName != 'node_modules') {
                target = this.findTargetPath(fileName, childPath);
                if (target != null) {
                    return target;
                }
            }
        }
        return null;
    }

}