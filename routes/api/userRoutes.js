const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../../controllers/userController');

// /api/user
router.route('/').get(getUsers).post(createUser);

// /api/user/:userID
router.route('/:userID').get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/user/:userID/friends
// update friends list? 
// router.route('/:userID/friends')

module.exports = router;