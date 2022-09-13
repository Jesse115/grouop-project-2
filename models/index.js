const User = require ("./User");
const Diary =require("./Diary");

User.hasMany(Diary);
Diary.belongsTo(User);

module.exports = {User, Diary };