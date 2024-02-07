import React from 'react'
import Nurse from "../../assets/Images/home-care2.png"
import walkingPhoto from '../../assets/Images/walkingAids.webp'
import Button from '../Button/Button'
import { Link } from 'react-router-dom'

function Renting() {
  return (
    <div className='ml-[25px] sm:ml-0 my-32 '>
    <h1 className=' text-4xl text-center ml-[30px] sm:ml-0 py-10  '>“The best way to find yourself is to lose yourself <br /> in the service of others”</h1>
    <div className=' sm:flex flex-wrap  gap-3   justify-around'>
        <div className=' h-96 w-[380px] rounded-xl bg-no-repeat bg-cover bg-center flex    items-end justify-center  mb-4 sm:mb-0 p-2' style={{backgroundImage:`url(${Nurse})`}}>
            <Link to={'/nurse'}><Button  label="Home Nurse" /></Link>
        </div>
        <div className='h-96 w-[380px] rounded-xl bg-no-repeat bg-cover bg-center flex items-end justify-center mb-5 sm:mb-0 p-2' style={{backgroundImage:`url(${walkingPhoto})`}}>
            <Link to={'/mobilityaids'}> <Button  label="Mobility Aids" /></Link>
        </div>
    </div>
</div>
  )
}

export default Renting