import Profile from "../../assets/Images/Profile.png";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center h-16 bg-gray-400 ring-opacity-70 ">
        <div className="container px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center gap-3">
              <button
                className="sm:text-2xl focus:outline-none sm:hidden"
                onClick={toggleMenu}
              >
                <FaBars />
              </button>
              <h1 className="text-[4vw] ">Medicare</h1>
            </div>
            <ul
              className={`${
                isMenuOpen ? "block" : "hidden"
              } absolute top-16 text-[13px] md:text-[16px] left-0 w-[150px] h-[200px] bg-gray-400 bg-opacity-80  sm:flex sm:gap-4 sm:ml-0 sm:w-auto sm:bg-transparent sm:top-auto sm:flex-row sm:justify-end sm:items-center sm:relative`}
            >
              <li
                onClick={scrollToTop}
                className="hover:scale-[1.05] cursor-pointer"
              >
                <Link to={"/"}>Home</Link>
              </li>
              <li className="hover:scale-[1.05]">
                <Link to={"/user/about"}>About</Link>
              </li>
              <li className="hover:scale-[1.05]">
                <Link to={"/user/gallery"}>Gallery</Link>
              </li>
              <li className="hover:scale-[1.05] ">
                <Link to={"/user/boardmembers"}>Board Members</Link>
              </li>
              <li className="hover:scale-[1.05]">
                <Link to={"/user/contact"}>Contact</Link>
              </li>
            </ul>

            <div className="flex items-center justify-center gap-3">
              <Link to={"/auth"}>
                <button className="bg-[#545454]  rounded-md w-14 sm:w-20 h-6 flex justify-center items-center mt-1 p-4">
                  <h1 className="hover:scale-[1.05] text-white text-[9px] sm:text-[15px]">
                    Register
                  </h1>
                </button>
              </Link>

              <Link to={"/user/profile"}>
                <div className="border-2 border-black rounded-full">
                  <img
                    src={Profile}
                    className="w-5 h-5 sm:w-7 sm:h-7 hover:scale-[1.05]"
                    alt=""
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
