'use strict';
module.exports = (sequelize, DataTypes) => {
  const episode = sequelize.define('episode', {
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    toonId: DataTypes.INTEGER
  }, {});
  episode.associate = function(models) {
    // associations can be defined here
    episode.belongsTo(models.webtoon, {
      as: 'episode',
      foreignKey: 'toonId',
    })

  };
  return episode;
};