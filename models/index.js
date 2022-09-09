const User = require ("./User");
const Quote =require("./Diary");

User.hasMany(Quote);
Quote.belongsTo(User);

module.exports = {User, Quote };