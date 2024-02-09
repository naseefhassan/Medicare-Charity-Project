import axios from "axios";
import React, { useState } from "react";

function GetOtp({onSentOtp}) {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSentOtp = async () => {
        try {
            const res = await axios.post("http://localhost:5001/sentOtp", { phoneNumber })
            onSentOtp()
            console.log("PhoneNumber sended",res );
        } catch (error) {
            console.error("Error sending OTP: ", error);
        }
    }

  return (
    <div>
      <label className="text-left">Mobile Number</label>
      <input
        type="text"
        className="w-full p-1 border rounded mb-4"
        placeholder="Enter Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button
        onClick={handleSentOtp}
        className="mt-6 bg-orange-400 text-white p-2 rounded w-full" >
        Get OTP
      </button>
    </div>
  );
}

export default GetOtp;
