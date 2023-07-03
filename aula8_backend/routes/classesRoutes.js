const express = require('express');
const router = express.Router();

const classesController = require('../controllers/classesController');

router.get('/', classesController.getClasses);
router.post('/',classesController.addClasse);

module.exports = router;