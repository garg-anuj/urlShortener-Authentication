const express = require("express");
const staticRouter = express.Router();
// const urlModel = require("../models/url");
const { handleCreateUrlPage } = require("../controllers/url");

// async function handleCreateUrlPage(req, res) {
//   try {
//     const allUrls = await urlModel.find({});
//     res.render("createUrl.ejs", { urls: allUrls });
//   } catch (err) {
//     console.error(err);
//   }
// }

staticRouter.get("/createUrl", handleCreateUrlPage);
staticRouter.get("/signup", (req, res) => {
  res.render("signUp.ejs");
});

staticRouter.get("/login", (req, res) => {
  res.render("login.ejs");
});

module.exports = staticRouter;
