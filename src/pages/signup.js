import React, { useState, useEffect } from "react";
import "./signup.scss";

import axios from "axios";

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    let userCredentials = {
      email,
      password,
      confirmPassword,
      userName,
    };

    // send the payload to create the user

    axios
      .post("/signup", userCredentials)
      .then((res) => {
        console.log(res);
        localStorage.setItem("userToken", `Bearer ${res.data.token}`);
        props.history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="row signup-page">
      <form className="col">
        <div className="row">
          <div className="input-field">
            <input
              id="email"
              type="email"
              className="validate"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label htmlFor="email">Email Id</label>
          </div>
          <div className="input-field">
            <input
              id="password"
              type="password"
              className="validate"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <label htmlFor="password">Password</label>
          </div>
          <div className="input-field">
            <input
              id="confirm-password"
              type="password"
              className="validate"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
            <label htmlFor="confirm-password">Confirm Password</label>
          </div>
          <div className="input-field">
            <input
              id="username"
              type="text"
              className="validate"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
            />
            <label htmlFor="username">Username</label>
          </div>
        </div>

        <button
          className="teal btn signup"
          type="submit"
          onClick={handleSubmit}
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
