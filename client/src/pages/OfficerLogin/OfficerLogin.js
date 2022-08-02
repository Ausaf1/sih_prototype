import React, { useEffect, useState } from "react";
import "./OfficerLogin.css";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineUnlock, AiOutlineMail } from "react-icons/ai";
import axios from "axios";

const OfficerLogin = () => {
  const [officerId, setOfficerId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      navigate("/officer/dashboard");
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
        "/api/auth/officerLogin",
        { officerId, password },
        config
      );
      localStorage.setItem("authToken", data.token);
      navigate("/officer/dashboard");
    } catch (error) {
      setError(error.response.data.message);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  return (
    <div id="login-page">
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
        <label for="officerId">Officer Id</label>
        <div className="input-email">
          <AiOutlineMail className="icon" />
          <input
            type="officerId"
            name="officerId"
            placeholder="Enter your officer id"
            value={officerId}
            onChange={(e) => setOfficerId(e.target.value)}
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
      {/* Forgot password? */}
      <p className="forgot-password">
        <Link to="/forgot-password">Forgot password?</Link>
      </p>
    </div>
  );
};

export default OfficerLogin;
