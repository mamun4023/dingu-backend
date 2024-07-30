
const { DataTypes } = require('sequelize')
const sequalize = require('./sequalize')
const userModel = require('../models/user')

const bookModel = sequalize.define('book', {
    book_id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    title : {
        type : DataTypes.STRING,
        allowNull : false,
    },
    user_id: {
        type  : DataTypes.INTEGER,
        allowNull : false,
        // references : {
        //     model : userModel,
        //     key : "user_id"
        // }
    }
})


module.exports = bookModel;