import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Style.css";

export default function Signup() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  async function handleAuth() {
    try {
      await axios.post("http://localhost:8080/signup", {
        name: username,
        password: password,
      });
      fetchUsers();
    } catch (error) {
      console.error("Error during signup:", error);
    }
  }

  async function fetchUsers() {
    try {
      const response = await axios.get("http://localhost:8080/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
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

      <div className="users-container">
        <h2>Registered Users</h2>
        {users.map((user, index) => (
          <p key={index}>{user.name}</p>
        ))}
      </div>
    </div>
  );
}
