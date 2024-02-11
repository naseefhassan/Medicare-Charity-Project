import React from 'react'
import Header from "../../Components/Header/Header";
import HomePhoto from "../../assets/Images/MainPhoto.jpg";
import "../../../public/Header.css";
import Button from '../Button/Button';
import { Link } from 'react-router-dom';


function Donate() {
  return (
    <div
    className="image w-[100%] my-[-100px]  h-[110vh] bg-cover bg-no-repeat bg-fixed bg-center "
    style={{ backgroundImage: `url(${HomePhoto})` }} >
    <Header />
    <div className="flex flex-col items-center justify-center h-full my-10">
      <h1 className="mt-40 text-3xl text-center sm:text-6xl ">
        It's not how much we give,
        <br /> but how much love we put into giving.
      </h1>
      <div className="flex items-center justify-center mt-8 ">
        <Link to={"/accountdetails"}><Button label="Donate" /></Link>
      </div>
    </div>
  </div>
  )
}

export default Donate