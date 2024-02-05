import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/UserPage/HomePage";
import Login from "../Pages/Common/Login";
import About from "../Pages/UserPage/Navigation/About";
import NavGallary from "../Pages/UserPage/Navigation/NavGallary";

function CommonPage() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/gallary" element={<NavGallary/>}></Route>
      </Routes>
    </>
  );
}

export default CommonPage;
