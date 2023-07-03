const express = require('express');
const router = express.Router();

const instructorController = require('../controllers/instructorsController');

router.get('/', instructorController.getInstructors);
router.post('/',instructorController.addInstructor);

module.exports = router;