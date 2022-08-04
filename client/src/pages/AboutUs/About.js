import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./About.css";

const About = () => {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div>
          <h2 className="head2">ABOUT US</h2>

    <div className="container">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            // color: {
            //   value: "#0d47a1",
            // },
          },
          fpsLimit: 80,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.8,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <h4 className="head4">Vision</h4>
      <p className="content">
        This initiative aims at providing a Simplified, Mission-oriented,
        Accountable, Responsive & Transparent 'SMART' System for faster &
        effective disposal of Scholarships applications and delivery of funds
        directly into beneficiaries account without any leakages.
      </p>
      <h4 className="head4">Mission</h4>
      <p className="content">
        Our aims is to provide common electronic portal for implementing
        Scholarships schemes launched by Union Government, State Government and
        Union Territories across the country.
      </p>
      <h4 className="head4">Objectives</h4>
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
      <h4 className="head4">Benefits</h4>
      <ul>
        <li className="list">Simplified process for the students</li>
        <ul className="subpoint">
          <li className="list">
         
            - All scholarship information available under one umbrella
          </li>
        </ul>
        <li className="list">Improved transparency</li>
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
    </div>
  );
};

export default About;
