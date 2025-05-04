import ContactUsComponent from '@/components/ContactUsComponent'
import Header from '@/components/Header'
import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { LuMapPin } from "react-icons/lu";
import { MdPhoneInTalk } from "react-icons/md";
import PopUp from '@/components/PopUp';




function ContactUs() {
  return (
    <div>
          <div className="relative w-full">
    {/* Background Image */}
    <img
      src="/contact-us-image.svg"
      alt="Background"
      className="w-full md:block hidden h-auto object-cover" 
    />
    <img
      src="/sm-contact-us.png"
      alt="Background"
      className="w-full md:hidden block h-auto object-cover" 
    />

    {/* Absolute Content over Image */}
    <div className="absolute inset-0">
      <Header /> 

      {/* Center Text */}
      <div className="flex flex-col items-center justify-center gap-[26px] md:pt-10 pt-5">
        <span
          className="md:text-[60px] text-[30px] text-white text-center leading-[1.4]"
          style={{
            fontFamily: 'Clash Display',
            fontWeight: 500
          }}
        >
     Contact Us
        </span>
        
      </div>
      </div>
      </div>

       <ContactUsComponent heading='Send your message.'/>

       <div className='md:flex md:flex-row flex-col md:mx-[100px] mx-[20px] md:mt-[100px]  md:h-[670px] overflow-hidden mb-[130px] border-[2px] border-[#484A5C] border-b-[12px] rounded-[24px]'>
  {/* Left Side */}
  <div className='flex flex-col gap-[25px] md:p-[50px] p-[15px] bg-[#F4E5FF] md:w-[50%]'>
    
    {/* Logo and Text */}
    <div className='flex flex-col md:gap-3'>
      <img className='md:w-[25%] w-[35%]' src="/logo-1.svg" alt="Logo" />
      <p className='md:text-[24px] text-[16px] font-medium'>
        Classes for homeschool, after school,<br />
        unschooling students
      </p>
    </div>

    {/* Email */}
    <div className='bg-white rounded-[10px] md:mt-8  mt-4 flex items-center'>
      <div className='bg-[#FF932F] p-2 md:p-3 rounded-l-[10px] flex items-center justify-center'>
        <MdOutlineMail className='text-white text-[18px] md:text-[38px]' />
      </div>
      <span className='pl-2 md:pl-5 text-[13px] md:text-[18px] py-[8px] md:py-3'>
        YouthMovement.CA@gmail.com
      </span>
    </div>

    {/* Phone */}
    <div className='bg-white rounded-[10px] flex items-center'>
      <div className='bg-[#387CFF] p-2 md:p-3 rounded-l-[10px] flex items-center justify-center'>
        <MdPhoneInTalk className='text-white text-[18px] md:text-[38px]' />
      </div>
      <span className='pl-2 md:pl-5 text-[13px] md:text-[18px] py-[8px] md:py-3'>
        (209) 483-9667
      </span>
    </div>

    {/* Location */}
    <div className='bg-white rounded-[10px] flex items-center'>
      <div className='bg-[#FF15AF] p-2 md:p-3 rounded-l-[10px] flex items-center justify-center'>
        <LuMapPin className='text-white text-[18px] md:text-[38px]' />
      </div>
      <span className='pl-2 md:pl-5 text-[13px] md:text-[18px] py-[8px] md:py-3'>
        343 W. Viento St. Mountain House, CA 95391
      </span>
    </div>

  </div>

  {/* Right Side Image */}
  <div
    className='relative md:w-[50%] h-full'
    style={{
      background: 'radial-gradient(circle, #D033EA 0%, #831994 100%)'
    }}
  >
    <img className='w-full h-full object-cover' src="/youth-movement-girl-image.svg" alt="Youth Movement" />
  </div>
</div>

       


       <div className='md:px-[100px] px-[20px] md:text-[18px]  text-[16px] bg-[#4177C7] py-7  md:flex md:flex-row flex-col justify-between text-white'>
      <div>Copyright & Branding Info: “©️ 2025 YOUTH MOVEMENT</div>
      <div className='md:pt-0 pt-3'>All Rights Reserved</div>
    </div>
    </div>
  )
}

export default ContactUs