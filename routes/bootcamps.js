const express = require('express');
const router = express.Router();
const {
  getBoocamps,
  createBoocamp,
  getBoocamp,
  updateBoocamp,
  deleteBoocamp,
} = require('../controllers/bootcamps');

router.route('/').get(getBoocamps).post(createBoocamp);
router.route('/:id').get(getBoocamp).put(updateBoocamp).delete(deleteBoocamp);

module.exports = router;
