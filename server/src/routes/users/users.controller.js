const { response } = require('../../app');
const { getUserById } = require('../../models/users/users.model');

async function httpGetUserById(req, res) {
  const user = await getUserById('659509feabe27597dd1bd8b0');
  return res.status(200).json(user);
}

module.exports = {
  httpGetUserById,
};
