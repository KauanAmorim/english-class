const database = require('../models');

class ClassesController {
    static async getClasses(req, res) {
        try {
            const classes = await database.Classes.findAll()
            return res.status(200).json(classes);
        } catch (err) {
            return res.status(500).send({ message: err.message });
        }
    }

    static async getClass(req, res) {
        try {
            const { id } = req.params;
            const where = { where: { id: Number(id) } };
            const classFounded = await database.Classes.findOne(where);
            return res.status(200).json(classFounded);
        } catch (err) {
            return res.status(500).send({ message: err.message });
        }
    }

    static async createClass(req, res) {
        try { 
            const classReceived = req.body;
            const classCreated = await database.Classes.create(classReceived);
            return res.status(201).json(classCreated);
        } catch (err) {
            return res.status(500).send({ message: err.message });
        }
    }

    static async updateClass(req, res) {
        try {
            const { id } = req.params;
            const newData = req.body;

            // update
            const where = { where: { id: Number(id) } };
            await database.Classes.update(newData, where);

            // return data
            const classUpdated = await database.Classes.findOne(where);
            return res.status(200).json(classUpdated);

        } catch (err) {
            return res.status(500).send({ message: err.message });
        }
    }

    static async deleteClass(req, res) {
        try {
            const { id } = req.params;
            const where = { where: { id: Number(id) } };
            await database.Classes.destroy(where);
            return res.status(200).json({ message: 'Class deleted' });
        } catch (err) {
            return res.status(500).send({ message: err.message });
        }
    }
}

module.exports = ClassesController;
