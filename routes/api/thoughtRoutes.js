const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thoughtController.js');

// /api/thought
router.route('/').get(getThoughts).post(createThought);

// /api/thought/:id
router.route('/:id')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/thought/:id/reactions
router.route('/:id/reactions').post(addReaction);
router.route('/:id/reactions/:reactionId').delete(deleteReaction);

module.exports = router;
