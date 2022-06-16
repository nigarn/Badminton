import React from "react";
import "assets/styles/newsCard.scss";
import "assets/styles/layout.scss";
import newsCardImage from "assets/newsCardImage.svg";

const NewsCard = () => {
  return (
    <div className="card news-card">
      <img src={newsCardImage} alt="newsTitle" />
      <div className="news-definition">
        <h5 className="card-title">Consectetur adipiscing </h5>
        <p>
          Elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco{" "}
        </p>
        <p className="news-date">14 Dec. 2022</p>
      </div>
    </div>
  );
};

export default NewsCard;
