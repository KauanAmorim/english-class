const express = require('express');
const PeopleController = require('../controllers/PeopleController');

const router = express.Router();

router.get('/people', PeopleController.getPeople);

module.exports = router;