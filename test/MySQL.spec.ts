///<reference path="../typings/index.d.ts"/>

import * as moment from "moment";
import {assert} from "chai";
var helpers = require('./helpers');
import * as types from "../examples/mysql/sequelize-types";
import models = require('../examples/mysql/sequelize-models');
let packageJson = require('../package.json');

var config = require('./config');
try { config = require('./config.local'); } catch (ex) { }

declare var describe : any;
if (config.runTestOn.indexOf("mysql") === -1) {
    describe = (title, done) => {};
}

let users: types.UsersInstance[] = null;
let roles : types.RolesInstance[] = null;

describe('MySQL Test Suit', function () {
    before(function (done) {
        let asyncDone = new helpers.AsyncDone(done);

        models.initialize(config.mysql.database, config.mysql.username, config.mysql.password, {
            dialect: 'mysql',
            host: config.mysql.host,
            port: config.mysql.port,
            pool: config.mysql.pool,
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