import ItemCard from "components/ItemCard";
import React from "react";
import { Link } from "react-router-dom";


const Judge = () => {
  const rate = "Məşqçi təcrübəsi";
  return (
    <>
      <h2 style={{ marginBottom: "20px" }}>Hakimlər</h2>
      <div className="card-line">
        <Link to="/about-judge">
          <ItemCard rate={rate} />
        </Link>
      </div>
    </>
  );
};

export default Judge;
