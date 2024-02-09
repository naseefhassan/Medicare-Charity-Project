import React, { useRef, useState } from "react";
import GetOtp from "./GetOtp";
import VerifyOtp from "./VerifyOtp";

function OTP() {
    const [showcomponent,SetShowComponent]=useState(false)

    const HandleGetOtp=()=>{
        SetShowComponent(true)
    }
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6 text-center">OTP Validation</h1>

        {/* Input for Phone Number */}
     {!showcomponent &&   <GetOtp onSentOtp={HandleGetOtp} />}
        {/* OTP Input Fields */}
      {showcomponent &&  <VerifyOtp />}

      </div>
    </div>
  );
}

export default OTP;
