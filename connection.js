const mongoose = require("mongoose");
function connectToDb(url) {
  return mongoose
    .connect(url)
    .then(() => console.log("successfully connected with datBase"))
    .catch((err) => console.log(err));
}

module.exports = connectToDb;
