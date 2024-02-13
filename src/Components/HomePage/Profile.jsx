import axios from "axios";
import React, { useState,useEffect } from "react";

function Profile() {
  const [Profile, setProfile] = useState({
    username: "",
    email: "",
    gender: "",
    age: "",
    phoneNumber: "",
  });

    useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get("http://localhost:5001/user/profile");
        const { data } = response;
        console.log(data);
        if (data.profile && data.profile.length > 0) {
          const { username, email, gender, age, phoneNumber } = data.profile[0];
          setProfile({
            username,
            email,
            gender,
            age,
            phoneNumber,
          });
        }
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  const ProfileChange = async (e) => {
    const { name, value } = e.target;
    setProfile((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const profiileSubmit=async(e)=>{
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:5001/user/profileupdate",Profile)
      console.log("pro success");
    } catch (error) {
      console.error("profile updation failed",error)
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
        <h1 className="mb-4 text-2xl font-bold">User Profile</h1>

        <form onSubmit={profiileSubmit}>
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
            value={Profile.username}
            onChange={ProfileChange}
            className="w-full px-4 py-2 mb-4 border rounded-md"
          />

          <label
            className="block mb-1 text-sm font-medium text-gray-600"
            htmlFor="email"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={Profile.email}
            onChange={ProfileChange}
            className="w-full px-4 py-2 mb-4 border rounded-md"
          />

          <label
            className="block mb-1 text-sm font-medium text-gray-600"
            htmlFor="gender"
          >
            Gender:
          </label>
          <select
            id="gender"
            name="gender"
            required
            value={Profile.gender}
            onChange={ProfileChange}
            className="w-full px-4 py-2 mb-4 border rounded-md"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

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
            value={Profile.age}
            onChange={ProfileChange}
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
            value={Profile.phoneNumber}
            onChange={ProfileChange}
            className="w-full px-4 py-2 mb-4 border rounded-md"
          />

          <button
            type="submit"
            className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default Profile;


