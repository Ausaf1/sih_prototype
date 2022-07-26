import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="container">
      <h2 className="head2">About Us</h2>
      <h4>Vision</h4>
      <p className="para">
        This initiative aims at providing a Simplified, Mission-oriented,
        Accountable, Responsive & Transparent 'SMART' System for faster &
        effective disposal of Scholarships applications and delivery of funds
        directly into beneficiaries account without any leakages.
      </p>
      <h4 className="head4">Mission</h4>
      <p>
        Our aims is to provide common electronic portal for implementing
        Scholarships schemes launched by Union Government, State Government and
        Union Territories across the country.
      </p>
      <h4>Objectives</h4>
      <ul>
        <li className="list">
          Ensure timely disbursement of Scholarships to students
        </li>
        <li className="list">
          Provide a common portal for various Scholarships schemes of Central
          and State Governments
        </li>
        <li className="list">Create a transparent database of scholars</li>
        <li className="list">Avoid duplication in processing</li>
        <li className="list">
          Harmonisation of different Scholarships schemes & norms
        </li>
        <li className="list">Application of Direct Benefit Transfer</li>
        <li className="list">Ensure accountability in the process</li>
      </ul>
      <h4>Benefits</h4>
      <ul>
        <li className="list">Simplified process for the students</li>
        <ul className="subpoint">
          <li className="list">
            {" "}
            - All scholarships information available under one umbrella
          </li>
        </ul>
        <li>Improved transparency</li>
        <ul className="subpoint">
          <li className="list">
            - Duplicates can be reduced to the maximum extent
          </li>
        </ul>
        <li className="list">Helps in standardisation </li>
        <ul className="subpoint">
          <li className="list">
            - Master data for Institutions and courses at all India level{" "}
          </li>
          <li className="list">- Scholarships processing</li>
        </ul>
        <li className="list">
          Serves as a decision support system (DSS) for Ministries and
          departments as up-to date information will be available on demand
        </li>
        <li className="list">
          Comprehensive MIS System to facilitate monitoring every stage of
          Scholarships distribution i.e. from student registration to delivery
          of funds
        </li>
      </ul>
    </div>
  );
};

export default About;
