'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('webtoons', [
      {
        title: "True Beauty",
        genre: "drama",
        isFavorite: false,
        image: "https://www.forbes.com/sites/joanmacdonald.jpg",
        createdBy: 1
      },
      {
        title: "Age Matters",
        genre: "drama",
        isFavorite: false,
        image: "https://www.forbes.com/sites/joanmacdonald.jpg",
        createdBy: 1
      },
      {
        title: "A Good Day to be a Dog",
        genre: "drama",
        isFavorite: true,
        image: "https://www.forbes.com/sites/joanmacdonald.jpg",
        createdBy: 1
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('webtoons', null, {});
  }
};