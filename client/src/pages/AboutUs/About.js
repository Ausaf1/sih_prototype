import React from 'react'
import "./About.css"


const About = () => {
  return (
    <div className='container'>
      <h2>About Us</h2>
      <h4>Vision</h4>
      <p>This initiative aims at providing a Simplified, Mission-oriented, Accountable, Responsive & Transparent 'SMART' System for faster & effective disposal of Scholarships applications and delivery of funds directly into beneficiaries account without any leakages.</p>
      <h4>Mission</h4>
      <p>Our aims is to provide common electronic portal for implementing Scholarships schemes launched by Union Government, State Government and Union Territories across the country.</p>
      <h4>Objectives</h4>
      <ul>
        <li>Ensure timely disbursement of Scholarships to students</li>
        <li>Provide a common portal for various Scholarships schemes of Central and State Governments</li>
        <li>Create a transparent database of scholars</li>
        <li>Avoid duplication in processing</li>
        <li>Harmonisation of different Scholarships schemes & norms</li>
        <li>Application of Direct Benefit Transfer</li>
        <li>Ensure accountability in the process</li>       
      </ul>
      <h4>Benefits</h4>
      <ul>
        <li>Simplified process for the students</li>
        <ul className="subpoint">
          <li> - All scholarships information available under one umbrella</li>
        </ul>
        <li>Improved transparency</li>
        <ul className="subpoint">
          <li>- Duplicates can be reduced to the maximum extent</li>
        </ul>
        <li>Helps in standardisation </li>
        <ul className="subpoint">
          <li>- Master data for Institutions and courses at all India level </li>
          <li>- Scholarships processing</li>
        </ul>
        <li>Serves as a decision support system (DSS) for Ministries and departments as up-to date information will be available on demand</li>
        <li>Comprehensive MIS System to facilitate monitoring every stage of Scholarships distribution i.e. from student registration to delivery of funds</li>
      </ul>
    </div>
  )
}

export default About