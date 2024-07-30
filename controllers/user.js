const userModel = require("../models/user");
const addresModel = require("../models/address");
const bookModel = require("../models/book");
const asyncHandler = require("../midlewares/asyncHandler");

exports.addUser = asyncHandler(async (req, res, next) => {
  
    const newUser = await userModel.create(req.body);
    res.status(200).json({
        newUser
    })
  
});

exports.getUsers = async (req, res, next) => {
  const users = await userModel.findAll({
    include: [
      {
        model: addresModel,
      },
      {
        model: bookModel,
      },
    ],
  });
  res.send(users);
};

exports.getUser = async (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  const user = await userModel.findOne({
    where: {
      user_id: id,
    },
  });
  res.send(user);
};

exports.updateUser = async (req, res, next) => {
  res.send("working");
};

exports.removeUser = async (req, res, next) => {
  const user = await userModel.destroy({
    where: {
      user_id: req.params.id,
    },
  });

  res.send("removed");
};
