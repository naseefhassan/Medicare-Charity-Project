import React from 'react'
import Button from "../../Components/Button/Button";

import volunteer from '../../assets/Images/volunteer.jpeg'
import Ambulance from '../../assets/Images/Ambulance.jpg'
import { Link } from 'react-router-dom';

function Volunteer() {
  return (
    <div className='ml-[25px] sm:ml-0 ' >
    <div >
        <h1 className='mt-3 text-5xl text-center '>Volunteering </h1>
        <h1 className='mt-3 text-3xl text-center'>"Giving your time and your talents toward a favorite cause can be the perfect <br /> way to contribute"</h1>
    </div>
    <div className='flex-wrap justify-around mt-10 mb-10 sm:flex '>
      <div className=' h-96 w-[380px] rounded-xl bg-no-repeat bg-cover bg-center flex items-end justify-center  mb-4 sm:mb-0 p-2' style={{backgroundImage:`url(${volunteer})`}}>
        <Link to={'/user/beavolunteer'} ><Button label="Be a Volunteer"/></Link>
      </div>
      <div className=' h-96 w-[380px] rounded-xl bg-no-repeat bg-cover bg-center flex items-end justify-center  mb-4 sm:mb-0 p-2 ' style={{backgroundImage:`url(${Ambulance})`}}>
      <Link to={'/user/ambulance'}><Button label="Ambulance"/></Link>
      </div>
    </div>
    </div>
    )
}

export default Volunteer