import Header from "../Header/Header";
import ambulance from "../../assets/Images/userAmbulance.jpg";
import { Link } from "react-router-dom";

function Ambulance() {
  return (
    <div
      className="image w-[100%] h-[100vh] bg-cover bg-no-repeat bg-right flex justify-center items-center  "
      style={{ backgroundImage: `url(${ambulance})` }}
    >
      <Header />

      <div className="text-white flex  justify-around  w-full items-center">
        <h1 className="text-2xl ">
          If you do call overnight, know that we can <br />
          be just as busy as we are during the day <br />
          Please be patient we will get to you as <br />
          soon as we can
        </h1>
        <h1 className="  text-5xl font-bold">
          Day or Night, <br />
          We,re Here <br />
          For You.
          <Link to={'/user/addVehicle'}>
          <button className="text-sm bg-gray-900 p-3  rounded-lg flex items-center justify-center">
            Add Vehicle
          </button>
          </Link>
        </h1>
      </div>
    </div>
  );
}

export default Ambulance;
