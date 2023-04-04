import React, { useState } from "react";
import Papa from "papaparse"; // A library for parsing CSV files

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission
    setError("");

    // Load the CSV file and check if the username and password match
    Papa.parse("/data.csv", {
      download: true,
      header: false,
      complete: (results) => {
        const users = results.data;
        const isValid = users.some(
          (user) => user[0] === username.toLowerCase() && user[1] === password
        );
        if (isValid) {
          // Login successful
          alert("Login successful");
        } else {
          // Login failed
          setError("Invalid email or password");
        }
      },
      error: (error) => {
        console.error(error);
        setError("Error loading user data");
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Email:</label>
      <input
        type="email"
        id="username"
        value={username}
        onChange={handleUsernameChange}
        required
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
        required
      />

      {error && <div className="error">{error}</div>}

      <button type="submit">Login</button>
    </form>
  );
}
