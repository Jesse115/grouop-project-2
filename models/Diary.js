const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../config/connection");

class Diary extends Model { }

Diary.init(
  {
    diaryId: {
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
module.exports = Diary;
