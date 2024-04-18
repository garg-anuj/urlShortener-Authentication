const sessionIdToUserMap = new Map();

function setUser(sessionId, user) {
  return sessionIdToUserMap.set(sessionId, user);
}

function getUser(sessionId) {
  console.log("sessionIdToUserMap======", sessionIdToUserMap);
  return sessionIdToUserMap.get(sessionId);
}

module.exports = {
  setUser,
  getUser,
};
