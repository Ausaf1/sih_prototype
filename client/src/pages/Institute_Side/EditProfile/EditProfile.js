import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./EditProfile.css";
const EditProfile = () => {
  const { id } = useParams();
  console.log(id);
  const [password, setPassword] = useState("");
  const [logo, setLogo] = useState("");
  const [courseId, setCourse] = useState("");
  const [instituteAddress, setAddress] = useState("");
  const [instituteEmail, setEmail] = useState("");
  const [bankName, setBankname] = useState("");
  const [bankAccountNumber, setBankaccount] = useState("");
  const [bankIfscCode, setBankifsc] = useState("");
  const [bankBranch, setBankbranch] = useState("");

  const clearValues = () => {
    setPassword("");
    setLogo("");
    setCourse("");
    setAddress("");
    setEmail("");
    setBankname("");
    setBankaccount("");
    setBankifsc("");
    setBankbranch("");
  };

  const handleclick = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      password,
      logo,
      courseId,
      instituteAddress,
      instituteEmail,
      bankName,
      bankAccountNumber,
      bankIfscCode,
      bankBranch,
    });
    console.log(body);
    try {
      const res = await axios.post(
        `http://localhost:5000/api/institute/updateProfile/${id}`,
        body,
        config
      );
      console.log(res);
      alert("Profile Updated Successfully");
      clearValues();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div class="wrapper">
      <div class="title">Update Form</div>
      <div class="form">
        <div class="inputfield">
          <label>Logo Link</label>
          <input
            type="text"
            class="input"
            name="logo"
            value={logo}
            onChange={(e) => setLogo(e.target.value)}
            required
          />
        </div>
        <div class="inputfield">
          <label>Password*</label>
          <input
            type="text"
            class="input"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div class="inputfield">
          <label>Course Id</label>
          <input
            type="text"
            class="input"
            name="courseId"
            value={courseId}
            onChange={(e) => setCourse(e.target.value)}
            required
          />
        </div>
        <div class="inputfield">
          <label>Email Address</label>
          <input
            type="text"
            class="input"
            name="instituteEmail"
            value={instituteEmail}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div class="inputfield">
          <label>Address</label>
          <textarea
            class="textarea"
            name="insitituteAddress"
            value={instituteAddress}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></textarea>
        </div>
        <div class="inputfield">
          <label>Bank Name</label>
          <input
            type="text"
            class="input"
            name="bankName"
            value={bankName}
            onChange={(e) => setBankname(e.target.value)}
            required
          />
        </div>
        <div class="inputfield">
          <label>Bank Account Number</label>
          <input
            type="text"
            class="input"
            name="bankAccountNumber"
            value={bankAccountNumber}
            onChange={(e) => setBankaccount(e.target.value)}
            required
          />
        </div>
        <div class="inputfield">
          <label>Bank IFSC Code</label>
          <input
            type="text"
            class="input"
            name="bankIfscCode"
            value={bankIfscCode}
            onChange={(e) => setBankifsc(e.target.value)}
            required
          />
        </div>
        <div class="inputfield">
          <label>Bank Branch</label>
          <input
            type="text"
            class="input"
            name="bankBranch"
            value={bankBranch}
            onChange={(e) => setBankbranch(e.target.value)}
            required
          />
        </div>

        <div class="inputfield terms">
          <label class="check">
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <p>_____Agreed to terms and conditions</p>
        </div>
        <div class="inputfield">
          <input
            type="submit"
            value="Register"
            class="btn"
            onClick={handleclick}
          />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
