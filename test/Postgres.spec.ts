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

describe('Postgres Test Suit', function () {
    before(function (done) {
        let asyncDone = new helpers.AsyncDone(done);

        models.initialize(config.postgres.database, config.postgres.username, config.postgres.password, {
            dialect: 'postgres',
            host: config.postgres.host,
            port: config.postgres.port,
            pool: config.postgres.pool,
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