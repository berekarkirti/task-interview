import React from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Calender from './components/Calender';
import  Dates from './components/Dates';

const AllRoutes = () => {
  return (
     <div>
        <Calender />
        <Routes>
            <Route path="/March" element= {<Dates />}/>
        </Routes>
        
     </div>
        
      
     
  )
};

export default AllRoutes;