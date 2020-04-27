import React, { useState, useEffect } from "react";
import { connect } from "react-redux"
import userActions from "../redux/actions/userActions"
import "./signup.scss";
import Loader from "../globalComponent/loader"


const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userName, setUserName] = useState("");

  // componentWillReceiveProps
  // saves the userToken to localstorage when the signup is successful
  // jumps the screen to Homepage

  useEffect(() => {
    if (props.signedUp === "true") {
      localStorage.setItem("userToken", `Bearer ${props.userToken}`);
      props.history.push("/");
    }
  }, [props.signedUp])


  const handleSubmit = (e) => {
    e.preventDefault();
    let newUserData = {
      email,
      password,
      confirmPassword,
      userName,
    };

    props.signup(newUserData)

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

      {
        props.signedUp === "pending" ? <Loader /> : null
      }

    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    signedUp: state.user.signedUp
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (newUserData) => dispatch(userActions.signup(newUserData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
