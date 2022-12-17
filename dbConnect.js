const mongoose = require("mongoose");

const connect = () => {
  return mongoose
    .connect(process.env.dbURL)
    .then(() => {
      console.log("connected to DB");
    })
    .catch((e) => {
      console.log(e);
    });
};

module.exports = connect;
