import React, { useState, useEffect } from "react";
import { connect } from "react-redux"
import userAction from "../redux/actions/userActions"
import "./signup.scss";

import axios from "axios";

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (props.signedUp === "true") {
      localStorage.setItem("userToken", `Bearer ${props.userToken}`);
      props.history.push("/");
    }
  }, [props.signedUp])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    let signUpData = {
      email,
      password,
      confirmPassword,
      userName,
    };

    props.signUp(signUpData)

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

const mapStateToProps = (state) => {
  return {
    userToken: state.user.userToken,
    signedUp: state.user.signedUp
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (signUpData) => dispatch(userAction.signUp(signUpData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
