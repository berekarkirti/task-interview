import axios from 'axios';
import "../styles/Dates.css";
import { Link, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Dates = () => {
    const [date, setDate] = useState([]);
    const { month } = useParams();
    const [loading,setloading]=useState(false)


    const fetchdata = () => {
        setloading(true)
        axios(`https://v1.realtormate.com/api/social_calendar/get/${month}`)
            .then((res) => {
            console.log(res.data)
                setDate(res.data.days);
                setloading(false)
            })
            .catch((err) => {
                console.error(err);
                setloading(false)
            })
    }

    useEffect(() => {
        fetchdata();
    }, [month]);

   
    return loading ? <h1>Loading...</h1>: (
        <div className="days">
           
            {date.length == 0 ? (
                <p>loading.......</p>
            ) : (
                date.map((item) => (
                    <div className="Date_card">

                        <div>
                            <p className="day_of_the_week">{item.day_of_the_week}</p>
                            <h1 className="day_of_the_month">{item.day_of_the_month}</h1>
                            <div className="Date_card_body">
                                <img src={item.card_image} alt="img" height={70} width={70} />
                                <h5 className="card_header">{item.card_header}</h5>
                                <p className="card_body">{item.card_body}</p>
                                <button className="Schedule_btn">Schedule Post</button>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>
    );


};


export default Dates;