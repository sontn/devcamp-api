const express = require('express');
const router = express.Router();
const bootcamps = require('../controllers/bootcamps');

const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = bootcamps;

router.route('/').get(getBootcamps);

router
  .route('/:id')
  .get(getBootcamp)
  .post(createBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
