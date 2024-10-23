import express from "express";
import drinksRoute from "./routes/drinks.js";

const app = express();

app.use(express.json());
app.use("/api/drinks", drinksRoute);

app.get("/", (req, res) => {
  res.json("This is the server :3");
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});

