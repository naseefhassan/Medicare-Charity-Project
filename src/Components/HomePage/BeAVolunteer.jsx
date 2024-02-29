import React from "react";
import Header from "../Header/Header";
import Button from "../Button/Button";
import volunteerImg from "../../assets/Images/volunteerPageImg.jpg";
import { Link } from "react-router-dom";

function BeAVolunteer() {
  return (
    <>
      <Header />
      <div
        className="image w-[100%] h-[100vh] bg-cover bg-no-repeat bg-center flex justify-center items-center  "
        style={{ backgroundImage: `url(${volunteerImg})` }}
      >
        <div className="flex  flex-col items-center justify-center  gap-10">
          <h1 className="text-6xl font-bold text-center   tracking-wide  ">
            Become a Volunteer in our <br /> community
          </h1>
          <Link to={'/user/volunteerprofile'}>
          <button
            type="button"
            className="px-8 py-6 items-center bg-orange-400 rounded-md text-white outline-none  shadow-lg transform active:scale-x-75 transition-transform mx-5 flex"
          >
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
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>

            <span className="ml-2">Add profile</span>
          </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default BeAVolunteer;
