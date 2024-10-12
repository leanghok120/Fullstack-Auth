import React from "react";
import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleAuth() {
    try {
      await axios.post("http://localhost:8080/login", {
        name: username,
        password: password,
      });
      setMessage("User logged in successfully!");
    } catch (error) {
      console.error("Error during login:", error);
      setMessage("An error occured!");
    }
  }

  return (
    <div className="app-container">
      <div className="auth-container">
        <h2>Login</h2>
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
        <button onClick={handleAuth}>Login</button>
      </div>
      <h2 className="message">{message}</h2>
    </div>
  );
}
