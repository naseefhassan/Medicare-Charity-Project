import React, { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";
import axiosInstance from "../../api/axios";
import { Link } from "react-router-dom";

function ShowMobilityAids() {
  const [MobilityAids, setMobilityAids] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get("/admin/showMobilityAids");
        console.log(res);
        setMobilityAids(res.data.MobilityAidsData);
      } catch (error) {
        console.error(error, "mobility aids fecthing failed");
      }
    };
    fetchData();
  }, []);

  const deleteNurse = async (toolsDelId) => {
    try {
      await axiosInstance.delete(`/admin/mobilityDelete/${toolsDelId}`);
    } catch (error) {
      console.error(error, "error in deleting");
    }
  };

  return (
    <>
      <AdminHeader
        title={"Mobility Aids"}
        Show={"Show Mobility Aids"}
        Add={"Add Mobility Aids"}
        Addroute={"/admin/mobilityAids"}
        Showroute={"/admin/showMobilityAids"}
      />
      <div className="flex items-center justify-center min-h-screen py-5 text-white bg-gradient-to-tr from-gray-300 to-grey-200">
        <div className="gap-5 space-y-4 md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:space-y-0">
          {MobilityAids.map((tools) => (
            <div
              key={tools._id}
              className="max-w-sm px-6 pt-6 pb-2 transition duration-500 transform bg-slate-700 shadow-lg rounded-xl hover:scale-[1.02]"
            >
              <div className="relative">
                <h1 className="mt-4 text-2xl font-bold text-center cursor-pointer">
                  {tools.item}
                </h1>
                <img
                  className="w-full rounded-xl h-[200px] "
                  src={tools.image}
                  alt="Nurse"
                />
              </div>
              <div className="my-5 leading-7">
                <p>item: {tools.item}</p>
                <p>brand: {tools.brand}</p>
                <p>color: {tools.color}</p>
                <p>material: {tools.material}</p>
                <p>rate: {tools.rate}</p>
                <p>description: {tools.description}</p>

                <div className="flex gap-3">
                  <Link to={"/admin/editMobilityAids"} className="w-full">
                    <button
                      onClick={() => editMobilityAids(tools._id)}
                      className="w-full mt-4 text-xl text-white bg-[#FF9D2B] shadow-lg rounded-xl"
                    >
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={() => deleteNurse(tools._id)}
                    className="w-full mt-4 text-xl text-white bg-[#FF9D2B] shadow-lg rounded-xl"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ShowMobilityAids;
