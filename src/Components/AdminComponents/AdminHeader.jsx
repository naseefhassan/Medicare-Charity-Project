/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function AdminHeader({ title,Home, Show, Add, Homeroute, Showroute, Addroute }) {
  return (
    <div className="flex flex-wrap items-center justify-around p-2 bg-gray-400 text-[13px] ">
      <h1 className="font-bold sm:text-3xl">{title}</h1>
      <div className="flex gap-1 sm:gap-3">
      <Link to={Homeroute}>
          <button className=" p-2 sm:p-4 flex justify-center items-center hover:scale-[1.05] ">
            {Home}
          </button>
        </Link>
        
        <Link to={Showroute}>
          <button className=" p-2 sm:p-4 flex justify-center items-center hover:scale-[1.05] ">
            {Show}
          </button>
        </Link>

        <Link to={Addroute}>
          <button className="sm:p-4 flex justify-center items-center hover:scale-[1.05] ">
            {Add}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default AdminHeader;
