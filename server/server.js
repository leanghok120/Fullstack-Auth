import express from "express";
import bcrypt from "bcrypt";
import cors from "cors";

const users = [
  {
    name: "Leanghok",
    password: "$2b$10$L.wfazmvFjmQctqPCIzXVOocyZTFOSpuNoKKBungZNhg0LsNGD816",
  },
];

const app = express();

app.use(express.json());
app.use(cors());

function isContainsSpace(text) {
  return /\s/.test(text);
}

app.get("/", (req, res) => {
  res.json("This is the server!");
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/signup", async (req, res) => {
  const name = req.body.name;
  const password = req.body.password;

  // Input validaton
  if (isContainsSpace(name)) {
    return res.json("Error: Username cannot contain spaces!");
  }
  if (isContainsSpace(password)) {
    return res.json("Error: Password cannot contain spaces!");
  }

  if (users.find((user) => user.name == name)) {
    return res.json("Error: This username is already used!");
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = { name: name, password: hashedPassword };

  users.push(user);

  res.json("User added successfully!");
});

app.post("/login", async (req, res) => {
  const name = req.body.name;
  const password = req.body.password;

  const user = users.find((user) => user.name == name);

  if (!user) {
    return res.json("User not found!");
  }

  if (await bcrypt.compare(password, user.password)) {
    res.json("Login successfully!");
  } else {
    res.json("Error: Invalid credentials!");
  }
});

app.listen(8080, () => {
  console.log("Server is running on http://localhost:8080!");
});
