import React, { useContext, useState } from "react";
import Logo from "../assets/logo2.png";
import { FaCartArrowDown } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import ResponsiveNav from "./ResponsiveNav";
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { ProductContext } from "../App";
const Navbar = ({onSearch}) => {
    const [showMenu, setShowMenu] =useState(false);
    const toggleMenu=()=>{
        setShowMenu(!showMenu);    
    }

    const searchData=(e)=>{
        onSearch(e.target.value);
        
    }
  return (
    <>
      <nav className="">
        <div className="h-16 border shadow-sm text-black flex justify-between items-center  ">
          <div className=" flex ml-6 gap-8 lg:ml-14 lg:gap-24">
            <img
              src={Logo}
              alt="Logo"
              className="lg:max-h-26 lg:ml-5 max-h-20 md:-m-4 -m-2 -ml-4 "
            />
            <ul className="hidden md:flex justify-center items-center md:text-md font-semibold  md:gap-6 gap-3 cursor-pointer ">
              <li className="hover:underline">
                <Link to='/'>Home</Link>
              </li>
              <li className="hover:underline">
                <Link to='/mens'>Mens</Link>
              </li>
              <li className="hover:underline">
                <Link to='/women'>Womens</Link>
              </li>
              <li className="hover:underline">
                <Link to='/electronic'>Electronic</Link>    
              </li>
            </ul>
          </div>

          <div className="flex item-center justify-center gap-2 mr-4 ">
      <div className=" max-w-[10rem]  items-center w-full md:max-w-[20rem] rounded-lg bg-gray-100 border border-gray-300 px-2 md:py-2 gap-1  flex justify-between">
      <input
        type="text"
        onChange={searchData}
        placeholder="What are you looking for?"
        className=" bg-gray-100 focus:outline-none text-gray-600 md:text-sm text-[9px]"
      />
      
      <IoSearch className="text-black" size={20} />
    </div>
            {/* <IoSearch className="md:hidden block" size={25} /> */}
            <Link to={`/cart`}>
            <FaCartArrowDown className="md:mt-1 mt-[2px] "  size={window.innerWidth >= 768 ? 25 : 22} />
            </Link>
            <Link to='/signup'>
            <button className="bg-black md:h-8 md:w-24 w-14 h-6 text-[8px] font-semibold  border-white rounded-lg pl-2 pr-2 md:ml-3 border-[1px] hover:bg-white hover:text-black hover:border-black items-center text-white">
              SignUp
            </button>
            </Link>
            {/* <FaUserCircle className='' size={25} /> */}
            <TiThMenu className="text-black md:hidden " size={25} onClick={toggleMenu}/>
          </div>
        </div>
        <div className="bg-black text-white relative max-h-8 hidden md:block">
            
          <FaUserCircle className='absolute top-0 right-0' size={25} /> 
        </div>
        <ResponsiveNav showMenu={showMenu} />
      </nav>
    </>
  );
};

export default Navbar;
