const jwt = require("jsonwebtoken");
var privateKey = "AnujGarg";

const sessionIdToUserMap = new Map();

// function setUser(sessionId, user) {
//   return sessionIdToUserMap.set(sessionId, user);
// }

// function getUser(sessionId) {
//   return sessionIdToUserMap.get(sessionId);
// }

// module.exports = {
//   setUser,
//   getUser,
// };

function setUser(sessionId, user) {
  const payload = user;
  const token = jwt.sign(payload, privateKey);
  return sessionIdToUserMap.set(sessionId, user);
}

function getUser(sessionId) {
  const decode = jwt.verify(token, privateKey);
  return sessionIdToUserMap.get(sessionId);
}

module.exports = {
  setUser,
  getUser,
};
