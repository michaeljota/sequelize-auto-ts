/// <reference path="../../../typings/index.d.ts"/>
'use strict';

import fs = require("fs");
import path = require("path");
import * as ejs from 'ejs';

import api = require("./../../api");
import {BaseGenerator} from "./../BaseGenerator";

export class Generator extends BaseGenerator {

    public generateTypes(options: api.IGenerateOptions, schema: api.ISchema, callback: (err: Error) => void): void {
        if (!this.init(options, schema, callback))
            return;

        var self = this;
        self.generateFromTemplate(options, schema, "sequelize-types.ts.ejs", function (err : Error) {
            self.generateFromTemplate(options, schema, "sequelize-names.ts.ejs", function (err : Error) {
                var template : string = options.modelFactory ? "sequelize-model-factory.ts.ejs" : "sequelize-models.ts.ejs";
                self.generateFromTemplate(options, schema, template, callback);
            });
        });
    }

    private generateFromTemplate(options : api.IGenerateOptions, schema : api.ISchema, templateName : string, callback : (err : Error) => void) : void {
        console.log("Generating " + templateName);

        var opt = null;
        var data = { schema: schema, options: options.generatorOptions };
        var dir = this.getTemplateDir(options, __dirname);

        var templatePath: string = path.join(dir, templateName);

        var self = this;
        ejs.renderFile(templatePath, data, opt, function(err, str){
            var genText : string = str;

            genText = self.translateReferences(genText, options);

            var baseName = path.basename(templateName, ".ejs");
            fs.writeFileSync(path.join(options.targetDirectory, baseName), genText);

            callback(null);
        });
    }
}