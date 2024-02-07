import React, { useRef } from "react";

function OTP() {
    const inputRefs = Array.from({ length: 4 }, () => useRef(null));

    const handleInputChange = (index, value) => {
        if (value.length === 1 && index < inputRefs.length - 1) {
            inputRefs[index + 1].current.focus();
        } 
        else if(value.length -1){
            inputRefs[index - 1].current.focus();

        }
    };

    return (
        <>
            <div className="bg-gray-100 flex items-center justify-center h-screen">
                <div className="bg-white p-8 rounded-lg shadow-md w-96">
                    <h1 className="text-2xl font-bold mb-6 text-center">
                        OTP Validation
                    </h1>

                    {/* Input for Phone Number */}
                    <label htmlFor="text" className="text-left">
                        Mobile Number
                    </label>
                    <input
                        type="tel"
                        className="w-full p-1 border rounded mb-4"
                        placeholder="Enter Phone Number"
                    />

                    {/* OTP Input Fields */}
                    <label htmlFor="text" className="text-left">
                        Enter OTP
                    </label>
                    <div className="flex justify-around mb-4">
                        {inputRefs.map((inputRef, index) => (
                            <input
                                key={index}
                                type="text"
                                className="w-9 p-1 border rounded"
                                maxLength="1"
                                ref={inputRef}
                                onChange={(e) => handleInputChange(index, e.target.value)}
                            />
                        ))}
                    </div>

                    {/* Validate OTP Button */}
                    <button className="mt-6 bg-orange-400 text-white p-2 rounded w-full">
                        Validate OTP
                    </button>
                </div>
            </div>
        </>
    );
}

export default OTP;
