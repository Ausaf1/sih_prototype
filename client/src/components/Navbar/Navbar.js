import React, { useState } from "react";
// import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Dropdown from "../Dropdown/Dropdown";
import { RiArrowDropDownFill } from "react-icons/ri";
import { GiCancel } from "react-icons/gi";
import { GoThreeBars } from "react-icons/go";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          LOGO
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? <GiCancel /> : <GoThreeBars />} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/AboutUS" className="nav-links" onClick={closeMobileMenu}>
              AboutUs
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Services <RiArrowDropDownFill />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className="nav-item">
            <Link
              to="/importantDocuments"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Important Documents
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/instituteLogin"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Institute Login
            </Link>
          </li>
          <li>
            <Link
              to="/studentLogin"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Student Login
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/officerLogin"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Officer's Login
            </Link>
          </li>
        </ul>
        {/* <Button /> */}
      </nav>
    </>
  );
}

export default Navbar;
