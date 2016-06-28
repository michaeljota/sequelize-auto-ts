///<reference path="../typings/index.d.ts"/>

import * as moment from "moment";
import {assert} from "chai";
var helpers = require('./helpers');
import * as types from "../examples/postgres/sequelize-types";
import models = require('../examples/postgres/sequelize-models');
let packageJson = require('../package.json');

var config = require('./config');
try { config = require('./config.local'); } catch (ex) { }

declare var describe : any;
if (config.runTestOn.indexOf("postgres") === -1) {
    describe = (title, done) => {};
}

let users: types.UsersInstance[] = null;
let roles : types.RolesInstance[] = null;

describe('MS SQL Test Suit', function () {
    before(function (done) {
        let asyncDone = new helpers.AsyncDone(done);

        models.initialize(config.mssql.database, config.mssql.username, config.mssql.password, {
            dialect: 'mssql',
            host: config.mssql.host,
            port: config.mssql.port,
            pool: config.mssql.pool,
            define : {
                timestamps : false,
                freezeTableName : false
            }
        });

        asyncDone.trigger();
    });

    it('should be connected to the database', function (done) {
        let asyncDone = new helpers.AsyncDone(done);
        models.SEQUELIZE.authenticate().then(function(err) {
            asyncDone.trigger();
        }, function (err) {
            throw err;
        });
    });

});