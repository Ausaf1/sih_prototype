import React, { useState } from "react";
import "./service2.css";
import Items  from "./components/FormItems";
import ComplaintItems from "./components/ComplaintItems";

function Form() {
  const [feedbackState, setFeedbackState] = useState(true);
  const [complaintState, setComplaintState] = useState(false);
  const [markFeedback,setMarkFeedback]=useState(true);
  const [markComplaint,setMarkComplaint]=useState(false);

  function handleTypeChange(event) {
    if (event.target.value === "feedback") {
      setFeedbackState(true);
      setComplaintState(false);
    } else if(event.target.value === "complaint") {
      setFeedbackState(false);
      setComplaintState(true);
    }
    setMarkFeedback((previousValue)=>!previousValue);
    setMarkComplaint((previousValue)=>!previousValue);
  }
  return (
    <div>
      <h2 className="heading-query">FEEDBACK/COMPLAINT</h2>
      <div className="container-query">
        <h5 className="sub-heading-query">Leave Your Feedback/Complaint</h5>
        <div className="line"></div>
        <div className="form-type">
          <label>Type : </label>
          <div className="type">
            <input type="radio" className="r-button"  onChange={handleTypeChange} value="feedback" {...markFeedback ? {checked:true}:{checked:false}}></input>{" "}
            <label for="feedback">Feedback </label>
          </div>
          <div className="type">
            <input type="radio" className="r-button" onChange={handleTypeChange} value="complaint" {...markComplaint ? {checked:true}:{checked:false}}></input>{" "}
            <label for="complaint">Complaint </label>
          </div>
        </div>
        <Items />
        <div className="form">
          {feedbackState && (<textarea id="f-message" placeholder="Feedback Message"></textarea>)}
        </div>
        {complaintState && (
          <div className="complaint-form">
          <ComplaintItems /> 
            <div className="form-items">
              <label>Upload File</label>
              <input type="file" className="form-input" />
            </div>
            <div className="form-items">
            <textarea id="c-message" placeholder="Complaint Message"></textarea>
            </div>
          </div>
        )}
        <input className="submit" type="submit" value="Submit" />
      </div>
    </div>
  );
}

export default Form;
