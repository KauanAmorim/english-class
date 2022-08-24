const database = require('../models')

class RegistrationsController {
    static async getPersonRegistration(req, res) {
        try {
            const { studentId, registerId } = req.params
            const where = { 
                where: { 
                    id: Number(registerId), 
                    studentId: Number(studentId) 
                } 
            }
            const registration = await database.Registrations.findOne(where)
            return res.status(200).json(registration)
        } catch (err) {
            return res.status(500).send({ message: err.message });
        }
    }

    static async createPersonRegistration(req, res) {
        try {
            const { studentId } = req.params
            const personRegistration = { ...req.body, studentId: Number(studentId) }
            const registrationCreated = await database.Registrations.create(personRegistration)
            return res.status(201).json(registrationCreated)
        } catch (err) {
            return res.status(500).send({ message: err.message });
        }
    }

    static async updatePersonRegistration(req, res) {
        try {
            const { studentId, registerId } = req.params
            const newData = req.body

            const where = { 
                where: { 
                    id: Number(registerId), 
                    studentId: Number(studentId) 
                } 
            }
            await database.Registrations.update(newData, where)

            const registration = await database.Registrations.findOne(where)
            return res.status(200).json(registration)
        } catch (err) { 
            return res.status(500).send({ message: err.message });
        }
    }

    static async deletePersonRegistration(req, res) {
        try {
            const { studentId, registerId } = req.params
            const where = { where: { id: Number(registerId), studentId: Number(studentId) } }
            await database.Registrations.destroy(where)

            return res.status(200).json({ message: 'Registration deleted' });
        } catch (err) {
            return res.status(500).send({ message: err.message });
        }
    }
}

module.exports = RegistrationsController;