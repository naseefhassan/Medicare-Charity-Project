import About from "../Pages/UserPage/Navigation/About";
import NavGallary from "../Pages/UserPage/Navigation/NavGallary";
import BoardMembers from "../Components/HomePage/BoardMembers";
import Contact from "../Components/HomePage/Contact";
import Profile from "../Components/HomePage/Profile";
import Account from "../Components/HomePage/Account";
import Nurse from "../Components/HomePage/Nurse";
import MobilityAids from "../Components/HomePage/MobilityAids";
import Ambulance from "../Components/HomePage/Ambulance";
import { Route, Routes } from "react-router-dom";
import BeAVolunteer from "../Components/HomePage/BeAVolunteer";
import VolunteerProfile from "../Components/HomePage/VolunteerProfile";
import AddVehicle from "../Components/HomePage/AddVehicle";
import Chats from "../Components/HomePage/Chats";
import ShowAmbulance from "../Components/HomePage/ShowAmbulance";
import AuthGraud from "../RouteGurad/AuthGraud";
import Booking from "../Components/HomePage/Book";
import { ExcludedDatesProvider } from '../Context/Booking'
import { RazorpayProvider } from "../Context/Payment";
import MobilityBook from "../Components/HomePage/MobilityBook";



function UserPage() {
  return (
    <>
        <ExcludedDatesProvider>
        <RazorpayProvider>
      <Routes>
        <Route path="/about/*" element={<About />}></Route>
        <Route path="/gallery/*" element={<NavGallary />}></Route>
        <Route path="/boardmembers/*" element={<BoardMembers />}></Route>
        <Route path="/contact/*" element={<Contact />}></Route>

        <Route path="/" element={<AuthGraud />}>
          <Route path="/profile/:userId/*" element={<Profile />}></Route>
          <Route path="/accountdetails/*" element={<Account />}></Route>
          <Route path="/nurse/*" element={<Nurse />}></Route>
          <Route path="/mobilityaids/*" element={<MobilityAids />}></Route>
          <Route path="/beavolunteer/*" element={<BeAVolunteer />}></Route>
          <Route path="/ambulance/*" element={<Ambulance />}></Route>
          <Route path="/volunteerprofile/*" element={<VolunteerProfile />}></Route>
          <Route path="/addVehicle/*" element={<AddVehicle />}></Route>
          <Route path="/Chats/*" element={<Chats />}></Route>
          <Route path="/showAmbulance/*" element={<ShowAmbulance />}></Route>
          <Route path="/book/:nurseId/*" element={<Booking/>}></Route>
          <Route path="/mobilitybooking/:MobilityId/*" element={<MobilityBook/>}></Route>
        </Route>
      </Routes>
      </RazorpayProvider>
      </ExcludedDatesProvider>
    </>
  );
}

export default UserPage;
