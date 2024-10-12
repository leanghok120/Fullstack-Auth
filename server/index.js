import express from "express";
import cors from "cors";
import mysql from "mysql";

const app = express();

app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "Boba_Auth",
});

app.get("/", (req, res) => {
  res.json("Hello from the server!");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080 :3");
});
