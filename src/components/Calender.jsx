import React, { useState, useEffect } from 'react';
import "../styles/Calender.css";
import { Carousel } from "react-bootstrap"
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Calender = () => {
  const [months, setMonths] = useState([]);
  const data = useParams();


  const banner = () => {
    axios("https://v1.realtormate.com/api/social_calendar/all_months")
      .then((res) => {
        setMonths(res.data)
      })
      .catch((err) => {
        console.log(err);
        setMonths([]);
      })
  }

  useEffect(() => {
    banner();
  }, []);


  return (

    <div className="">
      {months.map((el, i) => (
        <Carousel.Item key={el.id}>
          <Link to={`/${el.month}`}>
            <h1>{el.calendar_banner_text}</h1>
          </Link>
        </Carousel.Item>
      ))}
    </div>


  )
}

export default Calender;