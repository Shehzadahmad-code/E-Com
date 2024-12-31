import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';
const ResponsiveNav = ({showMenu}) => {
const NavbarHandler=()=>{
  showMenu(false)
};  
  return (
    <div  className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } smooth fixed bottom-0 top-0 z-20 flex h-screen w-[75%] flex-col justify-between bg-black text-white px-8 pb-6 pt-4 md:hidden rounded-r-xl shadow-md`}>
        <div className='top-0 space-y-6'>
            <div className='flex justify-start gap-3 items-center '>
                <FaUserCircle className='' size={30} />
                <div className='text-sm'>
                    <h1>Guest</h1>
                    <h1>premium</h1>
                </div>
            </div>
        <ul className="flex justify-start items-start gap-4 md:text-xl text-lg flex-col ">
        <li className="hover:underline">
                <Link to='/' onClick={NavbarHandler}>Home</Link>
              </li>
              <li className="hover:underline">
                <Link to='/mens' onClick={NavbarHandler}>Mens</Link>
              </li>
              <li className="hover:underline">
                <Link to='/women' onClick={NavbarHandler}>Womens</Link>
              </li>
              <li className="hover:underline">
                <Link to='/electronic' onClick={NavbarHandler}>Electronic</Link>    
              </li>   
        </ul> 
        </div>
    </div>
  )
}

export default ResponsiveNav
