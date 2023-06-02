const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thoughtController.js');

// /api/thought
// get all
// post new thought
router.route('/').get(getThoughts).post(createThought);

// /api/thought/:id
// get by id
// put by id
// delete by id
router.route('/:id')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/thought/:id/reactions
router.route('/:id/reactions').post().delete();
// POST create new reaction stored in single thoughts reactions array
// DELETE to remove a reaction by the reactions id value

module.exports = router;
