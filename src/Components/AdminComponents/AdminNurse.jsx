/* eslint-disable no-unused-vars */
import { useState } from "react";
import AdminHeader from "./AdminHeader";
import axiosInstance from "../../api/axios";


function AdminNurse() {
  const [NurseData, setNurseData] = useState({
    username: "",
    gender: "",
    age: "",
    phoneNumber: "",
    Qualification:'',
    Experience: "",
    Image:''
  });

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setNurseData((preData)=>({
      ...preData,
      [name]:value
    }))
    console.log(name,value);
  }

  const DataSubmit= async(e)=>{
    e.preventDefault()
    try {
      const res = axiosInstance.post('/admin/PostNurse',NurseData)
    } catch (error) {
      console.error(error,"PostNurse Error")
    }
    
  }
  return (
    <>
      <div className="bg-gray-100 ">
        <AdminHeader />
        <div >
          <div className="flex justify-center h-screen mt-2">
            <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
              <h1 className="mb-4 text-2xl font-bold text-center tc">
                Add Nurse
              </h1>

              <form onSubmit={DataSubmit}>
                <label
                  className="block text-sm font-medium text-gray-600"
                  htmlFor="name"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="username"
                  required
                  value={NurseData.username}
                  onChange={handleChange}
                  className="w-full px-4 py-1 border rounded-md"
                />

                <label
                  className="block text-sm font-medium text-gray-600"
                  htmlFor="gender"
                >
                  Gender:
                </label>
                <select
                  id="gender"
                  name="gender"
                  required
                  value={NurseData.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-1 border rounded-md"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>

                <label
                  className="block text-sm font-medium text-gray-600"
                  htmlFor="age"
                >
                  Age:
                </label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  required
                  value={NurseData.age}
                  onChange={handleChange}
                  className="w-full px-4 py-1 border rounded-md"
                />

                <label
                  className="block text-sm font-medium text-gray-600"
                  htmlFor="phoneNumber"
                >
                  Phone Number:
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  required
                  value={NurseData.phoneNumber}
                  onChange={handleChange}
                  className="w-full px-4 py-1 border rounded-md"
                />
                 <label
                  className="block text-sm font-medium text-gray-600"
                  htmlFor="Qualification"
                >
                  Qualification:
                </label>
                <input
                  type="text"
                  id="Qualification"
                  name="Qualification"
                  required
                  value={NurseData.Qualification}
                  onChange={handleChange}
                  className="w-full px-4 py-1 border rounded-md"
                />
                <label
                  className="block text-sm font-medium text-gray-600"
                  htmlFor="Experience"
                >
                  Experience:
                </label>
                <input
                  type="text"
                  id="Experience"
                  name="Experience"
                  required
                  value={NurseData.Experience}
                  onChange={handleChange}
                  className="w-full px-4 py-1 border rounded-md"
                />

                <label
                  className="block text-sm font-medium text-gray-600"
                  htmlFor="Image"
                >
                  Image:
                </label>
                <input
                  type="file"
                  id="Image"
                  name="Image"
                  required
                  value={NurseData.Image}
                  onChange={handleChange}
                  className="w-full px-4 py-1 border rounded-md"
                />

                <button
                  type="submit"
                  className="px-4 py-2 mt-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-700"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminNurse;
