import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/UserPage/HomePage";
import OTP from "../Components/OTP/OTP";
import Login from "../Pages/Common/Login";
import PublicRoute from "../RouteGurad/PublicRoute";
import ForgotPassword from "../Pages/Common/ForgotPassword";
import Resetpassword from "../Pages/Common/Resetpassword";

function CommonPage() {
  return (
    <>
      <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/auth" element={<Login />}></Route>
          <Route path="/forgotPassword" element={<ForgotPassword/>}></Route>
          <Route path='/resetPassword/:id/:token' element={<Resetpassword/>}></Route>
          
        <Route path="/" element={<PublicRoute/>}>
          <Route path="/otp" element={<OTP />}></Route>
        </Route>

      </Routes>
    </>
  );
}

export default CommonPage;
