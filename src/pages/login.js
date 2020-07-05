import React, { useState, useEffect } from "react";
import "./login.scss";
import { connect } from 'react-redux'

import userActions from "../redux/actions/userActions"
import Loader from "../globalComponent/loader";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // componentWillReceiveProps

  useEffect(() => {
    if (props.loggedIn === "true") {
      localStorage.setItem("userToken", `Bearer ${props.userToken}`);
      props.history.push("/");
    }
  }, [props.loggedIn])


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    let userCredentials = {
      email,
      password,
    };
    props.login(userCredentials)

  };

  return (
    <div className="row login-page">
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
        </div>

        <button className="teal btn login" type="submit" onClick={handleSubmit}>
          Login
        </button>
      </form>

      {
        props.loggedIn === "pending" ? <Loader /> : null
      }

    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.user.loggedIn,
    userToken: state.user.userToken
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (userCredentials) => dispatch(userActions.login(userCredentials)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
