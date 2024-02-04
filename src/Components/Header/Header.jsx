import React from "react";
import Profile from "../../assets/Images/Profile.png"

function Header() {
  return (
    <>
      <div className="flex justify-between p-2  items-center  ">
        <h1 className="sm:text-2xl" >Medicare</h1>
        <ul className="flex gap-2 sm:gap-5 lg:ml-60 sm:tracking-widest text-[9px] sm:text-[15px] ">
          <li className="hover:scale-[1.05]">Home</li>
          <li className="hover:scale-[1.05]">About </li>
          <li className="hover:scale-[1.05]">Galary</li>
          <li className="hover:scale-[1.05] text-center">Board Members</li>
          <li className="hover:scale-[1.05]">Contact </li>
        </ul>
        <div className="flex gap-1  sm:gap-2 ">
          <button className="hover:scale-[1.05] text-[9px] sm:text-[15px]   ">Login</button>
          <button className="bg-[#545454] p-2 rounded-xl h-6 flex justify-center items-center  mt-1"><h1 className="hover:scale-[1.05] text-white text-[9px] sm:text-[15px] ">Signup</h1></button>
       <div className="border-2 border-black rounded-full"> <img src={Profile} className=" w-5 h-5  sm:w-7  sm:h-7  " alt="" /></div>
        </div>
      </div>
    </>
  );
}

export default Header;