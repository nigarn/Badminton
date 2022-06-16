import ClubCard from "components/ClubCard";
import React from "react";
import { Link } from "react-router-dom";

const Clubs = () => {
  return (
    <>
      <h2 style={{ marginBottom: "20px" }}>Klublar</h2>
    
        {" "}
        <div className="card-line" style={{backgroundColor:"white", borderRadius:"17px",padding:'0 20px'}}>
          <Link to="/about-club">
            <ClubCard />
          </Link>
        </div>
   
    </>
  );
};

export default Clubs;
