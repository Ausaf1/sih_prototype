import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const InstituteScreen = () => {
  const [error, setError] = useState("");
  // const [privateData, setPrivateData] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("authToken")) {
      navigate("/instituteLogin");
    }

    const fetchPrivateData = async () => {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("authToken")}`,
        },
      };

      try {
        await axios.get("/api/private/institute/dashboard", config);
        // setPrivateData(data);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized to view this page");
      }
    };
    fetchPrivateData();
  }, [navigate]);

  // const logoutHandler = async () => {
  //   localStorage.removeItem("authToken");
  //   navigate("/officerLogin");
  // }

  return error ? (
    <span className="error">{error}</span>
  ) : (
    window.location.replace("http://localhost:3002/")
  );
};

export default InstituteScreen;
