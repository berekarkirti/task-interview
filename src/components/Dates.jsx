import axios from 'axios';
import "../styles/Dates.css";
import React, { useEffect, useState } from 'react'

const Dates = () => {
    const {date, setDate} = useState()

    var fetchdata= () => {
      axios('https://v1.realtormate.com/api/social_calendar/get/March')
      .then((res)=>{
            console.log(res.data);
            setDate(res.data);
      })
      .catch((err)=>{
            console.error(err);
      })
    };

    useEffect(() => {
        fetchdata();
    });
    


   {date.map((item)=>{
    return(
    <div className="days">
        <div className="Date_card">
            <div className="">
                <p className='day_of_the_week'>{item.day_of_the_week}</p>
                <h1 className='day_of_the_month'>{item.day_of_the_month}</h1>
                <div className="Date_card_body">
                    <img src={item.card_image} alt={item.card_header} />
                    <h5 className="card_header">{item.card_header}</h5>
                    <p className="card_body">{item.card_body}</p>
                    <button className="Schedule_btn">Schedule Post</button>
                </div>
            </div>
        </div>
    </div>
   )
   }
) 
};
}

export default Dates;