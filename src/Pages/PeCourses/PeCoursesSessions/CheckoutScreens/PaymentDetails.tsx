import Header from '@/components/Header'
import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa6';
import { useLocation, useNavigate } from 'react-router-dom';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ChevronDown } from 'lucide-react';
import { FaCreditCard } from "react-icons/fa";
import { Button as Btn } from "@/components/ui/button"
import { Button } from '@/components/ui/button';


const RequestSubmittedPopUp = ({  onClose,navigate }: {  onClose: () => void,navigate:any }) => {

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-[2px] bg-opacity- flex justify-center items-center z-50">
      <div className="bg-white  rounded-[16px] overflow-hidden w-[400px] flex flex-col items-center gap-4">
      <div className="relative w-fit">
  <img className="w-full" src="/request-submitted-image.png" alt="" />

  <h3 style={{ fontFamily: 'Clash Display', fontWeight: 500 }} className="absolute inset-0 flex justify-center pt-10 text-white text-[26px] font-semibold z-10">
    You're all set for Class!
  </h3>
</div>

        <p className="text-[16px] leading-[1.4] px-8 text-center"> We're excited to have you in the session. You can check the status of your request anytime by visiting your profile.</p>
     <div className='w-full flex justify-center items-center gap-4 mt-6  px-8 pb-10 '>
      <Btn   className='bg-[#484A5C] text-white  border-[1px] py-5 w-full cursor-pointer ' onClick={()=>{navigate("/")}}>Okay</Btn>
     </div>

      </div>
    </div>
  )
}


function PaymentDetails() {
    const {from} = useLocation().state || {from: ""};
    const [selectedMethod, setSelectedMethod] = useState('');
const navigate = useNavigate();

const [showPopup, setShowPopup] = useState(false);


  return (
    <div>  
         <div className="relative w-full">
    {/* Background Image */}
    <img
      src="/Pe-courses-main-image-2.svg"
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
     Checkout
        </span>
        
      </div>
      </div>
      </div>
      
          {/* for charter student */}
          { from == "Charter" &&   <div className="progress flex flex-col justify-center items-center my-8 w-[50%] mx-auto">
              <div className='flex justify-center items-center'>
                <div className='w-10 h-10 border-[2px] border-[#1B69FF]  bg-[#1B69FF] rounded-full flex justify-center items-center'>
                <FaCheck className='text-white bg-[#1B69FF] text-[25px] '/>
      
                </div>
      <div className='w-[380px] h-[1px] bg-[#1B69FF]'/>
      <div className='w-10 h-10 border-[2px] border-[#1B69FF] rounded-full flex justify-center items-center'/>
              </div>
              <div className=' w-[95%] flex justify-between items-center'><p className='text-[20px] text-[#1B69FF]'>
              Select Membership</p> <p className='text-[20px] text-[#484A5C]'>Fill Student Details</p></div>
              </div>}
              {/* for independent students */}
           { from == "Independent" &&   <div className="progress flex flex-col justify-center items-center my-8 w-[50%] mx-auto">
              <div className='flex justify-center items-center'>
                <div className='w-10 h-10 border-[2px] border-[#1B69FF]  bg-[#1B69FF] rounded-full flex justify-center items-center'>
                <FaCheck className='text-white bg-[#1B69FF] text-[25px] '/>
      
                </div>
      <div className='w-[200px] h-[1px] bg-[#1B69FF]'/>
      <div className='w-10 h-10 border-[2px] border-[#1B69FF]  bg-[#1B69FF] rounded-full flex justify-center items-center'>
                <FaCheck className='text-white bg-[#1B69FF] text-[25px] '/>
      
                </div>      <div className='w-[200px] h-[1px] bg-[#1B69FF]'/>
      
      <div className='w-10 h-10 border-[2px] border-[#1B69FF] rounded-full flex justify-center items-center'/>
              </div>
              <div className=' w-[100%] flex justify-between items-center'>
                <p className='text-[20px] text-[#1B69FF]'>
              Select Membership</p>
               <p className='text-[20px] text-[#484A5C]'>Fill Student Details</p>
               <p className='text-[20px] text-[#484A5C]'>Payment Details</p>
               </div>
              </div>
            }
            <div className='flex gap-[40px] mx-[110px] my-[80px]'>
            <div className='flex w-3/5 flex-col gap-[40px] '>
            <Accordion type="single" collapsible className="px-5 py-[4px] border-[1px] border-[#484A5C] border-b-[12px] rounded-[16px]">
      <AccordionItem value="payment">
        <AccordionTrigger
          style={{ fontFamily: 'Clash Display', fontWeight: 500 }}
          className="text-[32px] hover:no-underline  flex justify-between items-center group"
        >
          <span>Mode of Payment</span>
          <ChevronDown className="h-8 w-8 transition-transform duration-300 group-data-[state=open]:rotate-180" />
        </AccordionTrigger>

        <AccordionContent>
          <div className='flex flex-col gap-[20px]'>
          <Accordion
            type="single"
            collapsible
            value={selectedMethod}
            onValueChange={setSelectedMethod}
            className="w-full  border-[1px] px-[25px] rounded-[16px] border-[#808080]"
          >
            <AccordionItem value="debit">
              <AccordionTrigger
                onClick={() => setSelectedMethod('debit')}
                style={{ fontFamily: 'Clash Display', fontWeight: 500 }}
                className="text-[24px] flex justify-between  hover:no-underline items-center group"
              >
                <div className="flex items-center gap-4">
                  <input
                    type="radio"
                    checked={selectedMethod === 'debit'}
                    onChange={() => setSelectedMethod('debit')}
                    className="w-5 h-5 accent-black"
                  />
                  <span>Debit Card</span>
                </div>
                {/* <FaCreditCard className="h-6 w-6 text-[#484A5C]" />    */}
                <img className='w-8' src="/debit-card-icon.svg" alt="" />
                           </AccordionTrigger>

              <AccordionContent>
                <div className='border-[1px] p-6 rounded-[16px] w-full border-[#808080] flex gap-[25px]'>
                  <img className='w-[140px] h-full object-cover' src="/scan-image.png" alt="" />
                  <div className='w-[1px] h-full bg-[#808080]' />
                  <div className='flex flex-col gap-[15px]'>
                    <span style={{ fontFamily: 'Clash Display', fontWeight: 500 }} className='text-[22px]'>Debit Card</span>
                    <span className='text-[18px]'>@youthmovementCA</span>
                    <Button text='Pay using Debit card' bgColor='bg-[#484A5C]' textColor='text-white' textSize='text-[16px]' />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion
            type="single"
            collapsible
            value={selectedMethod}
            onValueChange={setSelectedMethod}
            className="w-full border-[1px] px-[25px] rounded-[16px] border-[#808080]"
          >
            <AccordionItem value="paypal">
              <AccordionTrigger
                onClick={() => setSelectedMethod('debit')}
                style={{ fontFamily: 'Clash Display', fontWeight: 500 }}
                className="text-[24px] flex justify-between  hover:no-underline items-center group"
              >
                <div className="flex items-center gap-4">
                  <input
                    type="radio"
                    checked={selectedMethod === 'paypal'}
                    onChange={() => setSelectedMethod('paypal')}
                    className="w-5 h-5 accent-black"
                  />
                  <span>Paypal</span>
                </div>
                {/* <FaCreditCard className="h-6 w-6 text-[#484A5C]" />    */}
                <img className='w-8' src="/paypal-icon.svg" alt="" />
                           </AccordionTrigger>

              <AccordionContent className=''>
                <div className='flex flex-col'>
                <div className='border-[1px] p-6 rounded-[16px] w-full border-[#808080] flex gap-[25px]'>
                  <img className='w-[140px] h-full object-cover' src="/scan-image.png" alt="" />
                  <div className='w-[1px] h-full bg-[#808080]' />
                  <div className='flex flex-col gap-[15px]'>
                    <span style={{ fontFamily: 'Clash Display', fontWeight: 500 }} className='text-[22px]'>Ryan DeRoche</span>
                    <span className='text-[18px]'>@youthmovementCA</span>
                    <Button text='Pay using PayPal' bgColor='bg-[#484A5C]' textColor='text-white' textSize='text-[16px]' />
                  </div>
                </div>

                <div className='  gap-[80px] rounded-[16px]  py-5'>
        <h2  style={{fontFamily: 'Clash Display', fontWeight: 500}} className='text-[24px]'>Please Include</h2>
        <div>
{
    ["Course Name","Session ID", "Name of students","Month the payment is for"].map((item,index) => (
        <p className='text-[17px]'>{ index + 1}. {item}</p>
    ))
}
        </div>
        </div>
                </div>
              
           
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion
            type="single"
            collapsible
            value={selectedMethod}
            onValueChange={setSelectedMethod}
            className="w-full border-[1px] px-[25px] rounded-[16px] border-[#808080]"
          >
            <AccordionItem value="venomo">
              <AccordionTrigger
                onClick={() => setSelectedMethod('venomo')}
                style={{ fontFamily: 'Clash Display', fontWeight: 500 }}
                className="text-[24px] flex justify-between  hover:no-underline items-center group"
              >
                <div className="flex items-center gap-4">
                  <input
                    type="radio"
                    checked={selectedMethod === 'venomo'}
                    onChange={() => setSelectedMethod('venomo')}
                    className="w-5 h-5 accent-black"
                  />
                  <span>Venomo</span>
                </div>
                {/* <FaCreditCard className="h-6 w-6 text-[#484A5C]" />    */}
                <img className='w-8' src="/venono-icon.svg" alt="" />
                           </AccordionTrigger>

              <AccordionContent>
                <div className='flex flex-col'>
                <div className='border-[1px] p-6 rounded-[16px] w-full border-[#808080] flex gap-[25px]'>
                  <img className='w-[140px] h-full object-cover' src="/scan-image.png" alt="" />
                  <div className='w-[1px] h-full bg-[#808080]' />
                  <div className='flex flex-col gap-[15px]'>
                    <span style={{ fontFamily: 'Clash Display', fontWeight: 500 }} className='text-[22px]'>Venomo</span>
                    <span className='text-[18px]'>@youthmovementCA</span>
                    <Button text='Pay using Debit card' bgColor='bg-[#484A5C]' textColor='text-white' textSize='text-[16px]' />
                  </div>
                </div>
                <div className='  gap-[80px] rounded-[16px]  py-5'>
        <h2  style={{fontFamily: 'Clash Display', fontWeight: 500}} className='text-[24px]'>Please Include</h2>
        <div>
{
    ["Course Name","Session ID", "Name of students","Month the payment is for"].map((item,index) => (
        <p className='text-[17px]'>{ index + 1}. {item}</p>
    ))
}
        </div>
        </div>
                </div>
               
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          </div>
         
        </AccordionContent>
      </AccordionItem>
    </Accordion>
      </div>
      <div className='w-2/5 h-min overflow-hidden  border-[1px] border-[#484A5C] border-b-[12px]  rounded-[16px]'>
<img className='w-full' src="/order-summary-image.svg" alt="" />
<div className='p-[40px] flex flex-col gap-[24px]'>
  <div className='bg-[#F4E5FF] flex flex-col gap-[8px] p-[24px] rounded-[16px]'>
    <div className='flex justify-between items-center text-[20px] '><span>Cost for First student</span> <span>63$</span></div>
    <div className='flex justify-between items-center text-[20px] '><span>Cost for  Sibling</span> <span>63$</span></div>
  </div>
  <div className='flex justify-between items-center text-[20px] '><span>Mohit Asnani</span> <span>63$</span></div>
  <div className='w-full h-[1px] bg-[#808080]'/>
  <div className='flex justify-between items-center text-[20px] '><span>Grand total</span> <span>63$</span></div>




</div>
        </div>


            </div>
            <div className='my-5 flex flex-col mt-[150px] gap-4'>
        <div className='  w-full h-[1px] bg-[#808080]'/>
        <div  className='flex gap-[10px] text-[18px] justify-end  mr-[100px]' >
        <Button onClick={() => navigate(-1)} className='px-6 py-4 cursor-pointer' variant="outline">Back</Button>     
        {from=="Independent" &&
         <Button     
         onClick={() => setShowPopup(true)}       
 className='bg-[#484A5C] text-white px-6 py-5 coursor-pointer'>Proceed to payment</Button>}
        {from=="Charter" && <Button  onClick={() => setShowPopup(true)} className='bg-[#484A5C] text-white px-6 py-5 cursor-pointer'>Enroll In the Class</Button>}
        {/* when Proceed to paayment -checkout component */}
       
        </div>
        {showPopup && <RequestSubmittedPopUp     navigate={navigate} 
  onClose={() => setShowPopup(false)} />}


      </div>
            </div>
  )
}

export default PaymentDetails