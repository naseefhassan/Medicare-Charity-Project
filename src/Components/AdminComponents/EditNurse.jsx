import { useState } from "react";
import AdminHeader from "./AdminHeader";
import axiosInstance from "../../api/axios";
import { useParams } from "react-router-dom";

function EditNurse() {

  const { nurseId } = useParams();

  const [EditNurse, SetEditedNurse] = useState({
    username: "",
    gender: "",
    age: "",
    phoneNumber: "",
    Qualification: "",
    Experience: "",
    Image: "",
  });

  const handleChage = (e) => {
    const { name, value } = e.target;

    SetEditedNurse((PrevData) => ({
      ...PrevData,
      [name]: value,
    }));
  };
 
  const DataSubmit = (event) => {
    event.preventDefault();
    try {
      const res = axiosInstance.put(`/admin/editnurse/${nurseId}`, EditNurse);
          console.log(res.data); 
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
          Edit={"Edit Nurse"}
          Addroute={"/admin/adminnurse"}
          Editroute={"/admin/editnurse"}
          Showroute={"/admin/showNurse"}
        />

        <div>
          <div className="flex justify-center h-screen mt-2">
            <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
              <h1 className="mb-4 text-2xl font-bold text-center tc">
                Edit Nurse
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
                  className="w-full px-4 py-1 border rounded-md"
                  value={EditNurse.username}
                  onChange={handleChage}
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
                  value={EditNurse.gender}
                  onChange={handleChage}
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
                  value={EditNurse.age}
                  onChange={handleChage}
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
                  value={EditNurse.phoneNumber}
                  onChange={handleChage}
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
                  value={EditNurse.Qualification}
                  onChange={handleChage}
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
                  value={EditNurse.Experience}
                  onChange={handleChage}
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
                  className="w-full px-4 py-1 border rounded-md"
                  value={EditNurse.Image}
                  onChange={handleChage}
                />
                <button
                  type="submit"
                  onClick={DataSubmit}
                  className="px-4 py-2 mt-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-700"
                >
                  submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditNurse;
