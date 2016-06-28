///<reference path="../typings/index.d.ts"/>

import * as moment from "moment";
import {assert} from "chai";
var helpers = require('./helpers');
import * as types from "./gen/postgres/sequelize-types";
import models = require('./gen/postgres/sequelize-models');
let packageJson = require('../package.json');

var config = require('./config');
try { config = require('./config.local'); } catch (ex) { }

declare var describe : any;
if (config.runOnDialects.indexOf("postgres") === -1) {
    describe = (title, done) => {};
}

let orders : types.OrdersInstance[] = null;

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
            asyncDone.trigger(err);
        });
    });

    it('should have orders', function (done) {
        let asyncDone = new helpers.AsyncDone(done);
        models.OrdersModel.findAll()
            .catch((error: any) => {
                asyncDone.trigger(error);
            })
            .done((result: any) => {
                assert.isNotNull(result);
                assert.notEqual(result.length, 0);
                asyncDone.trigger();
            });
    });

});