import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./profile.css";
function Profile() {
  const [instituteName, setInstituteName] = React.useState([]);
  const [instituteId, setInstituteId] = React.useState([]);
  const [instituteCourse, setInstituteCourse] = React.useState([]);
  const [insitituteAddress, setInsitituteAddress] = React.useState([]);
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
        setInstituteName(data.data.instituteName);
        setInstituteId(data.data.instituteId);
        setInstituteCourse(data.data.instituteCourse);
        setInsitituteAddress(data.data.instituteAddress);
      } catch (error) {
        localStorage.removeItem("authToken");
        // setError("You are not authorized to view this page");
      }
    };
    fetchPrivateData();
  }, [navigate]);
  return (
    <div className="profile">
      <div className="profile-header">
        <div className="profile-header-left">
          <h1 className="heading">{instituteName}</h1>
        </div>
        {/* <div className='profile-header-right'>
                    <button>Edit</button>
                </div> */}

        <div className="All-cards">
          <div className="p-card" style={{ backgroundColor: "#d1e9fc" }}>
            <img
              className="p-logo"
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
            />

            <div className="p-card-body">
              <h1 className="c-number" style={{ color: "rgb(6,27,100)" }}>
                999
              </h1>
              <h1 className="c-name" style={{ color: "#5377ad" }}>
                Applied
              </h1>
            </div>
          </div>
          <div className="p-card" style={{ backgroundColor: "#d0f2ff" }}>
            <img
              className="p-logo"
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/948/948256.png"
            />

            <div className="p-card-body">
              <h1 className="c-number" style={{ color: "#04297a" }}>
                987
              </h1>
              <h1 className="c-name" style={{ color: "#5377ad" }}>
                Benefited
              </h1>
            </div>
          </div>
          <div className="p-card" style={{ backgroundColor: "#fff7cd" }}>
            <img
              className="p-logo"
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
            />

            <div className="p-card-body">
              <h1 className="c-number" style={{ color: "#80560a" }}>
                State Nodal
              </h1>
              <h1 className="c-name" style={{ color: "#a1803d" }}>
                Status
              </h1>
            </div>
          </div>
          <div className="p-card" style={{ backgroundColor: "#ffe7d9" }}>
            <img
              className="p-logo"
              alt=""
              src="https://cdn-icons-png.flaticon.com/512/948/948225.png"
            />
            <i className="p-logo" class="fi fi-rr-settings"></i>
            <div className="p-card-body">
              <h1 className="c-number" style={{ color: "#7c1031" }}>
                4
              </h1>
              <h1 className="c-name" style={{ color: "#ae6270" }}>
                Courses
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="Main-Content">
        <div className="mc-left">
          {" "}
          <h1 className="p-mc-name">{instituteName}</h1>
          <h3 className="p-mc-id">Empanelment Id : {instituteId}</h3>
          <div className="mc-details">
            {" "}
            <p className="p-mc-details">Address: {insitituteAddress}</p>
            <p className="p-mc-details">Courses Offered: {instituteCourse}</p>
            <p className="p-mc-details">Students enrolled: 1987</p>
          </div>
          <div className="p-mc-buttons">
            <Link to={`/studentList/${instituteId}`}>
              <button className="but">APPLIED</button>
            </Link>
          </div>
          <div className="p-mc-buttons">
            <Link to={`/editProfile/${instituteId}`}>
              <button className="but">PROFILE</button>
            </Link>
          </div>
        </div>
        <div className="mc-right">
          <img
            className="p-mc-logo"
            src="https://media.glassdoor.com/sqll/540401/jamia-millia-islamia-squarelogo-1463577650514.png"
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
}
export default Profile;
