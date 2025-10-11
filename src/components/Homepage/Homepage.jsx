import React from 'react'
import Intro from '../Logo'
import { Navbar } from './Navbar'
import Mainpage from './Mainpage'

const Homepage = () => {
  return (
    <div className='bg-[#081D32] h-screen flex flex-col items-center justify-start'>
      <Navbar/>
      <Mainpage/>
    </div>
  )
}

export default Homepage