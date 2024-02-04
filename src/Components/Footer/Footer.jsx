import React from 'react'
import loco_1 from '../../assets/Images/icons8-whatsapp-50.png'
import loco_2 from '../../assets/Images/icons8-instagram-50.png'
import loco_3 from '../../assets/Images/icons8-facebook-50 (1).png'


function Footer() {
  return (
    <div className='bg-[#4B4B4B] '>

        <div className='text-white flex justify-around p-2 '>
            <h1  >Medicare</h1>
            <div className='flex flex-col justify-center items-center'>
                <h1>Follow us</h1>
                <div className='flex  gap-1 '>
                    <img className='w-6 h-6' src={loco_1} alt="" />
                    <img className='w-6 h-6' src={loco_2} alt="" />
                    <img className='w-6 h-6' src={loco_3} alt="" />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Footer