const express = require("express");
const userRouter = express.Router();
const {
  handleAllUser,
  handleLogin,
  handleSignUp,
} = require("../controllers/user");

userRouter.route("/").get(handleAllUser).post(handleSignUp);

userRouter.post("/login", handleLogin);

module.exports = userRouter;
