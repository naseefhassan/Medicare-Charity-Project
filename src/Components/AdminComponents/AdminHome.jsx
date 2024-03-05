import AdminCards from "./AdminCards";
import payment from "../../../src/assets/Images/payment.webp";
import nurse from "../../../src/assets/Images/adminNurse.avif";
import MobilityAids from "../../../src/assets/Images/adminAids.jpg";
import Ambulance from "../../../src/assets/Images/amdinAmbulance.jpg";
import Volunteer from "../../../src/assets/Images/adminVolunnteer.webp";
import Profile from "../../../src/assets/Images/profile.png";
import { Link } from "react-router-dom";

function AdminHome() {
  const CardData = [
    { HomePhoto: payment, label: "Payment" },
    { HomePhoto: nurse, label: "Nurse", route: "/admin/showNurse" },
    {
      HomePhoto: MobilityAids,
      label: "Mobility Aids",
      route: "/admin/showMobilityAids",
    },
    { HomePhoto: Ambulance, label: "Ambulance", route: "/admin/showVehicle" },
    { HomePhoto: Volunteer, label: "Volunteer", route: "/admin/showVolunteer" },
    { HomePhoto: Profile, label: "Profile", route: "/admin/userProfile" },
  ];
  return (
    <>
      <div>
        <div className="flex justify-around bg-gray-200">
          <h1 className="text-4xl font-bold text-center">Admin Page..!</h1>

          <Link to={"/admin/chats"}>
            <div className="p-3 rounded-3xl ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>
            </div>
          </Link>
        </div>
        <div className="flex flex-wrap justify-around gap-6 mt-5">
          {CardData.map((data, index) => (
            <AdminCards
              key={index}
              HomePhoto={data.HomePhoto}
              label={data.label}
              route={data.route}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default AdminHome;
