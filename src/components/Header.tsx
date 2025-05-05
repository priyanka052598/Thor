import React, { useEffect, useState } from 'react';
import { FaRegCircleUser } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import Button from './Button';



function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

 

  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);


  const tabs = [
    { name: 'Home', paths: ['/'] },
    { name: 'P.E Courses', paths: ['/pe-courses', '/Pe-Courses-session-screen', '/Checkout-charter-school-first-student','/payment-screen'] },
    { name: 'Academic Courses', paths: ['/academic-courses'] },
    { name: 'Charter Schools', paths: ['/charter-schools'] },
    { name: 'Make payment', paths: ['/virtual-payment'] },
    { name: 'Contact Us', paths: ['/contact-us'] },
  ];

  const isActive = (paths: string[]) => paths.includes(location.pathname);
console.log("location.pathname",location.pathname,isActive)
  return (
    <div className="flex justify-between md:mx-[80px] items-center md:px-6 md:py-4 relative z-50
                    bg-transparent md:bg-transparent ">
      {/* Logo */}
      <Link to={'/'} className='md:block hidden '>
        <img className="w-[75px]" src="/logo-1.svg" alt="Logo" />
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex ">
        <ul className="flex gap-6">
          {tabs.map(tab => 
          
           {
            
console.log("isActive(tab.paths)",isActive(tab.paths))
            
            return<li key={tab.name}>
              <Link
                to={tab.paths[0]}
                className={`text-[18px] px-3 ${
                  isActive(tab.paths) ? 'border-b-2 pb-1' : ''
                } text-black md:text-white`}
              >
                {tab.name}
              </Link>
            </li>}
          )}
        </ul>
      </nav>
      <div className=' hidden w-full h-10 bg-white '></div>

      {/* Profile (desktop only) */}
      <div className="hidden md:flex gap-2 items-center text-black md:text-white relative">
  <div
    onClick={() => setProfileDropdownOpen(prev => !prev)}
    className="flex items-center gap-2 cursor-pointer"
  >
    <FaRegCircleUser className="text-[28px]" />
    <IoIosArrowDown className="text-[18px]" />
  </div>

  {profileDropdownOpen && (
    <div className="absolute top-10 right-0 mt-2 bg-white text-black rounded-md shadow-md py-2 w-[150px] z-50">
      <div
        // to="/dashboard"
        className="block px-4 py-2 hover:bg-gray-100"
        onClick={() => setProfileDropdownOpen(false)}
      >
        Dashboard
      </div>
      <div
        // to="/login"
        className="block px-4 py-2 hover:bg-gray-100"
        onClick={() => setProfileDropdownOpen(false)}
      >
        Login
      </div>
    </div>
  )}
</div>


      {/* Hamburger icon (mobile only) */}
     <div className=' md:hidden flex justify-between items-center px-4 w-full  h-[60px] bg-white '>
 <Link to={'/'}>
 <img className="w-[50px]" src="/logo-1.svg" alt="Logo" />

 </Link>

     <button
        className="md:hidden bg-[#6D718A] rounded-full p-[5px] text-white text-2xl"
        onClick={() => setSidebarOpen(true)}
      >
        <HiOutlineMenu />
      </button>
     </div>
     

      {/* Sidebar */}
      {sidebarOpen && (
        <div className="fixed top-0 right-0 h-full w-2/3  bg-white text-black shadow-lg z-50 p-6 transition-all duration-300">
          {/* Close button */}
          <div className="flex justify-end pb-4   items-center">
            <button onClick={() => setSidebarOpen(false)} className="text-3xl">
              <HiOutlineX />
            </button>
          </div>
          <div className='flex flex-col gap-[10px] justify-center items-center'>
          <FaRegCircleUser className="text-[85px]" />
  <Button text="Login" textColor="text-white" bgColor="bg-[#484A5C]"/>

         
          </div>

          {/* Nav links */}
          <nav className="mt-6">
            <ul className="flex flex-col space-y-3">
              {tabs.map(tab => (
                <li key={tab.name}>
                  <Link
                    to={tab.paths[0]}
                    className={`block text-[17px] ${
                      isActive(tab.paths) ? 'text-[#1B69FF]' : ''
                    }`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    {tab.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

    
        </div>
      )}
    </div>
  );
}

export default Header;
