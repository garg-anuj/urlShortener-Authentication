const shortid = require("shortid");
const urlModel = require("../models/url");
// const shortId = require("shortid");

function handleGetUrl(req, res) {
  res.send("Hello from controller");
}

async function handlePostUrl(req, res) {
  try {
    const { redirectUrl, userName = "" } = req.body;
    const shortId = shortid();
    if (!redirectUrl) return res.status(400).json("url is required");

    // const shortId = shortId.generate()
    const newUrl = await urlModel.create({
      redirectUrl,
      shortIdd: shortId,
      userName,
      createdBy: req.user._id, // or yeah req.user me data mil rha hai jb user Login kar leta hai data set hoo jata hai
    });

    await newUrl.save();
    console.log("data added succesfully");
    res.json(newUrl);
  } catch (err) {
    console.log("post error on Server site", err);
  }
}

async function handleGetShortUrl(req, res) {
  const allUrl = await urlModel.find();
  return res.send(allUrl);
}

async function handleRedirectToUrl(req, res) {
  try {
    const { id } = req.params;
    let shortIdd = id;
    const url = await urlModel.findOneAndUpdate(
      { shortIdd },
      { $push: { visitHistory: { timestamp: Date.now() } } }
    );

    res.redirect(url.redirectUrl);
  } catch (err) {
    console.log("Sever during Redirect Error", err);
  }
}

async function handleAnalytics(req, res) {
  const { id } = req.params;
  const url = await urlModel.findOne({ shortIdd: id });

  return res.json({
    totalClicks: url.visitHistory.length,
    analytics: url.visitHistory,
  });
}

async function handleHomeData(req, res) {
  const allUrls = await urlModel.find({});
  res.render("home.ejs", { urls: allUrls });
}

async function handleCreateUrlPage(req, res) {
  try {
    if (!req.user) return res.redirect("./login");
    const allUrls = await urlModel.find({ createdBy: req.user._id }); //get all the  shortenerURLs from DB according to createdBy/user id
    res.render("createUrl.ejs", { urls: allUrls }); // and display all the shortUrl on this page
  } catch (err) {
    console.error(err);
  }
}

module.exports = {
  handleGetUrl,
  handlePostUrl,
  handleGetShortUrl,
  handleRedirectToUrl,
  handleAnalytics,
  handleHomeData,
  handleCreateUrlPage,
};
