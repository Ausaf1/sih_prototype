/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "./Institute.css";
import { useNavigate, Link } from "react-router-dom";
import {
  AiOutlineUnlock,
  AiOutlineMail,
  AiOutlineArrowRight,
} from "react-icons/ai";
import axios from "axios";
const InstituteLogin = () => {
  const [instituteId, setinstituteId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate("/institute/dashboard");
    }
  }, [navigate]);

  const loginHandler = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "/api/auth/instituteLogin",
        { instituteId, password },
        config
      );
      localStorage.setItem("authToken", data.token);
      navigate("/institute/dashboard");
    } catch (error) {
      setError(error.response.data.message);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  return (
    <div id="login-pagee">
      <div className="loginn">
        <div className="login-icon">
          <img
            alt=""
            src="https://th.bing.com/th/id/R.98f7ba11c0008416714360d79b38fcc3?rik=2Ejragac6mGlFQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fuser-png-icon-thin-line-user-icon-2232.png&ehk=xfJZe9qWw%2fORWGP1VnUnQPT3r09SLw4ihK%2fyNms%2b2OA%3d&risl=&pid=ImgRaw&r=0"
          />
        </div>
        <h2 className="login-title">Login</h2>
        <p className="notice">Please login to access the system</p>
        <form className="form-login" onSubmit={loginHandler}>
          {error && <span className="error">{error}</span>}
          <label for="instituteId">Institute Id</label>
          <div className="input-email">
            <AiOutlineMail className="icon" />
            <input
              type="instituteId"
              name="instituteId"
              placeholder="Enter your officer id"
              value={instituteId}
              onChange={(e) => setinstituteId(e.target.value)}
              required
            />
          </div>
          <label for="password">Password</label>
          <div className="input-password">
            <AiOutlineUnlock className="icon" />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit">
            <i className="fas fa-door-open"></i> Sign in
          </button>
        </form>
      </div>
      <div className="background">
        <h1>
          Is Your Institute not registered? Register and get your University
          Code.
        </h1>
        {/* <Link to="/Service3" > */}
        <a class="arrow">
          <Link to="/Service3">
            <AiOutlineArrowRight />
          </Link>
        </a>
      </div>
    </div>
  );
};

export default InstituteLogin;
