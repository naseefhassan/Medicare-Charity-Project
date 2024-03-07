import axiosInstance from "../../api/axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header/Header";

function Profile() {
  const { userId } = useParams();
  const [user, setUser] = useState({
    username: "",
  });
  
  const [profile, setProfile] = useState({
    gender: "",
    age: "",
    phoneNumber: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axiosInstance.get(`/user/profile/${userId}`);
        setUser(res.data.userData);
        setProfile(res.data.profileData[0]);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, [userId]);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedProfile = { ...profile, ...user, userId: userId };
      const res = await axiosInstance.post(
        "/user/profileupdate",
        updatedProfile
      );
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

 

  return (
    <>
    <Header/>
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <h1 className="mb-4 text-2xl font-bold">User Profile</h1>

        <form onSubmit={handleSubmit}>
          <label
            className="block mb-1 text-sm font-medium text-gray-600"
            htmlFor="name"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="username"
            required
            value={user.username}
            onChange={handleUserChange}
            className="w-full px-4 py-2 mb-4 border rounded-md"
          />

          <label
            className="block mb-1 text-sm font-medium text-gray-600"
            htmlFor="gender"
          >
            Gender:
          </label>
          <input
            type="text"
            id="name"
            name="gender"
            required
            value={profile.gender}
            onChange={handleProfileChange}
            className="w-full px-4 py-2 mb-4 border rounded-md"
          />

          <label
            className="block mb-1 text-sm font-medium text-gray-600"
            htmlFor="age"
          >
            Age:
          </label>
          <input
            type="number"
            id="age"
            name="age"
            required
            value={profile.age}
            onChange={handleProfileChange}
            className="w-full px-4 py-2 mb-4 border rounded-md"
          />

          <label
            className="block mb-1 text-sm font-medium text-gray-600"
            htmlFor="phoneNumber"
          >
            Phone Number:
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            required
            value={profile.phoneNumber}
            onChange={handleProfileChange}
            className="w-full px-4 py-2 mb-4 border rounded-md"
          />

          <button
            type="submit"
            className="px-4 py-2 mt-2 text-white transition-transform transform bg-green-500 rounded-md active:scale-x-75 hover:bg-green-600 focus:outline-none focus:ring focus:border-green-700"
            >
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
  );
}

export default Profile;
