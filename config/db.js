const mongoose = require("mongoose");
// const { MONGO_CONNECTION_URI } = require("./keys");
// console.log("Copnnexted");

const MONGO_CONNECTION_URI = "mongodb+srv://bushraalvi3113:twA1vNN4GZNx8bDX@codeitdb.rapcq.mongodb.net/?retryWrites=true&w=majority&appName=codeitdb";

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(MONGO_CONNECTION_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

module.exports = connectDb;
