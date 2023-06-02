const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
} = require('../../controllers/userController');

// /api/user
router.route('/').get(getUsers).post(createUser);

// /api/user/:id
router.route('/:id').get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/user/:id/friends/:friendId
router.route('/:id/friends/:friendId').post(addFriend);
// POST to add new friend by id
// DELETE to remove a friend from users list

module.exports = router;