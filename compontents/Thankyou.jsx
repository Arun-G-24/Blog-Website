import React from 'react'
import image from '../src/assets/end.png'
import { Link } from 'react-router-dom'
function Thankyou() {
  return (
    <div className='relative z-0'>
      <div
  style={{ '--image-url': `url(${image})` }}
  className="bg-[image:var(--image-url)]  bg-cover bg-center h-157 w-full blur-1xl "
  >
</div>
<div className="flex absolute top-100 right-160 justify-center z-2">

  <button><Link to="/" className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3  z-10 ">Back to Home</Link></button> 
</div>
  

    </div>
  )
}

export default Thankyou
