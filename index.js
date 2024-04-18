const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const app = express();
const port = 8000;

const { checkAuth, restrictToLoginInUserOnly } = require("./middlewares/auth");
const urlModel = require("./models/url");

const urlRouter = require("./routes/url");
const staticRouter = require("./routes/staticRouter");
const userRouter = require("./routes/users");

app.set("view engine", "ejs");
app.set("views", path.resolve("./view"));

app.use(express.urlencoded({ extended: true })); //form/postman se bhi data support krenge
app.use(express.json()); //json format me bhi data support krenge
app.use(cookieParser());

app.use("/createurl", checkAuth, staticRouter);

app.use("/api/url", restrictToLoginInUserOnly, urlRouter);
app.use("/", staticRouter);
app.use("/user", userRouter);

app.listen(port, () => {
  console.log("Port started");
});
