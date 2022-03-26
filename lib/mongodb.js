const { connect } = require("mongoose");
require("dotenv").config();

const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://Den:saharasitisasite26@cluster0.kuzux.mongodb.net/ShopAI?retryWrites=true&w=majority";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    cached.promise = connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
module.exports = dbConnect;
