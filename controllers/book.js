const bookModel = require("../models/book");
const UserModel = require("../models/user");
const asyncHandler = require("../midlewares/asyncHandler");

exports.addBook = asyncHandler(async (req, res, next) => {
  const book = await bookModel.create(req.body);
  res.send(book);
});

exports.getBooks = asyncHandler(async (req, res, next) => {
  const books = await bookModel.findAll({
    include: UserModel,
  });
  res.send(books);
});

exports.getBook = asyncHandler(async (req, res, next) => {
  const book = await bookModel.findOne({
    where: {
      book_id: req.params.id,
    },
  });
  res.send(book);
});

exports.removeBook = asyncHandler(async (req, res, next) => {
  await bookModel.destroy({
    where: {
      book_id: req.params.id,
    },
  });
  res.send("deleted");
});
