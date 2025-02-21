import React from 'react';
import "../styles/Calender.css";
import { Link } from 'react-router-dom';

const Calender = () => 
{
  return (
    <div className='calender'>
        <button><Link to="/">Previous</Link></button>
        <h1>Aprill,2022</h1>
        <button><Link to="/">Next</Link></button>
    </div>
  )
}

export default Calender;