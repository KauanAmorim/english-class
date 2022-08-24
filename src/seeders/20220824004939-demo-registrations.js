module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Registrations', [
			{
				status: "confirmed",
				studentId: 1,
				classId: 1,
				createdAt: new Date(),
				updatedAt: new Date()
		},
		{
			status: "confirmed",
			studentId: 2,
			classId: 1,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			status: "confirmed",
			studentId: 3,
			classId: 2,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			status: "confirmed",
			studentId: 4,
			classId: 3,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			status: "cancelled",
			studentId: 1,
			classId: 2,
			createdAt: new Date(),
			updatedAt: new Date()
	},
		{
			status: "cancelled",
			studentId: 2,
			classId: 2,
			createdAt: new Date(),
			updatedAt: new Date()
		}
		], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Registrations', null, {})
  }
}