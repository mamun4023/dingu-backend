
const server = require('./app')

require('dotenv').config();
require("./models/sequalize");



server.listen(3000, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode at ${process.env.PORT}`);
});
