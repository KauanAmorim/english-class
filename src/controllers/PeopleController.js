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

    static async getPerson(req, res) {
        try {
            const { id } = req.params
            const where = {
                where: {
                    id: Number(id), 
                }
            }
            const person = await database.People.findOne(where);
            return res.status(200).json(person);
        } catch (err) {
            return res.status(500).json({ error: err.message })
        }
    }
}

module.exports = PeopleController;