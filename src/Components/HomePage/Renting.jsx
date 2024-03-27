import React from "react";
import Nurse from "../../assets/Images/home-care2.png";
import walkingPhoto from "../../assets/Images/walkingAids.webp";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

function Renting() {
  return (
    <div className="ml-[35px] sm:ml-0 my-32 ">
      <div className=" w-[350px] sm:w-full">
        <h1 className=" text-4xl   text-center ml-[45px] sm:ml-0 py-10  ">
          “The best way to find yourself is to lose yourself <br /> in the
          service of others”
        </h1>
      </div>
      <div className="flex-wrap justify-around gap-3 sm:flex">
        <div
          className=" h-96 w-[380px] rounded-xl bg-no-repeat bg-cover bg-center flex    items-end justify-center  mb-4 sm:mb-0 p-2"
          style={{ backgroundImage: `url(${Nurse})` }}
        >
          <Link to={"/user/nurse"}>
            <Button label="Home Nurse" />
          </Link>
        </div>
        <div
          className="h-96 w-[380px] rounded-xl bg-no-repeat bg-cover bg-center flex items-end justify-center mb-5 sm:mb-0 p-2"
          style={{ backgroundImage: `url(${walkingPhoto})` }}
        >
          <Link to={"/user/mobilityaids"}>
            {" "}
            <Button label="Mobility Aids" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Renting;
