const express = require('express');
const router = express.Router();

const studentsController = require('../controllers/studentsController');

router.get('/', studentsController.getStudents);
router.post('/',studentsController.addStudent);

module.exports = router;