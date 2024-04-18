const mongoose = require("mongoose");
const connectToDb = require("../connection");
const mongoURL = "mongodb://127.0.0.1:27017/url-shortener";

connectToDb(mongoURL)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

const urlSchema = mongoose.Schema(
  {
    redirectUrl: { type: String, required: true },
    shortIdd: { type: String, require: true, unique: true },
    userName: { type: String, require: true },
    visitHistory: [{ timestamp: { type: Number } }],
  },
  { timestamp: true }
);

const Url = mongoose.model("Url", urlSchema);

module.exports = Url;

/**
 * {
 * userId:[{
 * required:true,
 * visitedLink:"flipkart.Com"
 * urlID:"3435",
 * visitedHistory:[
 * timeStamp
 * ],
 * timeStamp
 *
 * }]
 * }
 *
 * i want when some sone click on this /newName/:3445 redirect to the flipakrt
 *
 */
