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
      className="w-full h-auto object-cover" 
    />

    {/* Absolute Content over Image */}
    <div className="absolute inset-0">
      <Header /> 

      {/* Center Text */}
      <div className="flex flex-col items-center justify-center gap-[26px] pt-10">
        <span
          className="text-[60px] text-white text-center leading-[1.4]"
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

       <div className='flex mx-[100px]  mt-[100px] h-[670px] overflow-hidden mb-[130px] border-[2px] border-[#484A5C] border-b-[12px] rounded-[24px]'>
        <div className='flex flex-col gap-[25px] p-[50px] bg-[#F4E5FF] w-[50%]'>
            <div className='flex flex-col gap-3'>
            <img className='w-[25%]' src="/logo-1.svg" alt="" />
            <p className='text-[24px] font-medium'>Classes for homeschool, after school,<br/> unschooling students</p>
            </div>
            <div className='bg-white rounded-[10px] mt-8  flex justify-start items-center'>
  <div className='bg-[#FF932F] p-3 rounded-l-[10px] rounded-r-none flex items-center justify-center'>
    <MdOutlineMail className='text-white' size={38} />
  </div>
  <span className='pl-5 text-[18px] py-3'>YouthMovement.CA@gmail.com</span>
</div>
            <div className='bg-white rounded-[10px]  flex justify-start items-center'>
  <div className='bg-[#387CFF] p-3 rounded-l-[10px] rounded-r-none flex items-center justify-center'>
    <MdPhoneInTalk className='text-white' size={38} />
  </div>
  <span className='pl-5 text-[18px] py-3'>(209) 483-9667</span>
</div>
            <div className='bg-white rounded-[10px]  flex justify-start items-center'>
  <div className='bg-[#FF15AF] p-3 rounded-l-[10px] rounded-r-none flex items-center justify-center'>
    <LuMapPin className='text-white' size={38} />
  </div>
  <span className='pl-5 text-[18px] py-3'>343 W. Viento St. Mountain House, CA 95391</span>
</div>

     
        </div>
        <div 
  className='relative w-[50%] h-full' 
  style={{
    background: 'radial-gradient(circle, #D033EA 0%, #831994 100%)'
  }}
>
  <img className='w-full h-full object-cover' src="/youth-movement-girl-image.svg" alt="" />
</div>


      </div>
       


       <div className='px-[100px] text-[18px]  bg-[#4177C7] py-7 flex justify-between text-white'>
      <span>Copyright & Branding Info: “©️ 2025 YOUTH MOVEMENT</span>
      <span>All Rights Reserved</span>
    </div>
    </div>
  )
}

export default ContactUs