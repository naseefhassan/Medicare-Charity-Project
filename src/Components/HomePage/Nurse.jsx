import { useEffect, useState } from "react";
import axiosInstance from "../../api/axios";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

function Nurse() {
  const [nurseData, setNurseData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/user/nursedata");
        // Assuming the response data structure is an array of nurses
        setNurseData(response.data.Nurse);
      } catch (error) {
        console.error("Failed to fetch nurse data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap gap-3 m-6">
      <Header />
      {nurseData
        .filter((nurse) => nurse.delStatus === false && nurse.booking === false)
        .map((nurse, index) => (
          <div key={index} className="m-auto mt-24 max-72 w-80 lg:mt-16">
            <img
              src={nurse.Image}
              alt=""
              className="w-full shadow-2xl object-fit h-60 rounded-t-2xl"
            />
            <div className="bg-white shadow-2xl rounded-b-3xl">
              <h2 className="pt-6 text-2xl font-bold text-center text-gray-800">
                {nurse.username}
              </h2>
              <div className="m-auto w-5/6">
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
                  Rate: Rs {nurse.rate}/Day
                </p>
              </div>

              <div className="flex justify-center p-2 m-auto mt-6 text-center text-white bg-blue-700 shadow-xl w-72 lg:w-5/6 hover:bg-indigo-500 rounded-2xl shadow-bg-blue-700">
                <Link to={`/user/book/${nurse._id}`}>
                  <button className="text-lg font-bold lg:text-sm">
                    Proceed to booking
                  </button>
                </Link>
              </div>
              <div className="flex justify-center w-full h-16 m-auto "></div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Nurse;
