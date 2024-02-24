import { useEffect, useState } from "react";
import axiosInstance from "../../api/axios";
import AdminHeader from "./AdminHeader";
import { Link } from "react-router-dom";
function ShowNurse() {
  const [NurseData, setNurseData] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axiosInstance.get("/admin/showNurse");
        setNurseData(res.data.NurseData);
      } catch (error) {
        console.error(error, "nurse data fecthing failed");
      }
    };
    fetchdata();
  }, []);
  console.log(NurseData);
  return (
    <>
      <AdminHeader
        title={"Edit Nurse"}
        Show={"Show Nurse"}
        Add={"Add nurse"}
        Edit={"Edit Nurse"}
        Addroute={"/admin/adminnurse"}
        Editroute={"/admin/editnurse"}
        Showroute={"/admin/showNurse"}
      />
      <div className="flex items-center justify-center min-h-screen py-5 text-white bg-gradient-to-tr from-gray-300 to-grey-200">
        <div className="gap-5 space-y-4 md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:space-y-0">
          {NurseData.map((nurse) => (
            <div
              key={nurse._id}
              className="max-w-sm px-6 pt-6 pb-2 transition duration-500 transform bg-slate-700 shadow-lg rounded-xl hover:scale-[1.02]"
            >
              <div className="relative">
                <h1 className="mt-4 text-2xl font-bold text-center cursor-pointer">
                  {nurse.username}
                </h1>
                <img
                  className="w-full rounded-xl h-[200px] "
                  src={nurse.Image}
                  alt="Colors"
                />
              </div>
              <div className="my-5 leading-7">
                <p>Qualification: {nurse.Qualification}</p>
                <p>Experience: {nurse.Experience}</p>
                <p>Age: {nurse.age}</p>
                <p>Gender: {nurse.gender}</p>
                <p>Phone Number: {nurse.phoneNumber}</p>

                <Link to={"/admin/editnurse"}>
                  <button className="w-full mt-4 text-xl text-white bg-[#FF9D2B] shadow-lg rounded-xl">
                    Edit
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ShowNurse;