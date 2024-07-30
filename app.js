const express = require("express");
const app = express();
const routes = require("./routes");
const morgan = require("morgan");
const bodyParser = require("body-parser");
// const logger = require("./logger");
const globalErrorHandler = require("./midlewares/globalErrorHandler");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// if (process.env.NODE_ENV === "Production") {
//   const stream = { write: (message) => logger.info(message.trim()) };
//   app.use(morgan("combined", { stream }));
// }

app.use("/api", routes);
app.use(globalErrorHandler);

module.exports = app;
