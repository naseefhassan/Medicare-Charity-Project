import AdminCards from "./AdminCards";
import payment from "../../../src/assets/Images/payment.webp";
import nurse from "../../../src/assets/Images/adminNurse.avif"
import MobilityAids from "../../../src/assets/Images/adminAids.jpg"
import Ambulance from "../../../src/assets/Images/amdinAmbulance.jpg"
import Volunteer from "../../../src/assets/Images/adminVolunnteer.webp"
import Profile from "../../../src/assets/Images/profile.png"

function AdminHome() {
  const CardData = [
    { HomePhoto: payment, label: "Payment" },
    { HomePhoto: nurse, label: "Nurse",route:"/admin/showNurse" },
    { HomePhoto: MobilityAids, label: "Mobility Aids",route:'/admin/showMobilityAids' },
    { HomePhoto: Ambulance, label: "Ambulance", route:'/admin/showVehicle' },
    { HomePhoto: Volunteer, label: "Volunteer", route:'/admin/showVolunteer' },
    { HomePhoto: Profile, label: "Profile",route:'/admin/userProfile' },


  ];
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold text-center">Admin Page..!</h1>
        <div className="flex flex-wrap justify-around gap-6">
          
          {CardData.map((data, index) => 
            <AdminCards
              key={index}
              HomePhoto={data.HomePhoto}
              label={data.label}
              route={data.route}
            />
          )}
          
        </div>
      </div>
    </>
  );
}

export default AdminHome;
