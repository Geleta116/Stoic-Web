import { Sequelize, DataTypes, Model } from 'sequelize';

class Quote extends Model {}

export default (sequelize) => {
  Quote.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    quote: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    author: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    authorImg: {
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'Quote',
    tableName: 'quotes',
    timestamps: false,
  });

  return Quote;
};
