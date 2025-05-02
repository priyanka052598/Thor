import React from 'react';
import { TiSocialFacebook } from "react-icons/ti";
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { LuYoutube } from "react-icons/lu";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMail, MdPhoneInTalk } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";



function Footer() {
  return (
    <div className='bg-[url("/footer-image.svg")] bg-cover h-[620px] py-10'>
      <div className='flex justify-between  px-[100px] pt-20'>
  {/* Left Section */}
  <div className='w-1/3 flex flex-col  gap-[60px]'>
        <img className='w-[30%]' src="/logo-1.svg" alt="Logo" />
        <p className='text-[24px] text-white'>
          Classes for homeschool, after<br />
          school, unschooling students
        </p>

        {/* Social Media Icons */}
        <div className='flex gap-4 '>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='bg-white rounded-full w-[40px] h-[40px] p-2 flex justify-center items-center'>
            <TiSocialFacebook className='text-[33px] text-[#484A5C]' />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='bg-white rounded-full w-[40px] h-[40px] p-2 flex justify-center items-center'>
            <BsInstagram className='text-[35px] text-[#484A5C]' />
          </a>
          <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className='bg-white rounded-full w-[40px] h-[40px] p-2 flex justify-center items-center'>
            <FaWhatsapp className='text-[35px] text-[#484A5C]' />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className='bg-white rounded-full w-[40px] h-[40px] p-2 flex justify-center items-center'>
            <LuYoutube className='text-[35px] text-[#484A5C]' />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className='bg-white rounded-full w-[40px] h-[40px] p-2 flex justify-center items-center'>
            <FaXTwitter className='text-[35px] text-[#484A5C]' />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className='bg-white rounded-full w-[40px] h-[40px] p-2 flex justify-center items-center'>
            <FaLinkedinIn className='text-[35px] text-[#484A5C]' />
          </a>
        </div>
      </div>

      {/* Middle Section */}
      <div className=' flex flex-col   gap-[20px] mx-28 '>
        <h3 className='text-[24px] text-white text-left'>Links</h3>
        <div className='text-[20px] my-[10px] text-white flex flex-col gap-3'>
          <span>Home</span>
          <span>P.E Courses</span>
          <span>Academic Courses</span>
          <span>Charter Schools</span>
          <span>Make Payment</span>
          <span>Contact Us</span>
        </div>
      </div>

      {/* Right Section */}
      <div className='w-1/3 flex flex-col gap-[30px]'>
        <h3 className='text-[24px] text-white'>Contact Us</h3>
        <div className='flex gap-3 items-center'>
          <MdOutlineMail className='text-white text-[24px]' />
          <span className='text-[18px] text-white'>YouthMovement.CA@gmail.com</span>
        </div>
        <div className='flex gap-3 items-center'>
          <MdPhoneInTalk className='text-white text-[24px]' />
          <span className='text-[18px] text-white'>(209) 483-9667</span>
        </div>
        <div className='flex gap-3 items-center'>
          <LuMapPin className='text-white text-[24px]' />
          <span className='text-[18px] text-white'>343 W. Viento St. Mountain House, CA 95391</span>
        </div>
      </div>
      </div>
      <div className='w-full h-[1px] mt-12 mb-8 bg-white'></div>
    <div className='px-[100px] text-[18px] pb-5 flex justify-between text-white'>
      <span>Copyright & Branding Info: “©️ 2025 YOUTH MOVEMENT</span>
      <span>All Rights Reserved</span>
    </div>
    </div>
  )
}

export default Footer;