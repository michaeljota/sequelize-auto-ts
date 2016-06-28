///<reference path="../typings/index.d.ts"/>

import * as moment from "moment";
import {assert} from "chai";
var helpers = require('./helpers');
import * as types from "./gen/mssql/sequelize-types";
import models = require('./gen/mssql/sequelize-models');
let packageJson = require('../package.json');

var config = require('./config');
try { config = require('./config.local'); } catch (ex) { }

declare var describe : any;
if (config.runOnDialects.indexOf("mssql") === -1) {
    describe = (title, done) => {};
}

let orders : types.OrdersInstance[] = null;

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