const User = require('./users.mongo');

async function getUserById(userId) {
  return await User.findOne({ _id: userId }, { _id: 0, __v: 0 });
}

module.exports = {
  getUserById,
};
