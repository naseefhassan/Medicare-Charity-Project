/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import AdminHeader from "./AdminHeader";
import axiosInstance from "../../api/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function AdminNurse() {
  const [username, setUsername] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [phoneNumber, setPhonenumber] = useState("");
  const [Qualification, setQualification] = useState("");
  const [Experience, setExperience] = useState("");
  const [Image, setImage] = useState("");
  const [rate, setRate] = useState("");

  const DataSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("username", username);
    formData.append("gender", gender);
    formData.append("age", age);
    formData.append("phoneNumber", phoneNumber);
    formData.append("Qualification", Qualification);
    formData.append("Experience", Experience);
    formData.append("Image", Image);
    formData.append("rate", rate);

    try {
      const res = axiosInstance.post("/admin/PostNurse", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success('Data Added')
    } catch (error) {
      console.error(error, "PostNurse Error");
    }
  };

  return (
    <>
      <div className="bg-gray-100 ">
        <AdminHeader
          title={"Add Nurse"}
          Show={"Show Nurse"}
          Add={"Add nurse"}
          Edit={"Edit Nurse"}
          Home={"Home"}
          Homeroute={"/admin/adminhome"}
          Addroute={"/admin/adminnurse"}
          Editroute={"/admin/editnurse"}
          Showroute={"/admin/showNurse"}
        />
        <div>
          <div className="flex justify-center mt-2">
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
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-1 border rounded-md"
                />

                <label
                  className="block text-sm font-medium text-gray-600"
                  htmlFor="gender"
                >
                  Gender:
                </label>
                <input
                  type="text"
                  id="gender"
                  name="gender"
                  required
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full px-4 py-1 border rounded-md"
                />
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
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
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
                  value={phoneNumber}
                  onChange={(e) => setPhonenumber(e.target.value)}
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
                  value={Qualification}
                  onChange={(e) => setQualification(e.target.value)}
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
                  value={Experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full px-4 py-1 border rounded-md"
                />
                <label
                  className="block text-sm font-medium text-gray-600"
                  htmlFor="rate"
                >
                  Rate:
                </label>
                <input
                  type="number"
                  id="rate"
                  name="rate"
                  required
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
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
                  onChange={(e) => setImage(e.target.files[0])}
                  className="w-full px-4 py-1 border rounded-md"
                />

                <button
                  type="submit"
                  className="px-4 mt-2 text-white transition-transform transform bg-green-500 rounded-md active:scale-x-75 hover:bg-green-600 focus:outline-none focus:ring focus:border-green-700"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer/>
      </div>
    </>
  );
}

export default AdminNurse;
