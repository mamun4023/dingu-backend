const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('test', 'root', '123456',{
    dialect : 'mysql',
    // logging : msg => console.log( "logs : ", msg)
    logging : false,
    
})

// establish db connection
sequelize.authenticate().then(()=>{
    console.log("DB connected")
})

// sync all model
sequelize.sync({alter : true})
    .then(()=>{
        console.log("model has been sync")
    })


module.exports = sequelize;