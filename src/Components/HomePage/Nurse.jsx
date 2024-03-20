import { useEffect, useState } from "react";
import axiosInstance from "../../api/axios";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

function Nurse() {
  const [nurse, setNurse] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get("/user/nursedata");
        setNurse(res.data.Nurse);
      } catch (error) {
        console.error(error, "nurse data fetching failed");
      }
    };
    fetchData();
  }, []);
  return (
    <div className="flex flex-wrap gap-3 m-6">
      <Header />
      {nurse
        .filter((nurse) => nurse.delStatus === false)
        .map((nurse, index) => (
          <div key={index} className="m-auto mt-24 max-72 w-80 lg:mt-16">
            <img
              src={nurse.Image}
              alt=""
              className="w-full shadow-2xl object-fit h-60 rounded-t-2xl "
            />
            <div className="bg-white shadow-2xl rounded-b-3xl">
              <h2 className="pt-6 text-2xl font-bold text-center text-gray-800">
                {nurse.username}
              </h2>
              <div className="m-auto jw-5/6">
                <p className="pt-1 text-center text-gray-500">
                  PhoneNumber: {nurse.phoneNumber}
                </p>
                <p className="pt-1 text-center text-gray-500">
                  Qualification: {nurse.Qualification}
                </p>
                <p className="pt-1 text-center text-gray-500">
                  Experience: {nurse.Experience}
                </p>
                <p className="pt-1 text-center text-gray-500">
                  Gender: {nurse.gender}
                </p>
                <p className="pt-1 text-center text-gray-500">
                  Age: {nurse.age}
                </p>
                <p className="pt-1 text-center text-gray-500">
                  Rate:Rs {nurse.rate}
                </p>
              </div>

              <div className="flex justify-center p-2 m-auto mt-6 text-center text-white bg-blue-700 shadow-xl w-72 lg:w-5/6 hover:bg-indigo-500 rounded-2xl shadow-bg-blue-700">
                <Link to={`/user/book/${nurse._id}`}>
                  <button className="text-lg font-bold lg:text-sm">
                    Proceed to booking
                  </button>
                </Link>
              </div>
              <div className="flex justify-center w-full h-16 m-auto ">
                <button className="font-bold text-center text-gray-500 lg:text-sm hover:text-gray-900">
                  Cancel Booking
                </button>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Nurse;
