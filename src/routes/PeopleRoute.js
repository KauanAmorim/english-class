const express = require('express');
const PeopleController = require('../controllers/PeopleController');
const RegistrationsController = require('../controllers/RegistrationsController');

const router = express.Router();

router
    .get('/people', PeopleController.getPeople)
    .get('/people/:id', PeopleController.getPerson)
    .post('/people', PeopleController.createPerson)
    .put('/people/:id', PeopleController.updatePerson)
    .delete('/people/:id', PeopleController.deletePerson)

router
    .get('/people/:studentId/registrations/:registerId', RegistrationsController.getPersonRegistration)
    .post('/people/:studentId', RegistrationsController.createPersonRegistration)
    .put('/people/:studentId/registrations/:registerId', RegistrationsController.updatePersonRegistration)
    .delete('/people/:studentId/registrations/:registerId', RegistrationsController.deletePersonRegistration)

module.exports = router;