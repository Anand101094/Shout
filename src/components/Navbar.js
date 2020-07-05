import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss"

const Navbar = ({ authenticated, ...props }) => {

  return (
    <nav>
      <div className="nav-wrapper teal lighten-1">
        <ul className="center">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
