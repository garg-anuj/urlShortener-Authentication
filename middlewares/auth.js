const { getUser } = require("../service/auth");

// check sessionId cookies me
// then usSeeionId pr user hai ki nhi
// if have session id wo wali then use next
// wrna signup / login up page pr redirect krwa do

async function restrictToLoginInUserOnly(req, res, next) {
  const userUid = req.cookies?.uid;
  if (!userUid) return res.redirect("/login");
  const user = await getUser(userUid); //   or agr userUid hai toh fir us id pr user dekho
  if (!user) return res.redirect("/login");

  req.user = user; //not understand  yeah hm req.user ke andar user ke data ko set kr rhe hai agr condition true hoti hai toh
  next();
}

async function checkAuth(req, res, next) {
  const userUid = req.cookies?.uid;
  const user = await getUser(userUid);
  // if (!user) return res.json("user not found cant creteUrl");

  req.user = user; //we are setting use in to the cookies with it uid
  next();
}

module.exports = {
  checkAuth,
  restrictToLoginInUserOnly,
};

function checkIsUserExist() {
  const userSessionId = req.cookies?.uid;
  if (!userSessionId) return res.redirect("/login");
  const user = getUser(userSessionId);
  if (!user) return res.send("/login");
}
