import React, { useState } from "react";
import "../Styles/Header.css";
import { Link } from "react-router-dom";

function Header() {
  const [opendropdown, setOpendropdown] = useState(false);

  const openDrop = () => {
    setOpendropdown(prevState => !prevState);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" onClick={() => setOpendropdown(prevState => !prevState)}>
          <img
            src="https://webicoun.com/assets/Webicoun-logo-BIGSIZE.png"
            className="nav-logo"
            alt="nav-logo"
          />
        </Link>

        <ul className={`nav-menu ${opendropdown && "active"}`}>
          <li className="nav-item">
            <Link
              to="/home"
              className="nav-link"
              onClick={() => setOpendropdown(prevState => !prevState)}
            >
              HOME
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="experts"
              className="nav-link"
              onClick={() => setOpendropdown(prevState => !prevState)}
            >
              EXPERTS
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/blog"
              href="#"
              className="nav-link"
              onClick={() => setOpendropdown(prevState => !prevState)}
            >
              BLOGS
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/login"
              className="nav-link login__btn"
              onClick={() => setOpendropdown(prevState => !prevState)}
            >
              LOGIN
            </Link>
          </li>
        </ul>
        <div
          className={`hamburger ${opendropdown && "active"}`}
          onClick={openDrop}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
