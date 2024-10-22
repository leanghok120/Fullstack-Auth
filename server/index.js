import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.json("This is the server :3");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
