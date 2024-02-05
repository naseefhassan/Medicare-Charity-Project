import React from 'react'
import Header from "../../Components/Header/Header";
import HomePhoto from "../../assets/Images/MainPhoto.jpg";
import "../../../public/Header.css";
import Button from '../Button/Button';


function Donate() {
  return (
    <div
    className="image w-[425px] sm:w-full my-[-100px]  h-[110vh] "
    style={{ backgroundImage: `url(${HomePhoto})` }} >
    <Header />
    <div className="my-10 flex flex-col items-center justify-center h-full">
      <h1 className="text-center mt-40 sm:text-6xl text-3xl ">
        It's not how much we give,
        <br /> but how much love we put into giving.
      </h1>
      <div className="flex items-center justify-center mt-8">
        <Button label="Donate" />
      </div>
    </div>
  </div>
  )
}

export default Donate