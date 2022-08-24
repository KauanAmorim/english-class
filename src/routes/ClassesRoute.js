const express = require('express');
const ClassesController = require('../controllers/ClassesController');

const router = express.Router();

router
    .get('/classes', ClassesController.getClasses)
    .get('/classes/:id', ClassesController.getClass)
    .post('/classes', ClassesController.createClass)
    .put('/classes/:id', ClassesController.updateClass)
    .delete('/classes/:id', ClassesController.deleteClass)

module.exports = router