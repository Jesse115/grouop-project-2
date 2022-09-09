const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Quote extends Model {}

Quote.init(
  {
    quoteId: {
      type: DataTypes.STRING,
    },
    title: {
      type: DataTypes.STRING,
    },
    author: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
  }
);
module.exports = Quote;
