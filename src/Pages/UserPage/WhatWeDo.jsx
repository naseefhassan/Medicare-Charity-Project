import React from 'react'

function WhatWeDo() {
  return (
    <div className='sm:flex sm:h-screen '>
        <div className='w-1/2 flex justify-center items-center'>
            <div className='bg-[#FFD439] w-[400px] h-[400px] rounded-lg flex flex-col items-center justify-around' >
                <h1 className='text-5xl'>Served Over</h1>
                <div className='text-center text-4xl'>
                    <h1>1,321,901</h1>
                    <h1>Children in 150 Countries</h1>
                </div>
                <div className='w-[200px] h-[40px] bg-white rounded-lg flex items-center justify-center'>
                    View Our Program
                </div>
            </div>
        </div>

        <div className='w-1/2 flex flex-col items-center justify-center gap-y-10'>
           <div className='text-center flex flex-col gap-y-5  '>
           <h1 className='text-5xl'>What We Do</h1>
            <h1 className='text-2xl'>`We focus the Next Generation’</h1>
           </div>
            <div className='lg:w-[600px] text-[20px]'><h1>At Medicare, we are dedicated to making a positive impact on the lives of individuals and communities. Our mission is rooted in a commitment to fostering sustainable development, social justice, and the well-being of those in need.</h1></div>
        </div>
    </div>
  )
}

export default WhatWeDo