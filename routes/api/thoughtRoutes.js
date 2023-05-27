const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thoughtController.js');

// /api/thought
router.route('/').get(getThoughts).post(createThought);

// /api/thought/:thoughtID
router.route('/:thoughtID')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;
