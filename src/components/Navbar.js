import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/assets/images/Logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top "> 
      <div className="container-fluid"> 
        <Link className="navbar-brand" to="/">
          <img
            src={logo}
            alt="logo"
            style={{ width: "48px", height: "48px" }}
          />
        </Link>
        <div className="navbar-nav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                style={{ color: "white" }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#exercises"
                style={{ color: "white" }}
              >
                Exercises
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
