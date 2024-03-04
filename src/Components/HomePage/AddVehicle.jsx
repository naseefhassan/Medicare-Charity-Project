import Header from "../Header/Header";
import image from "../../assets/Images/resque.jpg";
import { useState } from "react";
import axiosInstance from "../../api/axios";
import { useNavigate } from "react-router-dom";

function AddVehicle() {
  const navigate = useNavigate();
  const [errmsg, seterrmsg] = useState("");
  const [vehicle, setVehicle] = useState({
    ownerName: "",
    email: "",
    phoneNumber: "",
    vehicleNumber: "",
    vehicleModel: "",
    vehicleGrade: "",
    image: "",
  });

  const handleChange = async (e) => {
    if (e.target.type === "file") {
      const file = e.target.files[0];
      setVehicle({ ...vehicle, image: file });
    } else {
      const { name, value } = e.target;
      setVehicle({ ...vehicle, [name]: value });
    }
    seterrmsg("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("ownerName", vehicle.ownerName);
    formData.append("email", vehicle.email);
    formData.append("phoneNumber", vehicle.phoneNumber);
    formData.append("vehicleNumber", vehicle.vehicleNumber);
    formData.append("vehicleModel", vehicle.vehicleModel);
    formData.append("vehicleGrade", vehicle.vehicleGrade);
    formData.append("image", vehicle.image);
    try {
      // eslint-disable-next-line no-unused-vars
      const res = await axiosInstance.post("/user/addVehicle", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      navigate("/user/ambulance");
      alert("Thanks for joining us");
    } catch (error) {
      if (error.response.data.message === "This vehicle is already exists") {
        seterrmsg("This vehicle is already exists");
      }
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="w-[100%] h-[100vh] bg-cover bg-no-repeat bg-right flex justify-center items-center"
    >
      <Header />
      <div className="flex my-[60px]">
        <div className="m-auto">
          <div className="mt-5 bg-transparent rounded-lg shadow">
            <div className="flex">
              <div className="flex items-center gap-3 pl-5 mt-10 overflow-hidden">
                <h1 className="inline text-2xl font-semibold leading-none text-white">
                  Ambulance
                </h1>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="px-5 ">
                <input
                  type="text"
                  id="name"
                  name="ownerName"
                  required
                  onChange={handleChange}
                  value={vehicle.ownerName}
                  placeholder="Owner Name"
                  className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
                <input
                  type="text"
                  id="email"
                  name="email"
                  required
                  onChange={handleChange}
                  value={vehicle.email}
                  placeholder="Email"
                  className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
                <input
                  type="number"
                  id="phoneNumber"
                  name="phoneNumber"
                  required
                  onChange={handleChange}
                  value={vehicle.phoneNumber}
                  placeholder="Phone Number"
                  className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
              </div>

              <div className="px-5 pb-5">
                <input
                  type="text"
                  id="vehicleNumber"
                  name="vehicleNumber"
                  required
                  onChange={handleChange}
                  value={vehicle.vehicleNumber}
                  placeholder="Vehicle Number"
                  className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
                <input
                  type="text"
                  id="vehicleModel"
                  name="vehicleModel"
                  required
                  onChange={handleChange}
                  value={vehicle.vehicleModel}
                  placeholder="Vehicle Model"
                  className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
                <input
                  type="text"
                  id="vehicleGrade"
                  name="vehicleGrade"
                  required
                  onChange={handleChange}
                  value={vehicle.vehicleGrade}
                  placeholder="Vehicle Grade"
                  className="w-full px-4 py-2.5 mt-2 text-base text-black placeholder-gray-600 transition duration-500 ease-in-out transform bg-gray-200 border-transparent rounded-lg focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
                <input
                  type="file"
                  id="image"
                  name="image"
                  required
                  onChange={handleChange}
                  className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />

                <input
                  type="text"
                  id="location"
                  name="location"
                  required
                  placeholder="Location                      "
                  className="text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white  focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                />
                <h1 className="text-white text-end">Running  charge will be $320/KM</h1>
                <p className="mt-3 text-red-600">{errmsg}</p>
              </div>
              <div className="flex flex-row-reverse p-3">
                <div className="flex-initial pl-3">
                  <button
                    type="submit"
                    className="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize bg-black rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-900 transition duration-300 transform active:scale-95 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                      fill="#FFFFFF"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none"></path>
                      <path
                        d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z"
                        opacity=".3"
                      ></path>
                      <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"></path>
                    </svg>
                    <span className="pl-2 mx-1">Save</span>
                  </button>
                </div>
                <div className="flex-initial">
                  <button
                    type="button"
                    className="flex items-center bg-white px-5 py-2.5 font-medium tracking-wide text-black capitalize rounded-md hover:bg-red-200 hover:fill-current hover:text-red-600 focus:outline-none transition duration-300 transform active:scale-95 ease-in-out"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24px"
                      viewBox="0 0 24 24"
                      width="24px"
                    >
                      <path d="M0 0h24v24H0V0z" fill="none"></path>
                      <path d="M8 9h8v10H8z" opacity=".3"></path>
                      <path d="M15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"></path>
                    </svg>
                    <span className="pl-2 mx-1 ">Delete</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddVehicle;
