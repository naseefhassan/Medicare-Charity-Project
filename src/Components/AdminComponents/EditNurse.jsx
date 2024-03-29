import { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";
import axiosInstance from "../../api/axios";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function EditNurse() {
  const { nurseId } = useParams();

  const [editedNurse, setEditedNurse] = useState({
    username: "",
    gender: "",
    age: "",
    phoneNumber: "",
    Qualification: "",
    Experience: "",
    rate: "",
    Image: "",
  });

  useEffect(() => {
    const fetchData = async (nurseId) => {
      try {
        const res = await axiosInstance.put(`/admin/editnurse/${nurseId}`);
        setEditedNurse(res.data.nurse);
      } catch (error) {
        console.error(error, "Error fetching nurse data");
      }
    };
    fetchData(nurseId);
  }, [nurseId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedNurse((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosInstance.put(`/admin/editnurse/${nurseId}`, editedNurse);
      toast.success("Successfully edited");
    } catch (error) {
      console.error(error, "error in editing");
    }
  };

  return (
    <>
      <div className="bg-gray-100 ">
        <AdminHeader
          title={"Edit Nurse"}
          Show={"Show Nurse"}
          Add={"Add nurse"}
          Home={"Home"}
          Homeroute={"/admin/adminhome"}
          Addroute={"/admin/adminnurse"}
          Showroute={"/admin/showNurse"}
        />

        <div>
          <div className="flex justify-center mt-2">
            <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
              <h1 className="mb-4 text-2xl font-bold text-center tc">
                Edit Nurse
              </h1>
              <form onSubmit={handleSubmit}>
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
                  className="w-full px-4 py-1 border rounded-md"
                  value={editedNurse.username}
                  onChange={handleChange}
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
                  className="w-full px-4 py-1 border rounded-md"
                  value={editedNurse.gender}
                  onChange={handleChange}
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
                  className="w-full px-4 py-1 border rounded-md"
                  value={editedNurse.age}
                  onChange={handleChange}
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
                  className="w-full px-4 py-1 border rounded-md"
                  value={editedNurse.phoneNumber}
                  onChange={handleChange}
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
                  className="w-full px-4 py-1 border rounded-md"
                  value={editedNurse.Qualification}
                  onChange={handleChange}
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
                  className="w-full px-4 py-1 border rounded-md"
                  value={editedNurse.Experience}
                  onChange={handleChange}
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
                  className="w-full px-4 py-1 border rounded-md"
                  value={editedNurse.rate}
                  onChange={handleChange}
                />

                <button
                  type="submit"
                  // onClick={DataSubmit}
                  className="px-4 py-2 mt-2 text-white transition-transform transform bg-green-500 rounded-md active:scale-x-75 hover:bg-green-600 focus:outline-none focus:ring focus:border-green-700"
                >
                  submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
}

export default EditNurse;
