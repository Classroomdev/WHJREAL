const { response } = require('../../app');
const { getUserById } = require('../../models/users/users.model');

async function httpGetUserById(req, res) {
  const userId = req.params.id;
  const user = await getUserById(userId);
  return res.status(200).json(user);
}

module.exports = {
  httpGetUserById,
};
