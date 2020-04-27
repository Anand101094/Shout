import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { connect } from "react-redux"
import "./App.scss";
import Loader from "../src/globalComponent/loader"

import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Navbar from "./components/Navbar";
import ProtectedRoute from "../src/util/protectedRoute";

import WebWorker from "./Webworker"
import worker from "./app.worker"

class App extends Component {


  render() {
    let authenticated;
    let userToken = localStorage.getItem("userToken");
    if (userToken) {
      let decodedToken = jwt_decode(userToken);
      console.log(decodedToken);
      if (decodedToken.exp * 1000 < Date.now()) {
        authenticated = false;
      } else {
        authenticated = true;
      }
    } else {
      authenticated = false;
    }

    return (
      <div className="app">
        <BrowserRouter>
          <Navbar authenticated={authenticated} />
          <div className="container">
            <Switch>
              <ProtectedRoute
                exact
                path="/"
                component={Home}
                authenticated={authenticated}
              />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/loader" component={Loader} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reduxState: state
  }
}

export default connect(mapStateToProps)(App);
