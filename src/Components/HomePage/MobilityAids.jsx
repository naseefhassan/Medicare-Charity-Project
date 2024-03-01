import React, { useEffect, useState } from "react";
import axiosInstance from "../../api/axios";
import Header from "../Header/Header";

function MobilityAids() {
  const [mobility, setMobility] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get("/user/showMobility");
        setMobility(res.data.Mobility);
        console.log(res);
      } catch (error) {
        console.error(error, "mobilittyaids  fecthing failed");
      }
    };
    fetchData();
  }, []);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Header />
      {mobility.map((mobility, index) => (
        <div key={index} className="container flex justify-center">
          <div className="py-32 w-72">
            <div className="relative transition duration-500 bg-white rounded-lg shadow-lg hover:shadow-xl">
              <img className="rounded-t-lg" src={mobility.image} alt="" />
              <div className="px-8 py-6 bg-white rounded-lg">
                <h1 className="mb-3 text-2xl font-bold text-gray-700 hover:text-gray-900 hover:cursor-pointer">
                  {mobility.item}
                </h1>
                <p className="tracking-wide text-gray-700">
                  Brand: {mobility.brand}
                </p>
                <p className="tracking-wide text-gray-700">
                  Material: {mobility.material}
                </p>
                <p className="tracking-wide text-gray-700">
                  Colour: {mobility.color}
                </p>
                <p className="tracking-wide text-gray-700">
                  Description: {mobility.description}
                </p>
                <button className="px-4 py-2 mt-6 font-bold text-gray-800 transition duration-300 bg-yellow-400 rounded-lg shadow-md hover:shadow-lg">
                  Rent
                </button>
              </div>
              <div className="absolute px-4 py-2 bg-white rounded-lg top-2 right-2">
                <span className="text-md">${mobility.rate}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MobilityAids;
