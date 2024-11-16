import React, { useState } from "react";
import "./Home.css";
import Navbar from "../../components/Navbar";
import SearchForm from "../../components/SearchForm";
import bgImg from "../../assets/background.jpg";
import cloud01 from "../../assets/cloud-01.png";
import cloud02 from "../../assets/cloud-02.png";
import cloud03 from "../../assets/cloud-03.png";
import cloud04 from "../../assets/cloud-04.png";
import DelayFlights from "../../components/DelayFlights";
import StatusCard from "../../components/StatusCard";

export default function Home() {
  const [data, setData] = useState(null);
  const [showStatusCard, setShowStatusCard] = useState(false);
  const [showDelayCard, setShowDelayCard] = useState(true);

  const handleDataFromNavbar = (dataFromNavbar) => {
    setData(dataFromNavbar);
    setShowStatusCard(true);
  };

  const handleDelayItemClick = (dataFromDelayCard) => {
    setShowDelayCard(false);
    setShowStatusCard(true);
    setData(dataFromDelayCard);
  };

  return (
    <>
      <div className="background-wrapper">
        <Navbar onData={handleDataFromNavbar} />

        <div className="d-flex justify-content-center">
          {!showStatusCard && (
            <DelayFlights onItemClick={handleDelayItemClick} />
          )}
        </div>
        {showStatusCard && <StatusCard data={data} />}

        {/* cloud images */}
        <div className="cloud">
          <img src={cloud03} alt="cloud" className="cloud1" />
          <img src={cloud01} alt="cloud" className="cloud2" />
          <img src={cloud02} alt="cloud" className="cloud3" />
          <img src={cloud04} alt="cloud" className="cloud4" />
        </div>

        {/* background image */}
        <img className="bg-img" src={bgImg} alt="background" />

        {/* flight tracker text */}
        <div className="flight-tracker-text">
          <span className="flight-text">Flight</span> <br />
          <span className="tracker-text">Tracker</span>
        </div>
        <div className="tagline">
          <span>Real-Time Tracking for Effortless Travel</span>
        </div>
      </div>
    </>
  );
}
