const {DataTypes} = require('sequelize')
const sequelize = require('./sequalize')
const AddresModel = require('./address')
const bookModel = require('./book')


const UserModel = sequelize.define("user",{
    user_id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        autoIncrement : true
    },
    name : {
        type :  DataTypes.STRING,
        allowNull : false,
        
    },
    email : {
        type : DataTypes.STRING,
        allowNull : false
     } 
})


// UserModel.hasOne(AddresModel, {
//     foreignKey : "user_id",
// })

// AddresModel.belongsTo(UserModel, {
//     foreignKey: 'user_id'
// });

// UserModel.hasMany(bookModel, {
//     foreignKey : "user_id",
// })

// bookModel.belongsTo(UserModel, {
//     foreignKey : "user_id",
// })


// UserModel.belongsToMany(bookModel, {through : "user_to_book", foreignKey : 'book_id'}, )
// bookModel.belongsToMany(UserModel, {through : "user_to_book", foreignKey : "user_id"})

module.exports = UserModel;