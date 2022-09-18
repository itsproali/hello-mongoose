const mongoose = require("mongoose");

const dbConnect = () => {
  mongoose.connect(process.env.DATABASE_LOCAL, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};

module.exports = dbConnect;
