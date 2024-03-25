import React from "react";
import loco_1 from "../../assets/Images/icons8-whatsapp-50.png";
import loco_2 from "../../assets/Images/icons8-instagram-50.png";
import loco_3 from "../../assets/Images/icons8-facebook-50 (1).png";
import loco_4 from "../../assets/Images/icons8-location-50.png";
import loco_5 from "../../assets/Images/icons8-phone-30.png";
import loco_6 from "../../assets/Images/icons8-mail-24.png";

function Footer() {
  return (
    <div className="bg-[#4B4B4B] text-white w-[450px] sm:w-full">
      <div className=" flex justify-around items-center  p-2 ">
        <h1 className="text-3xl">Medicare</h1>
        <div className="flex flex-col justify-center items-center">
          <h1>Follow us</h1>
          <div className="flex  gap-1 ">
            <img className="w-6 h-6" src={loco_1} alt="" />
            <img className="w-6 h-6" src={loco_2} alt="" />
            <img className="w-6 h-6" src={loco_3} alt="" />
          </div>
        </div>
      </div>
      <div className=" mx-8 sm:mx-32">
        <h1>About Us</h1>
        <h1>
          Medicare is dedicated to nurturing a Kingdom of God-minded new
          generation among children and youths. Our mission focuses on
          instilling Kingdom principles within the hearts and minds of the next
          generation. Through targeted efforts, we strive to foster a community
          where young individuals embody the values and teachings of the
          Kingdom. Our commitment lies in shaping a future generation that
          reflects the divine principles of love, compassion, and righteousness.
        </h1>
      </div>
      <div className="sm:flex justify-around ">
        <div className="mx-8 sm:mx-32 my-14">
          <h1>Administrative Office:</h1>
          <h1>
            Medicare Social Movement,
            <br />
            Thottamoola, Nenmenikkunnu Post,
            <br />
            Sulthan Bathery, Kerala, India,
            <br />
            Pin: 673592
          </h1>
        </div>

        <div className="mx-8 sm:mx-32 my-14 ">
          <h1> Get Connected:</h1>
          <div className="flex flex-col gap-y-3 items-start">
            <div className="flex   items-center">
              <img className="w-6 h-6" src={loco_4} alt="" />
              <h1>
                Thottamoola, Nenmenikkunnu Post,
                <br />
                Sulthan Bathery, Kerala, India,
              </h1>
            </div>

            <div className="flex justify-center items-center">
              <img className="w-6 h-6" src={loco_5} alt="" />
              <h1>9845623152</h1>
            </div>

            <div className="flex justify-center items-center mb-4 sm:mb-0">
              <img className="w-6 h-6" src={loco_6} alt="" />
              <h1>medicare@admin.com</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
