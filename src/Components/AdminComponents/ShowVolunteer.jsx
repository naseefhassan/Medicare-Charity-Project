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
      <div className="flex flex-wrap items-center justify-center ">
        {/* <div className="flex flex-wrap justify-center bg-red-900 w-72"> */}
        {volunteer.map((profile, index) => (
          <div
            key={index}
            className="py-3 m-2 bg-white rounded-lg shadow-xl w-72"
          >
            <div className="p-2 photo-wrapper">
              <img
                className="w-32 h-32 mx-auto rounded-full"
                src={profile.vimage} // Dynamically set image source
                alt={profile.name} // Alt text should be dynamic
              />
            </div>
            <div className="p-2 ">
              <div className="flex gap-3 my-3 text-xs">
                <p className="font-semibold text-gray-500">Name:</p>
                <p>{profile.username}</p>
              </div>
              <div className="flex gap-3 my-3 text-xs">
                <p className="font-semibold text-gray-500">Email:</p>
                <p>{profile.email}</p>
              </div>
              <div className="flex gap-3 my-3 text-xs">
                <p className="font-semibold text-gray-500">Phone:</p>
                <p>{profile.phoneNumber}</p>
              </div>
              <div className="flex gap-3 my-3 text-xs">
                <p className="font-semibold text-gray-500">Gender:</p>
                <p>{profile.gender}</p>
              </div>
              <div className="flex gap-3 my-3 text-xs">
                <p className="font-semibold text-gray-500">Age:</p>
                <p>{profile.age}</p>
              </div>
              <div className="flex gap-3 my-3 text-xs">
                <p className="font-semibold text-gray-500">Address:</p>
                <p>{profile.address}</p>
              </div>
              <div className="flex gap-3 my-3 text-xs">
                <p className="font-semibold text-gray-500">District:</p>
                <p>{profile.district}</p>
              </div>
              <div className="flex gap-3 my-3 text-xs">
                <p className="font-semibold text-gray-500">City:</p>
                <p>{profile.city}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* </div> */}
    </>
  );
}

export default ShowVolunteer;
