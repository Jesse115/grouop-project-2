const Sequelize = require("sequelize");
const session = require("express-session");
const SequilizeStore = require("connect-session-sequilize")(session.Store);
require("dotenv").config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "mysql",
      port: 3306,
    }
  );
}
//Establishing Cookies

const sessionConfig = {
  secret: process.env.SECRET,
  cookie: {
    maxAge: 1 * 60 * 1000, //one hour
    httpOnly: true,
    secure: false,
    sameSite: "strict",
 },
 resave: false,
 saveUnitialized: true,
 store: new SequilizeStore({
  db: SequilizeStore,
 })
};
module.exports = { sequelize, SessionConfig };
