import Button from '@/components/Button'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

import React from 'react'

function VirtualPayment() {


  return (
    <div>
        <div className="relative w-full">
    {/* Background Image */}
    <img
      src="/virtual-image.svg"
      alt="Background"
      className="w-full md:block hidden h-auto object-cover" 
    />
    <img
      src="/sm-virtual-payment.png"
      alt="Background"
      className="w-full md:hidden block h-auto object-cover" 
    />

    {/* Absolute Content over Image */}
    <div className="absolute inset-0">
       
      <Header /> 

      {/* Center Text */}
      <div className="flex flex-col items-center justify-center gap-[26px] md:pt-10 pt-20">
        <span
          className="md:text-[60px] text-[30px] text-white text-center leading-[1.4]"
          style={{
            fontFamily: 'Clash Display',
            fontWeight: 500
          }}
        >
     Virtual Payment
        </span>
        
      </div>
      </div>
      </div>
      <div className=' mx-auto flex flex-col items-center justify-center gap-[50px] my-[100px]  '>
        <div className='border-[1px] md:w-[70%] w-[90%] md:mx-auto mx-[20px] border-[#484A5C] border-b-[12px] gap-[80px] rounded-[16px] md:p-10 p-5'>
        <h2  style={{fontFamily: 'Clash Display', fontWeight: 500}} className='md:text-[32px] text-[24px]'>Please Include</h2>
        <div>
{
    ["Course Name","Session ID", "Name of students","Month the payment is for"].map((item,index) => (
        <p className='md:text-[20px] text-[16px]'>{ index + 1}. {item}</p>
    ))
}
        </div>
        </div>
       
      <div className='md:flex md:flex-row flex-col gap-[10px] justify-center items-center mx-[20px]  w-full   '>
<div className='flex flex-col md:w-[25%]  items-center justify-center md:gap-4 gap-2'>
    <img className='md:w-[83%] w-[80%]' src="/scan-image.png" alt="" />
    <h2 style={{fontFamily: 'Clash Display', fontWeight: 500}} className='md:text-[32px] text-[24px]'>Debit Card</h2>
    <p className='md:text-[20px] text-[16px]'>@youthmovementCA</p>
    <Button bgColor="bg-[#484A5C]" text="Pay using Debit card"/>
</div>
<div className='flex flex-col md:w-[25%] md:mt-0 mt-20 items-center justify-center gap-4'>
    <img className='md:w-[83%] w-[80%]' src="/paypal-image.svg" alt="" />
    <h2 style={{fontFamily: 'Clash Display', fontWeight: 500}} className='md:text-[32px] text-[24px]'>Paypal</h2>
    <p className='md:text-[20px] text-[16px]'>@youthmovementCA</p>
    <Button bgColor="bg-[#484A5C]" text="Pay using Paypal"/>
</div>
<div className='flex flex-col md:w-[25%] md:mt-0 mt-20 items-center justify-center gap-4'>
    <img  className='md:w-[83%] w-[80%]' src="/venomo-image.png" alt="" />
    <h2 style={{fontFamily: 'Clash Display', fontWeight: 500}} className='md:text-[32px] text-[24px]'>Venomod</h2>
    <p className='md:text-[20px] text-[16px]'>@youthmovementCA</p>
    <Button bgColor="bg-[#484A5C]" text="Pay using Venomo"/>
</div>
      </div>
      </div>
     
      <Footer/>
    </div>
  )
}

export default VirtualPayment