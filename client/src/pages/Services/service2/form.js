import React, { useState } from "react";
import "./service2.css";
import Complaint, { FormItems } from "./formItems";

function Form() {
  const [feedbackState, setFeedbackState] = useState(true);
  const [complaintState, setComplaintState] = useState(false);
  const [change, setchange] = useState(false);

  function feedback(event) {
    if (event.target.value === "feedback") {
      setFeedbackState(true);
      setComplaintState(false);
    } else {
      setFeedbackState(false);
      setComplaintState(true);
    }
  }

  function complaint(event) {
    console.log(event.target.value);
    if (event.target.value === "complaint") {
      setComplaintState(true);
      setFeedbackState(false);
    } else {
      setComplaintState(false);
      setFeedbackState(true);
    }
  }
  function handelfocus() {
    setchange(true);
  }
  function handelblur() {
    setchange(false);
  }
  function CreateFormItems(form) {
    return (
      <div>
        <div className="form-items">
          <div>
            <label for={form.id}>{form.label}</label>
            <span className="mandatory">*</span>
          </div>
          <input
            style={{
              borderBottom: change
                ? "2px solid  #2d76ab"
                : "1px solid rgb(218,222,227",
            }}
            onFocus={handelfocus}
            onBlur={handelblur}
            className="form-input"
            type={form.type}
            id={form.id}
            autoComplete="off"
            required
          />
        </div>
      </div>
    );
  }

  function CreateComplaintItem(complaint) {
    return (
      <div className="form-items">
        <div>
          {" "}
          <label className="complaint-label" for={complaint.id}>
            {complaint.label}
          </label>
          <span className="mandatory">*</span>
        </div>
        <input
          style={{
            borderBottom: change
              ? "2px solid  #2d76ab"
              : "1px solid rgb(218,222,227",
          }}
          onFocus={handelfocus}
          onBlur={handelblur}
          className="form-input"
          id={complaint.id}
          type={complaint.type}
          autoComplete="off"
          required
        />
      </div>
    );
  }

  return (
    <div>
      <h2 className="heading">FEEDBACK/COMPLAINT</h2>
      <div className="container">
        <h5 className="sub-heading">Leave Your Feedback/Complaint</h5>
        <div className="line"></div>

        <div className="form-type">
          <label>Type : </label>
          <div className="type">
            <input
              type="radio"
              id="feedback"
              onChange={feedback}
              value="feedback"
              checked
            ></input>{" "}
            <label for="feedback">Feedback </label>
          </div>
          <div className="type">
            <input
              type="radio"
              id="complaint"
              onChange={complaint}
              value="complaint"
            ></input>{" "}
            <label for="complaint">Complaint </label>
          </div>
        </div>
        <div className="form">{FormItems.map(CreateFormItems)}</div>
        <div className="form">
          {feedbackState && (
            <textarea
              className="message"
              placeholder="Feedback Message"
            ></textarea>
          )}
        </div>
        {complaintState && (
          <div className="complaint-form">
            <div className="form">{Complaint.map(CreateComplaintItem)}</div>
            <div className="form-items">
              <label>Upload File</label>
              <input type="file" className="form-input" />
            </div>

            <textarea
              className="message"
              placeholder="Complaint Message"
            ></textarea>
          </div>
        )}
        <input className="submit" type="submit" value="Submit" />
      </div>
    </div>
  );
}

export default Form;
