import ItemCard from "components/ItemCard";

import React from "react";
import { Link } from "react-router-dom";



const Trainers = () => {
  const rate="Məşqçi dərəcəsi"
  return (
    <>
      <h2 style={{ marginBottom: "20px" }}>Məşqçilər</h2>
      <div className="card-line">
        <Link to="/about-trainer"><ItemCard rate={rate}/></Link>
      
      </div>
    </>
  );
};

export default Trainers;
