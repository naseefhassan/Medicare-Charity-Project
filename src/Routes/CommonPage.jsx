import React, { Profiler } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/UserPage/HomePage";
import Login from "../Pages/Common/Login";


function CommonPage() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/login" element={<Login />}></Route>
      
      </Routes>
    </>
  );
}

export default CommonPage;
