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
    <div className='md:bg-[url("/footer-image.svg")] bg-[url("/sm-footer.png")] bg-cover w-full md:h-[620px] py-10'>
      <div className='md:flex  justify-between  md:px-[100px] px-[20px] md:pt-20 pt-10'>
  {/* Left Section */}
  <div className='md:w-1/3 flex flex-col  md:gap-[60px] gap-[10px]'>
        <img className='md:w-[30%] w-[20%]' src="/logo-1.svg" alt="Logo" />
        <p className='md:text-[24px]  text-white'>
          Classes for homeschool, after<br />
          school, unschooling students
        </p>

        {/* Social Media Icons */}
        <div className='flex md:gap-4 gap-3 '>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='bg-white rounded-full md:w-[40px] md:h-[40px] w-[30px] h-[30px] md:p-2 p-1 flex justify-center items-center'>
            <TiSocialFacebook className='md:text-[35px] text-[20px] text-[#484A5C]' />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='bg-white rounded-full md:w-[40px] md:h-[40px] w-[30px] h-[30px] md:p-2 p-1 flex justify-center items-center'>
            <BsInstagram className='md:text-[35px] text-[20px] text-[#484A5C]' />
          </a>
          <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className='bg-white rounded-full md:w-[40px] md:h-[40px] w-[30px] h-[30px] md:p-2 p-1 flex justify-center items-center'>
            <FaWhatsapp className='md:text-[35px] text-[20px] text-[#484A5C]' />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className='bg-white rounded-full md:w-[40px] md:h-[40px] w-[30px] h-[30px] md:p-2 p-1 flex justify-center items-center'>
            <LuYoutube className='md:text-[35px] text-[20px] text-[#484A5C]' />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className='bg-white rounded-full md:w-[40px] md:h-[40px] w-[30px] h-[30px] md:p-2 p-1 flex justify-center items-center'>
            <FaXTwitter className='md:text-[35px] text-[20px] text-[#484A5C]' />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className='bg-white rounded-full md:w-[40px] md:h-[40px] w-[30px] h-[30px] md:p-2 p-1 flex justify-center items-center'>
            <FaLinkedinIn className='md:text-[35px] text-[20px] text-[#484A5C]' />
          </a>
        </div>
      </div>

      {/* Middle Section */}
      <div className=' flex flex-col md:mt-0  mt-[40px] md:gap-[20px] gap-[10px] md:mx-28 '>
        <h3 className='md:text-[24px] text-[22px] text-white text-left'>Links</h3>
        <div className='md:text-[20px] text-[16px] md:my-[10px] text-white flex flex-col md:gap-3 gap-1'>
          <span>Home</span>
          <span>P.E Courses</span>
          <span>Academic Courses</span>
          <span>Charter Schools</span>
          <span>Make Payment</span>
          <span>Contact Us</span>
        </div>
      </div>

      {/* Right Section */}
      <div className='md:w-1/3 flex flex-col md:mt-0  mt-[40px]  md:gap-[20px] gap-[10px]'>
        <h3 className='md:text-[24px] text-[22px] text-white'>Contact Us</h3>
        <div className='flex gap-3 items-center'>
          <MdOutlineMail className='text-white text-[24px]' />
          <span className='md:text-[18px] text-[16px] text-white'>YouthMovement.CA@gmail.com</span>
        </div>
        <div className='flex gap-3 items-center'>
          <MdPhoneInTalk className='text-white text-[24px]' />
          <span className='md:text-[18px] text-[16px] text-white'>(209) 483-9667</span>
        </div>
        <div className='flex gap-3 items-center'>
          <LuMapPin className='text-white text-[24px]' />
          <span className='md:text-[18px] text-[16px] text-white'>343 W. Viento St. Mountain House, CA 95391</span>
        </div>
      </div>
      </div>
      <div className='w-full h-[1px] mt-12 mb-8 bg-white'></div>
    <div className='md:px-[100px] pl-[15px]  md:text-[18px] text-[16px] pb-4 md:flex md:flex-row  flex-col justify-between text-white'>
      <span>Copyright & Branding Info: “©️ 2025 YOUTH MOVEMENT</span>
      <div className='md:mt-0 mt-3'>All Rights Reserved</div>
    </div>
    </div>
  )
}

export default Footer;