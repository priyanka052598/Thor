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
     Virtual Payment
        </span>
        
      </div>
      </div>
      </div>
      <div className=' mx-auto flex flex-col items-center justify-center gap-[50px] my-[100px]  '>
        <div className='border-[1px] w-[70%] mx-auto border-[#484A5C] border-b-[12px] gap-[80px] rounded-[16px] p-10'>
        <h2  style={{fontFamily: 'Clash Display', fontWeight: 500}} className='text-[32px]'>Please Include</h2>
        <div>
{
    ["Course Name","Session ID", "Name of students","Month the payment is for"].map((item,index) => (
        <p className='text-[20px]'>{ index + 1}. {item}</p>
    ))
}
        </div>
        </div>
       
      <div className='flex justify-center w-full   '>
<div className='flex flex-col w-[25%]  items-center justify-center gap-4'>
    <img src="/scan-image.png" alt="" />
    <h2 style={{fontFamily: 'Clash Display', fontWeight: 500}} className='text-[32px]'>Debit Card</h2>
    <p className='text-[20px]'>@youthmovementCA</p>
    <Button bgColor="bg-[#484A5C]" text="Pay using Debit card"/>
</div>
<div className='flex flex-col  w-[25%] items-center justify-center gap-4'>
    <img src="/paypal-image.svg" alt="" />
    <h2 style={{fontFamily: 'Clash Display', fontWeight: 500}} className='text-[32px]'>Paypal</h2>
    <p className='text-[20px]'>@youthmovementCA</p>
    <Button bgColor="bg-[#484A5C]" text="Pay using Paypal"/>
</div>
<div className='flex flex-col  w-[25%] items-center justify-center gap-4'>
    <img src="/venomo-image.png" alt="" />
    <h2 style={{fontFamily: 'Clash Display', fontWeight: 500}} className='text-[32px]'>Venomod</h2>
    <p className='text-[20px]'>@youthmovementCA</p>
    <Button bgColor="bg-[#484A5C]" text="Pay using Venomo"/>
</div>
      </div>
      </div>
     
      <Footer/>
    </div>
  )
}

export default VirtualPayment