const database = require('../models')

class LevelsController {
    static async getLevels(req, res) {
        try {
            const levels = await database.Levels.findAll();
            return res.status(200).json(levels);
        } catch (err) {
            return res.status(500).send({ message: err.message });
        }
    }

    static async getLevel(req, res) {
        try {
            const { id } = req.params
            const where = { where: { id: Number(id) } }
            const level = await database.Levels.findOne(where);
            return res.status(200).json(level);
        } catch (err) {
            return res.status(500).send({ message: err.message });
        }
    }

    static async createLevel(req, res) {
        try {
            const levelReceived = req.body
            const level = await database.Levels.create(levelReceived);
            return res.status(200).json(level);
        } catch (err) {
            return res.status(500).send({ message: err.message });
        }
    }

    static async updateLevel(req, res) {
        try {
            const { id } = req.params;
            const newData = req.body;

            // update
            const where = { where: { id: Number(id) } };
            await database.Levels.update(newData, where);

            // return data
            const level = await database.Levels.findOne(where);
            return res.status(200).json(level);
        } catch (err) {
            return res.status(500).send({ message: err.message });
        }
    }

    static async deleteLevel(req, res) {
        try {
            const { id } = req.params;
            const where = { where: { id: Number(id) } };
            await database.Levels.destroy(where);
            return res.status(200).json({ message: 'Level deleted' });
        } catch (err) {
            return res.status(500).send({ message: err.message });
        }
    }
}

module.exports = LevelsController;