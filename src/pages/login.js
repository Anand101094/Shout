import React from "react";
import "./login.scss";

const Login = (props) => {
  return (
    <div class="row login-page">
      <form class="col">
        <div class="row">
          {/* <div class="input-field">
            <input id="icon_prefix" type="text" class="validate" />
            <label for="icon_prefix">Name</label>
          </div> */}
          <div class="input-field">
            <input id="icon_telephone" type="email" class="validate" />
            <label for="icon_telephone">Email Id</label>
          </div>
          <div class="input-field">
            <input id="icon_telephone" type="password" class="validate" />
            <label for="icon_telephone">Password</label>
          </div>
          {/* <div class="input-field">
            <input id="icon_telephone" type="password" class="validate" />
            <label for="icon_telephone">Confirm Password</label>
          </div> */}
        </div>
        <button className="teal btn login">Login</button>
      </form>
    </div>
  );
};

export default Login;
