import React from "react";
import Slider from "../../components/Carousel/Slider";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Slider />
      <div class="container">
        <div class="column-2 box">
          <h1>What is Lorem Ipsum1?</h1>
          <p>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged
          </p>
        </div>
        <div class="column-1 box">
          <h1>What is Lorem Ipsum?</h1>
          <p>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the
            leap into electronic typesetting, remaining essentially unchanged
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
