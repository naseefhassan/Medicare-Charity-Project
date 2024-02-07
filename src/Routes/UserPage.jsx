import React from "react";
import About from "../Pages/UserPage/Navigation/About";
import NavGallary from "../Pages/UserPage/Navigation/NavGallary";
import BoardMembers from "../Components/HomePage/BoardMembers";
import Contact from "../Components/HomePage/Contact";
import Profile from "../Components/HomePage/Profile";
import Account from "../Components/HomePage/Account";
import Nurse from "../Components/HomePage/Nurse";
import MobilityAids from "../Components/HomePage/MobilityAids";
import BeAaolunteer from "../Components/HomePage/BeAaolunteer";
import Ambulance from "../Components/HomePage/Ambulance";
import { Route, Routes } from "react-router-dom";

function UserPage() {
  return (
    <>
      <Routes>
        <Route path="/about/*" element={<About />}></Route>

        <Route path="/gallary/*" element={<NavGallary />}></Route>
        <Route path="/boardmembers/*" element={<BoardMembers />}></Route>
        <Route path="/contact/*" element={<Contact />}></Route>
        <Route path="/profile/*" element={<Profile />}></Route>
        <Route path="/accountdetails/*" element={<Account />}></Route>

        <Route path="/nurse/*" element={<Nurse />}></Route>
        <Route path="/mobilityaids/*" element={<MobilityAids />}></Route>
        <Route path="/beavolunteer/*" element={<BeAaolunteer />}></Route>
        <Route path="/ambulance/*" element={<Ambulance />}></Route>
      </Routes>
    </>
  );
}

export default UserPage;
