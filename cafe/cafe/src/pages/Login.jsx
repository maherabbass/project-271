import React from "react";
import "../assets/css/login.css";
import logo from "../assets/images/logo.png";
import avatar from "../assets/images/login/man-avatar-icon-free-vector.webp";

const Login = () => {
  return (
    <div className="body">
      <div className="left">
        <img src={logo} className="logo" alt="Logo" />
        <p className="about">about us, Copyright etc...</p>
      </div>

      <div className="right">
        <div className="loginbox">
          <img src={avatar} className="avatar" alt="Avatar" />
          <h1>Login Here</h1>
          <form>
            <label htmlFor="">Username</label>
            <br />
            <input type="text" id="" name="" placeholder="Enter Username" />
            <br />
            <label htmlFor="">Password</label>
            <br />
            <input type="password" id="" name="" placeholder="Enter Password" />
            <br />
            <br />
            <input type="submit" value="Login" />
            <a href="/" className="guest">
              Join as a guest
            </a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
