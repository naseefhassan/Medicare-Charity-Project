import React from "react";
import Profile from "../../assets/Images/Profile.png"

function Header() {
  return (
    <>
      <div className="flex justify-between p-2  items-center">
        <h1 className="sm:text-2xl" >Medicare</h1>
        <ul className="flex gap-5 lg:ml-60 sm:tracking-widest text-[9px] sm:text-[12px] ">
          <li className="hover:scale-[1.05]">Home</li>
          <li className="hover:scale-[1.05]">About Us</li>
          <li className="hover:scale-[1.05]">Galary</li>
          <li className="hover:scale-[1.05]">Board Members</li>
          <li className="hover:scale-[1.05]">Contact Us</li>
        </ul>
        <div className="flex gap-3 ">
          <button className="hover:scale-[1.05]">Login</button>
          <button className="bg-[#545454] p-2 rounded-xl h-8 flex justify-center items-center"><h1 className="hover:scale-[1.05] text-white">Signup</h1></button>
       <div className="border-2 border-black rounded-full"> <img src={Profile} className="w-7  h-7 " alt="" /></div>
        </div>
      </div>
    </>
  );
}

export default Header;
