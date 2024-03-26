/* eslint-disable no-unused-vars */
import { useState } from "react";
import AdminHeader from "./AdminHeader";
import axiosInstance from "../../api/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddMobilityAids() {
  const [item, setitem] = useState("");
  const [brand, setbrand] = useState("");
  const [color, setcolor] = useState("");
  const [material, setmaterial] = useState("");
  const [rate, setrate] = useState("");
  const [description, setdescription] = useState("");
  const [image, setimage] = useState("");
  

  const DataSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("item", item);
    formData.append("brand", brand);
    formData.append("color", color);
    formData.append("material", material);
    formData.append("rate", rate);
    formData.append("description", description);
    formData.append("image", image);

    try {
      const res = axiosInstance.post("/admin/mobilityAids", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success('Mobility Item Added')
    } catch (error) {
      console.error(error, "failed to append");
    }
  };
  return (
    <div className="bg-gray-100">
      <AdminHeader
        title={"Mobility Aids"}
        Show={"Show Mobility Aids"}
        Add={"Add Mobility Aids"}
        Edit={"Edit Mobility Aids"}
        Home={'Home'}
        Homeroute={'/admin/adminhome'}
        Showroute={"/admin/showMobilityAids"}
        Addroute={"/admin/mobilityAids"}
      />

      <div className="flex justify-center mt-2">
        <div className="flex-wrap w-1/3 p-8 my-5 bg-white rounded shadow-md">
          <h1 className="mb-4 text-2xl font-bold text-center tc">
            Add Mobility Aids
          </h1>

          <form onSubmit={DataSubmit}>
            <label
              className="block text-sm font-medium text-gray-600"
              htmlFor="Item"
            >
              Item:
            </label>
            <input
              type="text"
              id="Item"
              name="item"
              required
              value={item}
              onChange={(e) => setitem(e.target.value)}
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
              name="brand"
              required
              value={brand}
              onChange={(e) => setbrand(e.target.value)}
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
              name="color"
              required
              value={color}
              onChange={(e) => setcolor(e.target.value)}
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
              name="material"
              required
              value={material}
              onChange={(e) => setmaterial(e.target.value)}
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
              name="rate"
              required
              value={rate}
              onChange={(e) => setrate(e.target.value)}
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
              name="description"
              required
              value={description}
              onChange={(e) => setdescription(e.target.value)}
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
              name="image"
              required
              onChange={(e) => setimage(e.target.files[0])}
              className="w-full px-4 py-1 border rounded-md"
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
      <ToastContainer/>
    </div>
  );
}

export default AddMobilityAids;
