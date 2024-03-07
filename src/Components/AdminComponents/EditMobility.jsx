import  { useEffect, useState } from "react";
import AdminHeader from "./AdminHeader";
import axiosInstance from "../../api/axios";
import { useParams } from "react-router-dom";

function EditMobility() {
  const { toolsId } = useParams();

  const [editMobilty, setMobility] = useState({
    item: "",
    brand: "",
    color: "",
    material: "",
    rate: "",
    description: "",
  });

  useEffect(() => {
    const fetchData = async (toolsId) => {
      try {
        const res = await axiosInstance.put(
          `/admin/editMobilityAids/${toolsId}`
        );
        setMobility(res.data.MobilityTools);
      } catch (error) {
        console.error(error, "feching mobility aids failed");
      }
    };
    fetchData(toolsId);
  }, [toolsId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMobility((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axiosInstance.put(
        `/admin/editMobilityAids/${toolsId}`,
        editMobilty
      );
    } catch (error) {
      console.error(error, "error in editing");
    }
  };

  return (
    <>
      <AdminHeader
        title={"Mobility Aids"}
        Show={"Show Mobility Aids"}
        Add={"Add Mobility Aids"}
        Home={'Home'}
        Homeroute={'/admin/adminhome'}
        Addroute={"/admin/mobilityAids"}
        Showroute={"/admin/showMobilityAids"}
      />

      <div>
        <div className="flex justify-center h-screen mt-2">
          <div className="w-full max-w-md p-8 bg-white rounded shadow-md">
            <h1 className="mb-4 text-2xl font-bold text-center tc">
              Edit Nurse
            </h1>

            <form onSubmit={handleSubmit}>
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
                value={editMobilty.item}
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
                name="brand"
                required
                value={editMobilty.brand}
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
                name="color"
                required
                value={editMobilty.color}
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
                name="material"
                required
                value={editMobilty.material}
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
                name="rate"
                required
                value={editMobilty.rate}
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
                name="description"
                required
                value={editMobilty.description}
                onChange={handleChange}
                className="w-full px-4 py-1 border rounded-md"
              />

              <button
                type="submit"
                className="px-4 py-2 mt-2 text-white transition-transform transform bg-green-500 rounded-md active:scale-x-75 hover:bg-green-600 focus:outline-none focus:ring focus:border-green-700"
              >
                submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditMobility;
