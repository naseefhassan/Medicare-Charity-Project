import React from 'react'
import Button from "../../Components/Button/Button";

import volunteer from '../../assets/Images/volunteer.jpeg'
import Ambulance from '../../assets/Images/Ambulance.jpg'

function Volunteer() {
  return (
    <div className='ml-[25px] sm:ml-0 ' >
    <div >
        <h1 className='text-center text-5xl mt-3  '>Volunteering </h1>
        <h1 className='text-center text-3xl mt-3'>"Giving your time and your talents toward a favorite cause can be the perfect <br /> way to contribute"</h1>
    </div>
    <div className='sm:flex flex-wrap mt-10 mb-10 justify-around '>
      <div className=' h-96 w-[380px] rounded-xl bg-no-repeat bg-cover bg-center flex items-end justify-center  mb-4 sm:mb-0 p-2' style={{backgroundImage:`url(${volunteer})`}}>
        <Button label="Be a Volunteer"/>
      </div>
      <div className=' h-96 w-[380px] rounded-xl bg-no-repeat bg-cover bg-center flex items-end justify-center  mb-4 sm:mb-0 p-2 ' style={{backgroundImage:`url(${Ambulance})`}}>
      <Button label="Ambulance"/>
      </div>
    </div>
    </div>
    )
}

export default Volunteer