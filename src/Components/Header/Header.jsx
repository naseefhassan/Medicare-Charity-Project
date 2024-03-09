import Profile from "../../assets/Images/Profile.png";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import axiosInstance from "../../api/axios";
import { useDispatch } from 'react-redux'
import {clearToken} from '../../Redux/Jwt'

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const token = localStorage.getItem("jwtToken");
  const [user, setUser] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.post("/user/getprofile", { token });
        setUser(res.data.profileData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [token]);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLogOut = () => {
    // Clear token from Redux
    dispatch(clearToken());
    // Clear token from local storage
    localStorage.removeItem("jwtToken");
    // Redirect to home
    navigate("/");
    alert('Successfully Logout')
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center h-16 text-white bg-gray-400 ring-opacity-70">
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
                className="leading-4 cursor-pointer hover:border-b-2"
              >
                <Link to={"/"}>Home</Link>
              </li>
              <li className="leading-4 hover:border-b-2">
                <Link to={"/user/about"}>About</Link>
              </li>
              <li className="leading-4 hover:border-b-2">
                <Link to={"/user/gallery"}>Gallery</Link>
              </li>
              <li className="leading-4 hover:border-b-2 ">
                <Link to={"/user/boardmembers"}>Board Members</Link>
              </li>
              <li className="leading-4 hover:border-b-2">
                <Link to={"/user/Chats"}>Contact</Link>
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

              <Link to={`/user/profile/${user._id}`}>
                <div className="border-2 border-black rounded-full">
                  <img
                    src={Profile}
                    className="w-5 h-5 sm:w-7 sm:h-7 hover:scale-[1.05]"
                    alt=""
                  />
                </div>
              </Link>
              <button
                onClick={handleLogOut}
                className="p-1 leading-4 text-red-600 border-red-600 rounded-lg hover:border-2"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
