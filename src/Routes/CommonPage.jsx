import React, { Profiler } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/UserPage/HomePage";
import Login from "../Pages/Common/Login";
import OTP from "../Components/OTP/OTP";


function CommonPage() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/auth" element={<Login />}></Route>
        <Route path='/otp' element={<OTP/>}></Route>
      
      </Routes>
    </>
  );
}

export default CommonPage;
