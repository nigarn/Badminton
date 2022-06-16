import "App.scss";
import AboutPerson from "pages/Sportsmen/AboutPerson";
import Header from "layouts/Header";
import Navbar from "layouts/Navbar";
import Documents from "pages/Documents";
import Halls from "pages/Halls/Halls";
import Home from "pages/Home";
import Judge from "pages/Judge/Judge";
import Registration from "pages/registration/Registration";
import SportsMen from "pages/Sportsmen/SportsMen";
import Trainers from "pages/Trainers/Trainers";
import Clubs from "pages/Clubs/Clubs";
import AboutTrainer from "pages/Trainers/AboutTrainer";
import AboutJudge from "pages/Judge/AboutJudge";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AboutHall from "pages/Halls/AboutHall";
import AboutClub from "pages/Clubs/AboutClub";


function App() {
  const [isActive, setActive] = useState(true);
  const toggleClass = () => {
    setActive(!isActive);
    console.log(isActive);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <Navbar toggleClass={toggleClass} isActive={isActive} />
        <div className={`container-itm ${isActive ? "" : "change-width"}`}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/judges" element={<Judge />} />
            <Route path="/about-judge" element={<AboutJudge />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/sports" element={<SportsMen />} />
            <Route path="/about" element={<AboutPerson />} />
            <Route path="/halls" element={<Halls />} />
            <Route path="/about-hall" element={<AboutHall />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/trainers" element={<Trainers />} />
            <Route path="/about-trainer" element={<AboutTrainer />} />
            <Route path="/clubs" element={<Clubs />} />
            <Route path="/about-club" element={<AboutClub />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
