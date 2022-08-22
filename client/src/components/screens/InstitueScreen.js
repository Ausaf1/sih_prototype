import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Profile from "../../pages/Institute_Side/profile/profile";
// import './instituteScreen.css'
const PrivateScreen = () => {
  const [error, setError] = useState("");
  const [privateData, setPrivateData] = useState("");
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
      // console.log(config);
      try {
        const { data } = await axios.get(
          "/api/private/institute/dashboard",
          config
        );
        console.log(data);
        setPrivateData(data.data.instituteName);
      } catch (error) {
        localStorage.removeItem("authToken");
        setError("You are not authorized to view this page");
      }
    };
    fetchPrivateData();
  }, [navigate]);

  // const logoutHandler = async () => {
  //   localStorage.removeItem("authToken");
  //   navigate("/instituteLogin");
  // };

  return error ? (
    <span className="error">{error}</span>
  ) : (
    <>
      {/* <button onClick={logoutHandler}>Logout</button> */}
      <div className='rowC'>
        <Profile />
      </div>


    </>
  );
};

export default PrivateScreen;