import { useState } from "react";
import AdminHeader from "./AdminHeader";
import axiosInstance from "../../api/axios";

function AddMobilityAids() {
  const [Mobility, setMobility] = useState({
    Item: " ",
    Brand: " ",
    Color: " ",
    Material: " ",
    Rate: " ",
    Description: " ",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMobility((preData) => ({
      ...preData,
      [name]: value,
    }));
    console.log(name, value);
  };

  const Submit = async (e) => {
    e.preventDefault();
    try {
      const res = axiosInstance.post("/admin/mobilityAids", Mobility);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(Mobility, "mob");
  return (
    <div>
      <AdminHeader
        title={"Mobility Aids"}
        Show={"Show Mobility Aids"}
        Add={"Add Mobility Aids"}
        Edit={"Edit Mobility Aids"}
        Addroute={'/admin/mobilityAids'}
        Editroute={'admin/editMobilityAids'}
        
      />

      <div className="flex justify-center mt-2">
        <div className="flex-wrap w-1/3 p-8 my-5 rounded shadow-md bg-gradient-to-r from-purple-400 to-blue-500">
          <h1 className="mb-4 text-2xl font-bold text-center tc">
          Add Mobility Aids
          </h1>

          <form onSubmit={Submit}>
            <label
              className="block text-sm font-medium text-gray-600"
              htmlFor="Item"
            >
              Item:
            </label>
            <input
              type="text"
              id="Item"
              name="Item"
              required
              value={Mobility.Item}
              onChange={handleChange}
              className="w-full px-4 py-1 border rounded-md"
            />

            <label
              className="block text-sm font-medium text-gray-600"
              htmlFor="name"
            >
              Brand:
            </label>
            <input
              type="text"
              id="Brand"
              name="Brand"
              required
              value={Mobility.Brand}
              onChange={handleChange}
              className="w-full px-4 py-1 border rounded-md"
            />

            <label
              className="block text-sm font-medium text-gray-600"
              htmlFor="Color"
            >
              Color:
            </label>
            <input
              type="tel"
              id="Color"
              name="Color"
              required
              value={Mobility.Color}
              onChange={handleChange}
              className="w-full px-4 py-1 border rounded-md"
            />
            <label
              className="block text-sm font-medium text-gray-600"
              htmlFor="Material"
            >
              Material:
            </label>
            <input
              type="text"
              id="Material"
              name="Material"
              required
              value={Mobility.Material}
              onChange={handleChange}
              className="w-full px-4 py-1 border rounded-md"
            />
            <label
              className="block text-sm font-medium text-gray-600"
              htmlFor="Rate"
            >
              Rate:
            </label>
            <input
              type="number"
              id="Rate"
              name="Rate"
              required
              value={Mobility.Rate}
              onChange={handleChange}
              className="w-full px-4 py-1 border rounded-md"
            />

            <label
              className="block text-sm font-medium text-gray-600"
              htmlFor="Description"
            >
              Description:
            </label>
            <input
              type="Description"
              id="Description"
              name="Description"
              required
              value={Mobility.Description}
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
              value={Mobility.Image}
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
  );
}

export default AddMobilityAids;
