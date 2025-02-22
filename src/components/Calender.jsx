import React, { useState, useEffect } from "react";
import "../styles/Calender.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Calender = () => {
  const [months, setMonths] = useState([]); 
  const [activeIndex, setActiveIndex] = useState(0);

  const Banner = async () => {
    try 
    {
      const response = await axios.get(`https://v1.realtormate.com/api/social_calendar/all_months/${months}`);
      setMonths(response.data);
    } 
    catch (err) 
    {
      console.error("Failed to fetch months:", err);
      setMonths([]);
    }
  };

  const handleSlideChange = (direction) => {
    const totalSlides = months.length;
    if (totalSlides > 0) 
    {
      if (direction === "prev") 
      {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1));
      } 
      else if (direction === "next") 
      {
        setActiveIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1));
      }
    }
  };

  useEffect(() => {
    Banner();
  }, []);

  return (
    <div className="calendar-container">
      <div className="button-controls">
        <button className="prev-btn" onClick={() => handleSlideChange("prev")}>
          <Link to={`/${months[activeIndex]?.month}`}>
            Previous
          </Link>
        </button>
        {months.length > 0 ? (
        <div className="month-display">
          <Link to={`/${months[activeIndex]?.month}`}>
            <div className="carousel-banner active-slide">
              <h1>{months[activeIndex]?.calendar_banner_text}</h1>
            </div>
          </Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
        <button className="next-btn" onClick={() => handleSlideChange("next")}>
          <Link to={`/${months[activeIndex]?.month}`}>
            Next
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Calender;
