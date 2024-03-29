import React, { useEffect, useState } from "react";
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
  const [user, setUser] = useState("");

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

  useEffect(() => {
    setInterval(() => {
      const user1 = localStorage.getItem("authToken");
      if (user1) {
        setUser(user1);
      } else {
        setUser("");
      }
    }, 500);
  }, []);

  return (
    <>
      {!user ? (
        <nav className="Navbar1">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img
            src="/images/sih_logo.png"
            style={{
<<<<<<< HEAD
              width: "100px",
              height: "100px",
=======
              width: "86",
              height: "86px",
>>>>>>> 0e556a1be755f3732ca48d826913dcdf1e511fd2
              
            }}
            alt="example"
          />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className="fa-bars">{click ? <GiCancel /> : <GoThreeBars />}</i>
          </div>
          <ul className={click ? "Nav-Menu1 active" : "Nav-Menu1"}>
            <li className="Nav-Items">
              <Link to="/" className="Nav-Links1" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="Nav-Items">
              <Link
                to="/AboutUS"
                className="Nav-Links1"
                onClick={closeMobileMenu}
              >
                AboutUs
              </Link>
            </li>
            <li
              className="Nav-Items"
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              <Link
                to="/services"
                className="Nav-Links1"
                onClick={closeMobileMenu}
              >
                Services{" "}
                <RiArrowDropDownFill
                  style={{
                    display: "inline",
                  }}
                />
              </Link>
              {dropdown && <Dropdown />}
            </li>
            <li className="Nav-Items">
              <Link
                to="/importantDocuments"
                className="Nav-Links1"
                onClick={closeMobileMenu}
              >
                Important Documents
              </Link>
            </li>
            <li className="Nav-Items">
              <Link
                to="/instituteLogin"
                className="Nav-Links1"
                onClick={closeMobileMenu}
              >
                Institute Login
              </Link>
            </li>

            <li className="Nav-Items">
              <Link
                to="/officerLogin"
                className="Nav-Links1"
                onClick={closeMobileMenu}
              >
                Officer's Login
              </Link>
            </li>
          </ul>
          {/* <Button /> */}
        </nav>
      ) : (
        ""
      )}
    </>
  );
}

export default Navbar;
