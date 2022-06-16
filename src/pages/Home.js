import React from "react";
import "App.scss";
import Slider from "components/Slider";
import NewsCard from "components/NewsCard";
import "assets/styles/home.scss";
const Home = () => {
  return (
    <div>
      <div>
        <Slider />
      </div>
      <h3 className="title">XƏBƏRLƏR</h3>
      <div className="card-line">
        <NewsCard />
        
      </div>
    </div>
  );
};

export default Home;
