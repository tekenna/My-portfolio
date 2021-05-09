import React from "react";
import { Link } from "react-router-dom";
import { DataConsumer } from "../context";
import "./Nav.css";

function Nav() {
  return (
    <DataConsumer>
      {(value) => {
        const { closeContact, openContact } = value;
        return (
          <div className="nav_container">
            <h1>tekenna</h1>
            <ul>
              <li onClick={() => closeContact()}>
                <Link style={{ textDecoration: "none", color: "white" }} to="/">
                  home
                </Link>
              </li>
              <li onClick={() => closeContact()}>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/about"
                >
                  about me
                </Link>
              </li>
              <li onClick={() => closeContact()}>
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/work"
                >
                  My works
                </Link>
              </li>
              <li onClick={() => openContact()}>
                <Link style={{ textDecoration: "none", color: "white" }} to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        );
      }}
    </DataConsumer>
  );
}

export default Nav;
