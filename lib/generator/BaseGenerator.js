'use strict';
var fs = require('fs');
var path = require('path');
var util = require("./../util");
var BaseGenerator = (function () {
    function BaseGenerator() {
        this.targetProjectRootDirectory = null;
        this.options = null;
        this.schema = null;
    }
    BaseGenerator.prototype.init = function (options, schema, callback) {
        this.options = options;
        this.schema = schema;
        return true;
    };
    BaseGenerator.prototype.getTargetProjectRootDirectory = function () {
        if (this.targetProjectRootDirectory == null) {
            this.targetProjectRootDirectory = this.findTargetProjectRootDirectory(this.options);
        }
        return this.targetProjectRootDirectory;
    };
    BaseGenerator.prototype.translateReferences = function (source, options) {
        var re = new RegExp("///\\s+<reference\\s+path=[\"']([\\./\\w\\-\\d]+?[\\w\\.\\-]+)[\"']\\s*/>", "g");
        var self = this;
        function replaceFileName(match, fileName) {
            var targetPath = self.findTargetPath(fileName, self.getTargetProjectRootDirectory());
            var relativePath = targetPath == null
                ? null
                : path.relative(options.targetDirectory, targetPath);
            if (relativePath == null) {
                var sourceText = fs.readFileSync(path.join(__dirname, fileName), "utf8");
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
    };
    BaseGenerator.prototype.getTemplateDir = function (options, baseDir) {
        var dir = options.generatorTemplatePath;
        if (!util.isNullOrWhiteSpace(dir)) {
            if (!fs.existsSync(dir)) {
                dir = path.join(process.cwd(), dir);
            }
        }
        else {
            dir = path.join(baseDir, "templates");
        }
        return dir;
    };
    BaseGenerator.prototype.findTargetProjectRootDirectory = function (options) {
        var dir = options.targetDirectory;
        while (!this.hasFile(dir, "package.json")) {
            var parent = path.resolve(dir, "..");
            if (parent == null || parent == dir) {
                return options.targetDirectory;
            }
            dir = parent;
        }
        return dir;
    };
    BaseGenerator.prototype.hasFile = function (directory, file) {
        var files = fs.readdirSync(directory);
        return (files.indexOf(file) >= 0);
    };
    BaseGenerator.prototype.findTargetPath = function (fileName, searchDirectory) {
        var target = path.join(searchDirectory, fileName);
        if (fs.existsSync(target)) {
            return target;
        }
        var childDirectories = fs.readdirSync(searchDirectory);
        for (var i = 0; i < childDirectories.length; i++) {
            var childName = childDirectories[i];
            var childPath = path.join(searchDirectory, childName);
            var stat = fs.statSync(childPath);
            if (stat.isDirectory() && childName.charAt(0) != '.' && childName != 'node_modules') {
                target = this.findTargetPath(fileName, childPath);
                if (target != null) {
                    return target;
                }
            }
        }
        return null;
    };
    return BaseGenerator;
}());
exports.BaseGenerator = BaseGenerator;
//# sourceMappingURL=BaseGenerator.js.map