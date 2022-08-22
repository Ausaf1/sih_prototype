import React from "react";
import "./bannerTop.css";
function BannerTop() {
  return (
    <div className="bannerTop">
      <div className="boxes">
        <div className="one">
          <div className="col1 ">
            <div className="topView">
              <h3>
                <span>
                  <img src="https://cdn-icons-png.flaticon.com/512/6704/6704953.png"></img>
                </span>
                View
              </h3>
            </div>
            <div className="content">
              <h1>problem Statement</h1>
            </div>
          </div>
          <div className="col1 ">
            <div className="topView">
              <h3>
                <span>
                  <img src="https://cdn-icons-png.flaticon.com/512/6704/6704953.png"></img>
                </span>
                View
              </h3>
            </div>
            <div className="content">
              <h1>Results for SIH 2022 - HW and SW Edition</h1>
            </div>
          </div>
        </div>
        <div className="one">
          <div className="col1">
            <div className="topView">
              <h3>
                <span>
                  <img src="https://cdn-icons-png.flaticon.com/512/6704/6704953.png"></img>
                </span>
                View
              </h3>
            </div>
            <div className="content">
              <h1>SIH Junior Result</h1>
            </div>
          </div>
          <div className="col1">
            <div className="topView">
              <h3>
                <span>
                  <img src="https://cdn-icons-png.flaticon.com/512/6704/6704953.png"></img>
                </span>
                View
              </h3>
            </div>
            <div className="content">
              <h1>Nodal Centers for SIH 2022</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BannerTop;
