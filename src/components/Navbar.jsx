import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross1 } from "react-icons/rx";
import { motion } from "motion/react";



function Navbar() {
  
  const location = useLocation();
  console.log(location.pathname)
  const arr = ["/","/gallery"]
  const [isOpen , setIsOpen] = useState(false)  // state for menu toggle
  return (
    <div className="h-[7vh] z-20 bg-white/20 text-[#212121] font-['Josefin_Sans'] backdrop-blur-[7px] text-xl pt-3 px-4 w-full fixed top-0 left-0 flex justify-between items-start">  
      {arr.includes(location.pathname) ?
        (<img
        src="/assets/logo.gif"
        className="md:h-[20vh] md:w-[20vh] h-[20vh] w-[40vw] rounded-full"
        alt="logo"/>
      ):
      (<div className="text-2xl font-bold bg-gradient-to-r from-[#ff9f1c] to-[#2ec4b6] bg-clip-text text-transparent tracking-widest">Box World</div>)}

      <div className="md:hidden z-[50] ">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`text-black focus:outline-none flex justify-center items-center gap-3 ${isOpen ? "text-white":""}`} 
        >
        <p className={`text-[1.3rem] pt-1 ${isOpen ? "text-white":"text-black" }`}>Menu</p>
          {isOpen ? <RxCross1 size={30} /> : <IoMenuOutline size={30} />}
        </button>
      </div>
      <ul className="hidden md:flex gap-14 text-black font-medium  ">
        <li>
          <NavLink to="/" style={{ textShadow: "1px 2px 1px black" }} className={({isActive})=>isActive ? "border-b-2 border-t-2 py-1 border-white text-white":"text-[#131313] tracking-wider "}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/gallery" style={{ textShadow: "1px 2px 1px grey" }} className={({isActive})=>isActive ? "border-b-2 border-t-2 py-1 border-black text-black tracking-wide font-bold":"text-white"}>Gallery</NavLink>
        </li>
        <li className="list-none px-3 py-1 -translate-y-2 flex justify-center items-center rounded-md bg-[#672C67] border-[2px] border-white shadow-md text-[#FBF5E5]">
          <NavLink to="/contactus" className={({isActive})=>isActive ? "border border-white px-1 ":""}>Contact US</NavLink>
        </li>
      </ul>

      {/* nav for mobile */}

      <motion.div
      initial={{x:"100%", opacity:0}}
      animate={{x: isOpen ? "0%": "100%", opacity: isOpen ? 1 : 0  }} 
      transition={{duration: 0.5 , ease: "easeInOut" }}
      className='nav absolute right-0 top-0 h-[100vh] w-[40vw] bg-[#e5b318]/90  rounded-l-[2rem] md:hidden'>
      <ul className="flex flex-col items-center gap-4 py-4 mt-[5rem] ">
          <li className="text-white font-semibold">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "border-b-2 border-t-2 pt-1 border-[black]" : ""
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li className="text-white font-semibold">
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive ? "border-b-2 border-t-2 pt-1 border-black" : ""
              }
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </NavLink>
          </li>
          <li className="list-none px-3 py-1 flex justify-center items-center rounded-md bg-yellow-700 border-[2px] border-white shadow-md text-[#FBF5E5]">
            <NavLink
              to="/contactus"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </NavLink>
          </li>
      </ul>
      </motion.div>
    </div>
    
  );
}

export default Navbar;
