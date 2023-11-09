import React, { useState } from "react";
import axios from "axios";
// import { useAuth } from "../Auth/AuthContext";
import { withRouter } from 'react-router-dom';
import { useHistory } from "react-router-dom"; // Import useHistory from react-router-dom

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);
  // const { login } = useAuth();
  const history = useHistory(); // Get the history object from react-router-dom

  const API_URL = "https://fakestoreapi.com/auth/login";

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(API_URL, {
        username,
        password,
      });

      const userToken = response.data.token;
      localStorage.setItem("userToken", userToken);

      // Set loginSuccess state to true
      setLoginSuccess(true);
      // login();
      // Redirect to the products page after successful login
      history.push("/checkout");

      console.log("Login successful!");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            success={loginSuccess}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}

export default withRouter(Login);
