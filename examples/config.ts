/// <reference path="../typings/index.d.ts"/>
'use strict';

var path = require('path');

// copy this file to config.local.ts and apply any modifications

module.exports = {
  directory: path.join(__dirname, 'models'),
  username: "root",
  password: null,
  database: 'sequelize_auto_test',
  host: '127.0.0.1',
  pool: { maxConnections: 5, maxIdleTime: 30000},

  rand: function() {
      return parseInt(String(Math.random() * 999), 10);
  },

  runOnDialects: ['mysql','sqlite','postgres','mssql'],

  //make maxIdleTime small so that tests exit promptly
  mysql: {
    username: "root",
    password: null,
    database: 'sequelize_auto_ts_example',
    host: '127.0.0.1',
    port: 3306,
    pool: { maxConnections: 5, maxIdleTime: 30}
  },

  sqlite: {
    username: "foo",
    password: null,
    host: '127.0.0.1',
    database: path.join(__dirname, "sequelize_auto_ts_example.db"),
    storage: path.join(__dirname, "sequelize_auto_ts_example.db")
  },

  postgres: {
    database: 'sequelize_auto_ts_example',
    username: "root",
    port: 5432,
    pool: { maxConnections: 5, maxIdleTime: 30}
  },

  mssql: {
    database: 'sequelize_auto_ts_example',
    username: "root",
    port: 1433,
    pool: { maxConnections: 5, maxIdleTime: 30}
  }
}
