/// <reference path="../../../typings/index.d.ts"/>
'use strict';

import fs = require("fs");
import path = require("path");
import _ = require("lodash");

import generator = require("./../../sequelize-auto-ts");
import schema = require("./../../schema");

var ScriptTemplate = require("script-template");

export class DefaultGenerator implements generator.Generator{

    private targetProjectRootDirectory : string = null;

    public generateTypes(options: generator.GenerateOptions, schema: schema.Schema, callback: (err: Error) => void): void {
        var self = this;
        self.generateFromTemplate(options, schema, "templates/sequelize-types.ts.tpl", function (err : Error) {
            self.generateFromTemplate(options, schema, "templates/sequelize-names.ts.tpl", function (err : Error) {
                var template : string = options.modelFactory ? "templates/sequelize-model-factory.ts.tpl" : "templates/sequelize-models.ts.tpl";
                self.generateFromTemplate(options, schema, template, callback);
            });
        });
    }

    private generateFromTemplate(options : generator.GenerateOptions, schema : schema.Schema, templateName : string, callback : (err : Error) => void) : void {
        console.log("Generating " + templateName);

        var templateText : string = fs.readFileSync(path.join(__dirname, templateName), "utf8");

        var engine = new ScriptTemplate(templateText);
        var genText : string = engine.run(schema);

        genText = this.translateReferences(genText, options);

        var baseName = path.basename(templateName, ".tpl");
        fs.writeFileSync(path.join(options.targetDirectory, baseName), genText);

        callback(null);
    }

    private translateReferences(source : string, options : generator.GenerateOptions) : string {
        var re : RegExp = new RegExp("///\\s+<reference\\s+path=[\"'][\\./\\w\\-\\d]+?([\\w\\.\\-]+)[\"']\\s*/>", "g");

        var self = this;
        function replaceFileName(match : string, fileName : string) : string {
            if (self.targetProjectRootDirectory == null) {
                self.targetProjectRootDirectory = self.findTargetProjectRootDirectory(options);
            }

            var targetPath : string = self.findTargetPath(fileName, self.targetProjectRootDirectory);

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

    private findTargetProjectRootDirectory(options : generator.GenerateOptions) : string {
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