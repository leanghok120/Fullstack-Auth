import axios from "axios";
import React, { useState } from "react";
import "../Style.css";

export default function Signup() {
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleAuth() {
    try {
      await axios.post("http://localhost:8080/signup", {
        name: username,
        password: password,
      });
      setMessage("User created successfully!");
    } catch (error) {
      console.error("Error during signup:", error);
      setMessage("An error occured!");
    }
  }

  return (
    <div className="app-container">
      <div className="auth-container">
        <h2>Sign Up</h2>
        <input
          type="text"
          placeholder="Enter your username"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button onClick={handleAuth}>Sign Up</button>
      </div>
      <h2 className="message">{message}</h2>
    </div>
  );
}
