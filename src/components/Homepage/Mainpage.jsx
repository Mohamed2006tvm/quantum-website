import React from 'react'

const Mainpage = () => {
  return (
    <div className='flex text-center flex-col items-center justify-center text-white space-y-6 sm:my-[200px] my-[70px] md:w-[800px] sm:w-[90%] w-[90%] mx-auto '>
        <p className='sm:text-[22px] text-[15px] text-[#04afdf]'>Digital Transformation Simplified</p>
        <h1 className='sm:text-[100px] text-[50px] text-[#5FA5F9] font-bold'>QuantumBAY</h1>
        <p className='sm:text-4xl text-xl pb-[20px]'>Your Complete digital transformation partner</p>
        <p className='sm:text-xl text-md text-gray-500 sm:pb-[40px]'>Empowering India's digital transformation through technology solutions for everyone—from individual freelancers to large corporates.</p>
        <button className='px-[40px] py-[20px] bg-[#1198DC] rounded-[12px] hover:rounded-[30px] transition-all duration-200'>Explore Our Services</button>
    </div>
  )
}

export default Mainpage