import axios from "axios";
import "../styles/Dates.css";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Dates = () => {
  const [dates, setDates] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { month } = useParams();

  const fetchDates = () => {
    setLoading(true);
    setError(null);
    axios
      .get(`https://v1.realtormate.com/api/social_calendar/get/${month}`)
      .then((res) => {
        const days = res.data.days;
        const firstDayIndex = new Date(days[0].date).getDay();
        const paddedDays = [...Array(firstDayIndex).fill(null), ...days];
        setDates(paddedDays.filter((day) => day !== null)); 
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("Failed to load data. Please try again later.");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchDates();
  }, [month]);


  return (
    <div className="calendar">
      <div className="days-grid">
        {dates.map((item, index) => (
          <div className="Date_card" key={index}>
            <p className="day_of_the_week">{item.day_of_the_week}</p>
            <h1 className="day_of_the_month">{item.day_of_the_month}</h1>
            <div className="Date_card_body">
              <img src={item.card_image} alt="img" height={90} width={90} />
              <h5 className="card_header">{item.card_header}</h5>
              <p className="card_body">{item.card_body}</p>
              <button className="Schedule_btn">Schedule Post</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dates;
