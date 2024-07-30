const addresModel = require('../models/address');
const userModel = require('../models/user')


exports.addAddress = async(req, res, next)=>{
    const address = await addresModel.create(req.body)
    res.send(address)
}

exports.getAdresses = async(req, res, next)=>{
    const addresses = await addresModel.findAll({
        // include : {
        //     model : userModel,
        // }
    });
    res.send(addresses)
} 


exports.getAdress = async(req, res, next)=>{
    const addresses = await addresModel.findOne({
        where : {
            user_id : req.params.id
        }
    });
    res.send(addresses)
} 


exports.removeAddress = async(req, res, next)=>{
    const address = await addresModel.destroy({
        where : {
            user_id : req.params.id
        }
    })
    res.send(address)
}




