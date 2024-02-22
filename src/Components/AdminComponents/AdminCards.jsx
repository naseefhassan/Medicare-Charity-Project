/* eslint-disable react/prop-types */
import Button from "../Button/Button";
import { Link } from "react-router-dom";


function AdminCards({ HomePhoto, label,route }) {
  return (
    <>
      <div className="">
        <div style={{ backgroundImage: `url(${HomePhoto})` }} className="w-[320px]  h-[320px] rounded-xl bg-center bg-conver bg-no-repeat flex justify-center items-end ">
          <Link to={route}> <div> <Button label={label}/></div></Link>
           <div>
            <button></button><button></button><button></button>
           </div>
        </div>
      </div>
    </>
  );
}

export default AdminCards;
