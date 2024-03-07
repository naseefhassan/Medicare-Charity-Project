import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/UserPage/HomePage";
import OTP from "../Components/OTP/OTP";
import Login from "../Pages/Common/Login";
import PublicRoute from "../RouteGurad/PublicRoute";

function CommonPage() {
  return (
    <>
      <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/auth" element={<Login />}></Route>
          
        <Route path="/" element={<PublicRoute/>}>
          <Route path="/otp" element={<OTP />}></Route>
        </Route>

      </Routes>
    </>
  );
}

export default CommonPage;
