import Header from "../../Components/Header/Header";
import axiosInstance from "../../api/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const res = axiosInstance.post("/forgotPassword", { email });
      if (res.data.message === "Success") {
        navigate("/auth");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <Header />

      <div className=" p-8 bg-blue-500 rounded-lg">
        <div className="flex flex-col items-center">
          <h1 className="mb-4 text-2xl text-white">Forgot Password</h1>
          <p className="text-white">
            Please enter your registered email to reset your password.
          </p>
        </div>

        <div className="my-5">
          <label className="text-white">
            <span>Email</span>
            <input
              className="p-2 mt-2 text-black bg-white rounded-md w-full"
              type="email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <div className="flex justify-center mt-4">
            <button
              onClick={handleSubmit}
              className="p-2 text-white bg-orange-500 rounded-md "
            >
              Reset Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
