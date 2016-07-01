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
        self.generateFromTemplate(options, schema, "templates/sequelize-types.ts.ejs", function (err : Error) {
            self.generateFromTemplate(options, schema, "templates/sequelize-names.ts.ejs", function (err : Error) {
                var template : string = options.modelFactory ? "templates/sequelize-model-factory.ts.ejs" : "templates/sequelize-models.ts.ejs";
                self.generateFromTemplate(options, schema, template, callback);
            });
        });
    }

    private generateFromTemplate(options : api.IGenerateOptions, schema : api.ISchema, templateName : string, callback : (err : Error) => void) : void {
        console.log("Generating " + templateName);

        var opt = null;
        var data = { schema: schema };
        var templatePath: string = path.join(__dirname, templateName);

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