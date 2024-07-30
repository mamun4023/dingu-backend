
const { DataTypes } = require('sequelize');
const sequalize = require('./sequalize');


const addresModel = sequalize.define("address", {
    id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true,
    },
    country : DataTypes.STRING,
    city : DataTypes.STRING
})

module.exports = addresModel;