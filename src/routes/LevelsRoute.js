const express = require('express');
const LevelsController = require('../controllers/LevelsController')

const router = express.Router();

router
    .get('/levels', LevelsController.getLevels)
    .get('/levels/:id', LevelsController.getLevel)
    .post('/levels', LevelsController.createLevel)
    .put('/levels/:id', LevelsController.updateLevel)
    .delete('/levels/:id', LevelsController.deleteLevel)

module.exports = router