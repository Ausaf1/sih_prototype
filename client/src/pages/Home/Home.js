/* eslint-disable jsx-a11y/no-distracting-elements */
import React from "react";
import Slider from "../../components/Carousel/Slider";
import BannerTop from "./banners/bannerTop/bannerTop";
import BannerMid from "./banners/bannerMid/bannerMid";
// import BannerBottom from "./banners/bannerbottom/bannerBottom";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Slider />

      <BannerTop />

      <div class="home-container">
        <div class="column-2 box">
          <div id="top">
            <h1 id="heading">
              <span className="icon">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4961/4961759.png"
                  alt=""
                ></img>
              </span>
              Help Desk
            </h1>
          </div>
          <p>
            Candidates can contact the Help Desk for resolution of the technical
            problems
          </p>
          <hr></hr>
          <h3>
            <span className="icon">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7RJKIKH4MjZC6WBXVPAiSHhYID0j-F80JAHER9p8&s"
                alt=""
              ></img>
            </span>
            18002335500
          </h3>
        </div>

        <div class="column-1 box">
          <div id="top">
            <h1 id="heading">
              <span className="icon">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/202/202408.png"
                  alt=""
                ></img>
              </span>
              Latest Update
            </h1>
          </div>
          <p>
            <marquee
              id="scroll"
              direction="up"
              scrollamount="3"
              height="200"
              onMouseOver="document.getElementById('scroll').stop();"
              onMouseOut="document.getElementById('scroll').start();"
            >
              Register with our Online Portal and get access to 100+ Services
            </marquee>
          </p>
        </div>
      </div>
      <BannerMid />

      {/* <div className='banner-bootom-text'>
        <h1 >NATIONAL SCHOLARSHIP AGENCY</h1>
        <p>World’s biggest platform for the innovators or entrepreneurs of tomorrow to start today towards a smarter India</p>
      </div>
      <BannerBottom /> */}
    </>
  );
};

export default Home;
