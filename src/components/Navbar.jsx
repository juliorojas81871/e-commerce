import React from 'react'
import {IoMdCart} from 'react-icons/io'

const Navbar = () => {
  return (
    <nav className='w-full flex justify-center'>
      <div className='lg:w-3/6 w-11/12 flex items-center justify-between'>
        <a href="/" className='underline' >Home</a>
        <a href="/" className='underline'>Products</a>
        <img src="images/logo.png" className='w-28' alt="" />
        <a href='/' className='underline'>Collections</a>
        <IoMdCart size={'1.5rem'}/>
      </div>
    </nav>
  )
}

export default Navbar
