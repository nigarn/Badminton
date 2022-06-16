import ItemCard from "components/ItemCard";
import React from "react";
import { Link } from "react-router-dom";
import "assets/styles/layout.scss";
import filter from "assets/hall-icons/filter.svg";
const Halls = () => {
  const rate = "Sahə";
  return (
    <>
      <div className="halls-btn">
        <h2 style={{ marginBottom: "20px" }}>Zallar</h2>
        <div>
          <button>
            <img src={filter} alt="filter" />
            Filterlə
          </button>
          <button>+ Əlavə et</button>
        </div>
      </div>

      <div className="card-line">
        <Link to="/about-hall">
          <ItemCard rate={rate} />
        </Link>
      </div>
    </>
  );
};

export default Halls;
