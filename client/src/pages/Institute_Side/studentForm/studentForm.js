import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./studentForm.css";
function StudentForm() {
  const [studentName, setName] = useState("");
  const [studentCourse, setCourse] = useState("");
  const [aadharCard, setAadharCard] = useState("");
  const [instituteName, setInstitute] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [marksheet10th, setMarksheetT] = useState("");
  const [marksheet12th, setMarksheetTW] = useState("");
  const [domicileCertificate, setDomicile] = useState("");

  // const [income, setIncome] = useState("");
  const [incomeCertificate, setIncomeCertificate] = useState("");

  const clearValues = () => {
    setName("");
    setCourse("");
    setAadharCard("");
    setInstitute("");
    setPhone("");
    setEmail("");
    setMarksheetT("");
    setMarksheetTW("");
    setDomicile("");
    setIncomeCertificate("");
  };

  const addstudent = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({
      studentName,
      studentCourse,
      aadharCard,
      instituteName,
      phoneNumber,
      email,
      marksheet10th,
      marksheet12th,
      domicileCertificate,
      // income,
      incomeCertificate,
    });
    console.log(body);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/institute/addStudent",
        body,
        config
      );
      // toast("Student Added Successfully", {
      //   position: "top-center",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      // });
      alert("Student Added Successfully");
      clearValues();
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="student-form">
      <div className="student-form-header">
        <h1>Student Form</h1>
      </div>
      <form onSubmit={addstudent}>
        <div className="student-form-body">
          <div className="student-form-body-left">
            <div className="student-form-body-left-top">
              <div className="student-form-body-left-top-left">
                <h3>Personal Details</h3>
              </div>
            </div>
            <div className="student-form-body-left-bottom">
              <div className="details">
                <div className="student-form-body-left-bottom-left">
                  <h4>Name</h4>
                </div>
                <div className="student-form-body-left-bottom-right">
                  <input
                    className="input1"
                    type="text"
                    name="studentName"
                    placeholder="Enter Name"
                    value={studentName}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="details">
                <div className="student-form-body-left-bottom-left">
                  <h4>Course Name</h4>
                </div>
                <div className="student-form-body-left-bottom-right">
                  <input
                    className="input1"
                    type="text"
                    name="studentCourse"
                    placeholder="Enter Course name"
                    value={studentCourse}
                    onChange={(e) => setCourse(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="details">
                <div className="student-form-body-left-bottom-left">
                  <h4>Adhaar Number</h4>
                </div>
                <div className="student-form-body-left-bottom-right">
                  <input
                    className="input1"
                    type="text"
                    name="aadharCard"
                    placeholder="Enter Adhaar no"
                    value={aadharCard}
                    onChange={(e) => setAadharCard(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="student-form-body-right">
            <div className="student-form-body-right-top">
              <div className="student-form-body-right-top-left">
                <h3>Contact Details</h3>
              </div>
            </div>
            <div className="student-form-body-left-bottom">
              <div className="details">
                <div className="student-form-body-left-bottom-left">
                  <h4>Institute Name</h4>
                </div>
                <div className="student-form-body-left-bottom-right">
                  <input
                    className="input1"
                    type="text"
                    name="instituteName"
                    placeholder="Enter Address"
                    value={instituteName}
                    onChange={(e) => setInstitute(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="details">
                <div className="student-form-body-left-bottom-left">
                  <h4>Email</h4>
                </div>
                <div className="student-form-body-left-bottom-right">
                  <input
                    className="input1"
                    type="text"
                    name="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="details">
                <div className="student-form-body-left-bottom-left">
                  <h4>Phone</h4>
                </div>
                <div className="student-form-body-left-bottom-right">
                  <input
                    className="input1"
                    type="text"
                    name="phoneNumber"
                    placeholder="Enter Phone"
                    value={phoneNumber}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="student-form-footer">
          <div className="details">
            <div className="student-form-body-left-bottom-left">
              <h4 className="doc-name">Documents</h4>
            </div>

            <div className="documents">
              <h5 className="doc-name">Income Documents</h5>
              <input
                className="doc-input"
                type="text"
                placeholder="Enter Documents"
                value={incomeCertificate}
                onChange={(e) => setIncomeCertificate(e.target.value)}
                required
              />
              {/* <input className="doc-input" type="file" /> */}
              <h5 className="doc-name">MarkSheet 10th</h5>
              <input
                className="doc-input"
                type="text"
                name="marksheet10th"
                value={marksheet10th}
                onChange={(e) => setMarksheetT(e.target.value)}
                required
                placeholder="Enter Documents"
              />
              {/* <input className="doc-input" type="file" /> */}
              <h5 className="doc-name">MarkSheet 12th</h5>
              <input
                className="doc-input"
                type="text"
                name="marksheet12th"
                value={marksheet12th}
                onChange={(e) => setMarksheetTW(e.target.value)}
                required
                placeholder="Enter Documents"
              />
              {/* <input className="doc-input" type="file" /> */}
              <h5 className="doc-name">Domicile Certificate</h5>
              <input
                className="doc-input"
                type="text"
                name="domicileCertificate"
                value={domicileCertificate}
                onChange={(e) => setDomicile(e.target.value)}
                required
                placeholder="Enter Documents"
              />
              {/* <input className="doc-input" type="file" /> */}
              {/* <input
                className="doc-input"
                type="text"
                name="incomeCertificate"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                required
                placeholder="Enter Documents"
              /> */}
              {/* <input className="doc-input" type="file" /> */}
            </div>
          </div>
        </div>
        <button id="student-form-submit" type="submit">
          Submit
        </button>
        {/* <ToastContainer /> */}
      </form>
    </div>
  );
}

export default StudentForm;
