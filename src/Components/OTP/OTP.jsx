import axios from "axios";
import React, { useRef, useState } from "react";

function OTP() {
    const inputRefs = Array.from({ length: 6 }, () => useRef(null));
    const [phoneNumber, setPhoneNumber] = useState('');
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

    const sentOtp = async () => {
        try {
            await axios.post("http://localhost:5001/sentOtp", { phoneNumber });
            console.log("OTP sent successfully");
        } catch (error) {
            console.error("Error sending OTP: ", error);
        }
    }

    const verifyOtp = async () => {
        const otp = otpValues.join('');
        try {
            await axios.post("http://localhost:5001/verifyOtp", { otp });
            console.log("OTP verified successfully");
        } catch (error) {
            console.error("Error verifying OTP: ", error);
        }
    }

    return (
        <div className="bg-gray-100 flex items-center justify-center h-screen">
            <div className="bg-white p-8 rounded-lg shadow-md w-96">
                <h1 className="text-2xl font-bold mb-6 text-center">OTP Validation</h1>

                {/* Input for Phone Number */}
                <label className="text-left">Mobile Number</label>
                <input
                    type="text"
                    className="w-full p-1 border rounded mb-4"
                    placeholder="Enter Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <button onClick={sentOtp} className="mt-6 bg-orange-400 text-white p-2 rounded">Get OTP</button>

                {/* OTP Input Fields */}
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

                {/* Validate OTP Button */}
                <button onClick={verifyOtp} className="mt-6 bg-orange-400 text-white p-2 rounded w-full">Verify OTP</button>
            </div>
        </div>
    );
}

export default OTP;
