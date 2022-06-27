import React from 'react'
import { Route,Routes } from 'react-router-dom';
import Home from '../pages/Home';
import CDetails from '../pages/CDetails';

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course/:id" element={<CDetails/>}/>

    </Routes>
  )
}

export default MyRoutes