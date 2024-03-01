import React, { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";
import axiosInstance from "../../api/axios";

function UserProfile() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get("/admin/userProfile");
        console.log(res.data.Userprofile);
        setUser(res.data.Userprofile);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        <AdminHeader
          title={"User Profile"}
          Home={"Home"}
          Homeroute={"/admin/adminhome"}
        />
        <div className="flex flex-wrap justify-center gap-4 mt-3">
          {user.map((profile, index) => (
            <div
              key={index}
              className="max-w-xs p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100"
            >
              {/* <img
                src="https://source.unsplash.com/150x150/?portrait?3"
                alt=""
                className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
              /> */}
              <div className="space-y-4 text-center divide-y dark:divide-gray-700">
                <div className="my-2 space-y-1">
                  <h2 className="text-xl font-semibold sm:text-2xl">
                    {profile.username}
                  </h2>
                  <p className="px-5 text-xs sm:text-base dark:text-gray-400">
                    <span>email:</span>
                    <h1>{profile.email}</h1>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default UserProfile;
