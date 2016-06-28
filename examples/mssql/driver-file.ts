import types = require('./sequelize-types');
import models = require('./sequelize-models');

var config = require('../config.js');
try { config = require('../config.local.js'); } catch (ex) { }

models.initialize(config.mssql.database, config.mssql.username, config.mssql.password, {
    dialect : 'mssql',
    define : {
        timestamps : false
    },
    host : config.mssql.host
});

let findall = models.UsersModel.findAll();

findall
    .catch((error : any) => {
        throw error;
    })
    .done((users : any) => {
        console.log('Returned ' + users.length + ' users.');

        users.forEach((user : types.UsersPojo) => {
            console.log(user.UserName + ' (' + user.UserID + ')');
        })
    });
