const express = require("express");
const urlRouter = express.Router();
const {
  handlePostUrl,
  handleGetShortUrl,
  handleRedirectToUrl,
  handleAnalytics,
  handleHomeData,
} = require("../controllers/url");

urlRouter.route("/").post(handlePostUrl).get(handleGetShortUrl);
urlRouter.route("/data/:id").get(handleRedirectToUrl);
urlRouter.get("/analytics/:id", handleAnalytics);
urlRouter.get("/home", handleHomeData); // default route for home page
// urlRouter.route("/api/url").get(handleGetShortUrl);

module.exports = urlRouter;

//piyush
//  /       /createUrl
