import React from "react";
import Image from "../../Components/Image/Image";
import Img1 from "../../assets/Images/gallary_1.jpg";
import Img2 from "../../assets/Images/gallary_2.jpg";
import Img3 from "../../assets/Images/gallary_3.jpg";
import Img4 from "../../assets/Images/gallary_4.jpg";
import Img5 from "../../assets/Images/gallary_5.jpg";
import Img6 from "../../assets/Images/gallary_6.jpg";
import Img7 from "../../assets/Images/gallery_7.avif";
import Img8 from "../../assets/Images/gallary_8.jpg";
import Img9 from "../../assets/Images/gallary_9.jpg";
import Img10 from "../../assets/Images/gallary_10.avif";
import Img11 from "../../assets/Images/gallary_11.jpg";
import Img12 from "../../assets/Images/gallary_12.jpg";

function Gallary() {
  return (
    <div className="flex flex-col w-[465px] sm:w-full justify-center items-center ml-[0px] sm:ml-0">
      <h1 className="text-center text-5xl mb-8 ml-[30px] sm:ml-0 ">
        Our Gallary
      </h1>
      <div className="scroll flex  gap-3  max-w-[1100px] h-[230px] overflow-y-hidden ml-[30px] sm:ml-0">
        <Image src={Img1} alt="" />
        <Image src={Img2} alt="" />
        <Image src={Img3} alt="" />
        <Image src={Img4} alt="" />
        <Image src={Img5} alt="" />
        <Image src={Img6} alt="" />
      </div>
      <div className="scroll flex  gap-3  max-w-[1100px] h-[230px] overflow-y-hidden mt-10  mb-10 ml-[30px] sm:ml-0">
        <Image src={Img7} alt="" />
        <Image src={Img8} alt="" />
        <Image src={Img9} alt="" />
        <Image src={Img10} alt="" />
        <Image src={Img11} alt="" />
        <Image src={Img12} alt="" />
      </div>
    </div>
  );
}

export default Gallary;
