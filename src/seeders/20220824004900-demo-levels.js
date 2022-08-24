module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert('Levels', [
			{
				desc_level: 'Begginer',
				createdAt: new Date(),
				updatedAt: new Date()			
			},
			{
				desc_level: 'Mid-level',
				createdAt: new Date(),
				updatedAt: new Date()
			},
			{
				desc_level: 'Advanced',
				createdAt: new Date(),
				updatedAt: new Date()
			} 
	], {})
  },

  down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Levels', null, {})
  }
}