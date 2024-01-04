const { response } = require('../../app');
const { getUserById } = require('../../models/users/users.model');

async function httpGetUserById(req, res) {
  try {
    const userId = req.params.id;

    if (userId.length !== 24) {
      return res.redirect('/usernotfound');
    }

    const user = await getUserById(userId);

    if (!user) {
      return res.redirect('/usernotfound');
    }

    return res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = {
  httpGetUserById,
};
