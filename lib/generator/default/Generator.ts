/// <reference path="../../../typings/index.d.ts"/>
'use strict';

import fs = require("fs");
import path = require("path");
var ScriptTemplate = require("script-template");

import api = require("./../../api");
import {BaseGenerator} from "./../BaseGenerator";

export class Generator extends BaseGenerator {

    public generateTypes(options: api.IGenerateOptions, schema: api.ISchema, callback: (err: Error) => void): void {
        if (!this.init(options, schema, callback))
            return;

        var self = this;
        self.generateFromTemplate(options, schema, "sequelize-types.ts.tpl", function (err : Error) {
            self.generateFromTemplate(options, schema, "sequelize-names.ts.tpl", function (err : Error) {
                var template : string = options.modelFactory ? "sequelize-model-factory.ts.tpl" : "sequelize-models.ts.tpl";
                self.generateFromTemplate(options, schema, template, callback);
            });
        });
    }

    private generateFromTemplate(options : api.IGenerateOptions, schema : api.ISchema, templateName : string, callback : (err : Error) => void) : void {
        console.log("Generating " + templateName);

        var dir = this.getTemplateDir(options, __dirname);
        var templateText : string = fs.readFileSync(path.join(dir, templateName), "utf8");

        var engine = new ScriptTemplate(templateText);
        var genText : string = engine.run(schema);

        genText = this.translateReferences(genText, options);

        var baseName = path.basename(templateName, ".tpl");
        fs.writeFileSync(path.join(options.targetDirectory, baseName), genText);

        callback(null);
    }
}