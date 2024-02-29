/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";
import axiosInstance from "../../api/axios";

function ShowVolunteer() {
  const [volunteer, setVolunteer] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get("/user/volunteerdata");
        setVolunteer(res.data.volunteer);
      } catch (error) {
        console.error("Error fetching volunteer data:", error); // Error handling
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <AdminHeader
        title={"Volunteer Profile"}
        Home={"Home"}
        Homeroute={"/admin/adminhome"}
      />

      <div className="flex items-center justify-center w-full h-screen">
        <div className="flex flex-wrap justify-center max-w-xs ">
          {volunteer.map((profile, index) => (
            <div key={index} className="py-3 bg-red-900 rounded-lg shadow-xl">
              <div className="p-2 bg-red-900 photo-wrapper">
                <img
                  className="w-32 h-32 mx-auto rounded-full"
                  src={profile.image}
                  alt={profile.name}
                />
              </div>
              <div className="p-2 bg-red-900">
                <div className="my-3 text-xs">
                  <p className="font-semibold text-gray-500">Addkhhdddddress</p>
                  <p>{profile.name}</p>
                </div>
                <div className="my-3 text-xs">
                  <p className="font-semibold text-gray-500">Phone</p>
                  <p>{profile.phone}</p>
                </div>
                <div className="my-3 text-xs">
                  <p className="font-semibold text-gray-500">Email</p>
                  <p>{profile.email}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ShowVolunteer;
