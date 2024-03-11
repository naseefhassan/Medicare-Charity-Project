import Header from "../../Components/Header/Header";
import axiosInstance from "../../api/axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Resetpassword() {
    const {id, token}=useParams()
    
  const navigate = useNavigate();
  const [password, setPassword] = useState();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res =await axiosInstance.post(`/resetPassword/${id}/${token}`, { password });
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
          <h1 className="mb-4 text-2xl text-white">Reset Password</h1>
          <p className="text-white">
            Please enter your registered email to reset your password.
          </p>
        </div>

        <div className="my-5">
          <label className="text-white">
            <span> New Password</span>
            <input
              className="w-full p-2 mt-2 text-black bg-white rounded-md"
              type="password"
              name="Password"
              placeholder="enter password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <div className="flex justify-center mt-4">
            <button
              onClick={handleSubmit}
              className="p-2 text-white bg-orange-500 rounded-md "
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resetpassword;
