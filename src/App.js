import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";
import userAction from "../src/redux/actions/userActions";
import "./App.scss";
import "./common.scss";

import Home from "./pages/home";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Navbar from "./components/Navbar";
import ProtectedRoute from "../src/util/protectedRoute";

class App extends Component {
  render() {

    return (
      <div className="app">
        <BrowserRouter>
          <Navbar authenticated={this.props.authenticated} />
          <div className="container">
            <Switch>
              <ProtectedRoute
                exact
                path="/"
                component={Home}
                authenticated={this.props.authenticated}
              />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authenticated: state.user.authenticated,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sessionExpired: () => dispatch(userAction.setExpiredSession()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
