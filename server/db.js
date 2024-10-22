import mysql from "mysql";
import "dotenv/config";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.MYSQL_PASSWORD,
  database: "boba_bliss",
});
