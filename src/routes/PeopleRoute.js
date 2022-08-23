const express = require('express');
const PeopleController = require('../controllers/PeopleController');

const router = express.Router();

router
    .get('/people', PeopleController.getPeople)
    .get('/people/:id', PeopleController.getPerson)
    .post('/people', PeopleController.createPerson)

module.exports = router;