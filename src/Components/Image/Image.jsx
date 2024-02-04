import React from 'react'

const Image = ({src,alt,}) => {
  return (
    <img className='w-[450px] h-[250px] rounded-md' src={src} alt={alt} />
  )
}

export default Image