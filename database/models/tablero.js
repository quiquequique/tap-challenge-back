const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Tablero extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Tablero.init({
    gameId: DataTypes.BIGINT,
    tableroGuardado: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Tablero',
  });
  return Tablero;
};
