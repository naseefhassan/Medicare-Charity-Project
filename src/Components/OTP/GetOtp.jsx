import axios from "axios";
import React, { useState } from "react";

function GetOtp({onSentOtp}) {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSentOtp = async () => {
        try {
            const res = await axios.post("http://localhost:5001/verifyOtp", { phoneNumber })
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
        className="w-full p-1 mb-4 border rounded"
        placeholder="Enter Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button
        onClick={handleSentOtp}
        className="w-full p-2 mt-6 text-white bg-orange-400 rounded" >
        Get OTP
      </button>
    </div>
  );
}

export default GetOtp;
