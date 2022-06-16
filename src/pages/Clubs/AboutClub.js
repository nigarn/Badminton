import React from "react";
import "assets/styles/aboutPerson.scss";
import { useNavigate } from "react-router-dom";
import arrowBack from "assets/button-icons/arrowBack.svg";
const AboutClub = () => {
  const navigate = useNavigate();
  return (
    <>
      <div onClick={() => navigate(-1)} className="display-arrow">
        <img src={arrowBack} alt="back" style={{ marginRight: "5px" }} />
        <h4>Klublar</h4>
      </div>
  
     
    </>
  );
};

export default AboutClub;
