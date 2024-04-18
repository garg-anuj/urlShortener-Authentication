const userModel = require("../models/user");
const { setUser } = require("../service/auth");
const { v4: uuidv4 } = require("uuid");

function generateSecureSessionId() {
  //   return `${uuidv4()}-${Date.now().toString(36)}`;
  return uuidv4();
}

async function handleAllUser(req, res) {
  const allUsers = await userModel.find();
  return res.json(allUsers);
}

async function handleSignUp(req, res) {
  const { userName, email, password } = req.body;
  const newUser = await userModel.create({ userName, email, password });
  await newUser.save();
  return res.redirect("/createUrl");
}

async function handleLogin(req, res) {
  const { userName, password } = req.body;
  const user = await userModel.findOne({ userName, password });

  if (!user) return res.json("NO such User Found");
  //   if (!user)
  //   return res.render("login", {
  //     error: "Invalid Username or Password",
  //   });
  const sessionId = uuidv4();
  setUser(sessionId, user);
  res.cookie("uid", sessionId);

  return res.redirect("/createUrl");
}

module.exports = { handleAllUser, handleSignUp, handleLogin };
