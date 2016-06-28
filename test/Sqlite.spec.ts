///<reference path="../typings/index.d.ts"/>

import * as moment from "moment";
import {assert} from "chai";
var helpers = require('./helpers');
import * as types from "../examples/sqlite/sequelize-types";
import models = require('../examples/sqlite/sequelize-models');
let packageJson = require('../package.json');

var config = require('./config');
try { config = require('./config.local'); } catch(ex) {}

declare var describe : any;
if (config.runTestOn.indexOf("sqlite") === -1) {
    describe = (title, done) => {};
}

let users: types.UsersInstance[] = null;
let roles : types.RolesInstance[] = null;

describe('SQlite Test Suit', function () {
    before(function (done) {
        let asyncDone = new helpers.AsyncDone(done);

        models.initialize(config.sqlite.database, config.sqlite.username, config.sqlite.password, {
            dialect: 'sqlite',
            port: config.sqlite.port,
            define : {
                timestamps : false,
                freezeTableName : false
            },
            storage: config.sqlite.storage
        });

        asyncDone.trigger();
    });

    it('should be true', function (done) {
        let asyncDone = new helpers.AsyncDone(done);
        asyncDone.trigger();
    });

});