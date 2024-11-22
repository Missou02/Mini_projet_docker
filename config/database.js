const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'db',
    dialect: 'postgres',
});

module.exports = sequelize;