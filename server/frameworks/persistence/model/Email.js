import { Sequelize, DataTypes, Model } from 'sequelize';

class Email extends Model {}

export default (sequelize) => {
  Email.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Email',
    tableName: 'emails',
    timestamps: false,
  });

  return Email;
};
