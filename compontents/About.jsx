import React from 'react'
import { Link } from 'react-router-dom'
import Thankyou from './Thankyou'

function About() {
  return (
    <>

   <div className='flex justify-center mt-40'>
    
    
    <div className="max-w-100  bg-white shadow-black rounded-3xl shadow flex flex-col   my-5 p-6">
    <p className="text-xl font-semibold pb-5">About Us</p>
    <p className="pb-2">
This project was independently developed as part of my internship at <mark>Data Aces</mark> .
It showcases my practical knowledge of React, UI design, and modern front-end
development practices.
</p>


   <button><Link to="/thankyou" className="w-full bg-blue-800 text-white font-bold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center px-2 py-3 mt-4">Go to Thank You Page</Link></button> 
       
     
    
</div>
    </div> 
    </>
  )
}

export default About
