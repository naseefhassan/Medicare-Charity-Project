import React from "react";
import Profile from "../../assets/Images/Profile.png";
import { Link } from "react-router-dom";

function Header() {
  const Home = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className=" bg-gray-400 flex justify-center items-center  ring-opacity-70 h-16 fixed top-0 left-0 right-0  z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="sm:text-2xl">Medicare</h1>
            <ul className="flex gap-2 sm:gap-5 lg:ml-60 sm:tracking-widest text-[9px] sm:text-[15px]">
            <Link to={'/home'}><li onClick={Home} className="hover:scale-[1.05] cursor-pointer">Home </li></Link>
             <Link to={"/about"}> <li className="hover:scale-[1.05]">About </li></Link>
             <Link to={"/gallary"}> <li className="hover:scale-[1.05]">Gallery</li></Link>
              <li className="hover:scale-[1.05] text-center">Board Members</li>
              <li className="hover:scale-[1.05]">Contact </li>
            </ul>
            <div className="flex gap-1 sm:gap-2">
              <Link to={"/login"}>
              <button className="hover:scale-[1.05] text-[9px] sm:text-[15px]">
                Login
              </button>
              </Link>
              <button className="bg-[#545454] p-2 rounded-xl h-6 flex justify-center items-center mt-1">
                <h1 className="hover:scale-[1.05] text-white text-[9px] sm:text-[15px]">
                  Signup
                </h1>
              </button>
              <div className="border-2 border-black rounded-full">
                {" "}
                <img
                  src={Profile}
                  className="w-5 h-5 sm:w-7 sm:h-7"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
