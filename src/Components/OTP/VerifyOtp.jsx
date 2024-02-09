import axios from "axios";
import React, { useRef, useState } from "react";

function VerifyOtp() {
    const inputRefs = Array.from({ length: 6 }, () => useRef(null));
    const [otpValues, setOtpValues] = useState(Array(6).fill(''));
    



    const handleInputChange = (index, value) => {
        const newOtpValues = [...otpValues];
        newOtpValues[index] = value;
        setOtpValues(newOtpValues);

        if (value.length === 1 && index < inputRefs.length - 1) {
            inputRefs[index + 1].current.focus();
        } else if (value.length === 0 && index > 0) {
            inputRefs[index - 1].current.focus();
        }
    };

    const verifyOtp = async () => {
        const otp = otpValues.join('');
        try {
            await axios.post("http://localhost:5001/verifyOtp", { otp });
        } catch (error) {
            console.error("Error verifying OTP: ", error);
        }
    }

  return (
    <div>
      <label className="text-left">Enter OTP</label>
      <div className="flex justify-around mb-4">
        {inputRefs.map((inputRef, index) => (
          <input
            key={index}
            type="text"
            className="w-9 p-1 border rounded"
            maxLength="1"
            ref={inputRef}
            value={otpValues[index]}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        ))}
      </div>
      <button onClick={verifyOtp} className="mt-6 bg-orange-400 text-white p-2 rounded w-full">Verify OTP</button>

    </div>
  );
}

export default VerifyOtp;
