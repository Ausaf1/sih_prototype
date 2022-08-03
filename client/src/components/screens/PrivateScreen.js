import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PrivateScreen = () => {
  const [error, setError] = useState("");
  // const [privateData, setPrivateData] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/officerLogin");
    }

    const fetchPrivateData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        await axios.get("/api/private/officer/dashboard", config);
        // setPrivateData(data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized to view this page");
      }
    };
    fetchPrivateData();
  }, [navigate]);

const logoutHandler = async () => {
  localStorage.removeItem("authToken");
  navigate("/officerLogin");
}

  return error ? (
    <span className="error">{error}</span>
  ) : (
    <>
      <div
        style={{
          backgroundColor: "#f5f5f5",
          padding: "20px",
          borderRadius: "5px",
          margin: "20px",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        "Welcome to Private Area"
      </div>
      <button onClick={logoutHandler}>Logout</button>
    </>
  );
};

export default PrivateScreen;
