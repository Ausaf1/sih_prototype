import React from "react";
import Slider from "../../components/Carousel/Slider";
import BannerTop from "./banners/bannerTop/bannerTop";
import BannerMid from "./banners/bannerMid/bannerMid";
import BannerBottom from "./banners/bannerbottom/bannerBottom";
import "./Home.css";

const Home = () => {

  return (
    <>
      <Slider />

      <BannerTop />

      <div class="home-container">


        <div class="column-2 box">
          <div id="top">
            <h1 id="heading"><span className="icon"><img src="https://cdn-icons.flaticon.com/png/512/3059/premium/3059407.png?token=exp=1659969201~hmac=fa1c4368f588c0b037e62c88770f2092"></img></span>Help Desk</h1>
          </div>
          <p>Candidates can contact the Help Desk for resolution of the technical problems</p>
          <hr></hr>
          <h3><span className="icon"><img src="https://cdn-icons.flaticon.com/png/512/3059/premium/3059407.png?token=exp=1659969201~hmac=fa1c4368f588c0b037e62c88770f2092"></img></span>18002335500</h3>
        </div>

        <div class="column-1 box">
          <div id="top">
            <h1 id="heading"><span className="icon"><img src="https://cdn-icons-png.flaticon.com/512/202/202408.png"></img></span>Latest Update</h1>

          </div>
          <p>
            <marquee direction="up" scrollamount="3" height="200">
              Register with our Online Portal and get access to 100+ Services
            </marquee>
          </p>
        </div>
      </div>
      <BannerMid />

      <div className='banner-bootom-text'>
        <h1 >NATIONAL SCHOLARSHIP AGENCY</h1>
        <p>World’s biggest platform for the innovators or entrepreneurs of tomorrow to start today towards a smarter India</p>
      </div>
      <BannerBottom />
    </>
  );
};

export default Home;