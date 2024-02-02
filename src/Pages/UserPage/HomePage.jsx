import React from "react";
import Header from "../../Components/Header/Header";
import HomePhoto from "../../assets/Images/MainPhoto.jpg";
import Button from "../../Components/Button/Button";

function HomePage() {
  
  return (
    <>
      <div className="  h-auto w-[100%] sm:h-screen " style={{backgroundImage:`url(${HomePhoto})`}}>
        <Header />
        <div className=""><h1 className="text-center mt-40 text-6xl">It's not how much we give,<br /> but how much love we put into giving.</h1></div>
       <div className="flex items-center justify-center">
        <Button label="Donate"/>
       </div>
      </div>
    </>
  );
}

export default HomePage;
