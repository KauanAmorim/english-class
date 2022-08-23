const database = require('../models');

class PeopleController {
    static async getPeople(req, res) {
        try {
            const people = await database.People.findAll();
            return res.status(200).json(people);
        } catch (err) {
            return res.status(500).json({ error: err.message })
        }
    }
}

module.exports = PeopleController;