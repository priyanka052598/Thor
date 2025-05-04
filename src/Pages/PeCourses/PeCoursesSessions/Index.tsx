import React, { useState } from 'react'
import Header from '@/components/Header'
import Button from '@/components/Button'
import CommonHeading from '@/components/CommonHeading'
import ProfileUi from '@/components/ProfileUi'
import Footer from '@/components/Footer'
import CircularGraph from '@/components/CircularGraph'
import Chart from '@/components/ui/Chart'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button as Btn } from "@/components/ui/button"


const EnrollModal = ({  onClose }: {  onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-[2px] bg-opacity- flex justify-center items-center z-50">
      <div className="bg-white  rounded-[16px] overflow-hidden w-[400px] flex flex-col items-center gap-4">
        <img className='' src="/please-login-first.svg" alt="" />
        <p className="text-[16px] leading-[1.4] px-8 text-center">To enroll your child in the session, please log in to your account. Logging in helps to ensures a smooth registration process.</p>
     <div className='w-full flex justify-center items-center gap-4 mt-6 mx-auto'>
      <Btn  className='border-black border-[1px] w-[40%] py-5' onClick={onClose}>Cancel</Btn>
      <Btn  className='bg-[#484A5C] text-white w-[40%] border-[1px] py-5' onClick={onClose}>Login</Btn>
     </div>
     <div className='flex w-full justify-center items-center gap-4'>
      <div className='w-[30%] h-[1px] bg-[#484A5C]'/>
      <span>New User</span>
      <div className='w-[30%] h-[1px] bg-[#484A5C]'/>
     </div>
     <div className='pb-6'>
     Don’t Have an account?<span className='text-[#1B69FF]'>Sign Up </span> 
     </div>
      </div>
    </div>
  )
}


function PeCoursesSessions( ) {
  const {course} = useLocation().state
  let mode = course?.mode
  const navigate = useNavigate();

  const[tabs,setTabs] = useState('Monthly')
  let data=["Monthly","Workshop","Session", "Semester"]

  const [isModalOpen, setIsModalOpen] = useState(false);


  console.log("mode",mode)
  console.log("course",course);
  const handleTabClick = (item:string)=>{
setTabs(item)
  }
  return (
    <div>  

        <div className="relative w-full">
    {/* Background Image */}
    <img
      src="/Pe-courses-main-image-2.svg"
      alt="Background"
      className="w-full md:block hidden h-auto object-cover" 
    />
    <img
      src="/sm-pe-courses-image-2.png"
      alt="Background"
      className="w-full md:hidden h-auto object-cover" 
    />

    {/* Absolute Content over Image */}
    <div className="absolute inset-0">
      <Header /> 

      {/* Center Text */}
      <div className="flex flex-col items-center justify-center gap-[26px] pt-10">
        <span
          className="md:text-[60px] text-[30px] text-white text-center leading-[1.4]"
          style={{
            fontFamily: 'Clash Display',
            fontWeight: 500
          }}
        >
     Table Tennis
        </span>
        
      </div>
      </div>
      </div>
      {/* Tabs */}
<div className='flex  md:mx-[120px] mx-[10px] md:my-[120px] my-[40px]   md:gap-[20px] gap-[5px]' >

      {
        data?.map((item,index)=>{
          return <div onClick={()=>{
            handleTabClick(item)
          }}>
            <h1 className={`md:text-[20px] text-[11px] font-semibold md:px-[24px] px-[12px] md:py-[12px] py-[6px]  rounded-[8px] border-[1px] border-[#484A5C] cursor-pointer ${tabs===item && "bg-[#484A5C] text-white"}`}>
            {item}

            </h1>
          </div>
        })
      }
</div>

      {/* Table part */}
<div className='md:mx-[110px] mx-[20px] md:my-[120px] my-[60px] md:flex flex-col md:flex-row  gap-[80px] '>
<div className=" md:w-3/5">
  <h1 className="md:text-[28px] text-[20px] font-bold mb-6">Session ID - #0101</h1>
  
  <table className="w-full border md:text-[20px] text-[16px] border-gray-300">
    <tbody>
      {/* Row 1 */}
      <tr className="border-b border-gray-300">
        <td className="bg-[#f0f0f0] p-3 fomt-normal text-gray-600">Instructor Name</td>
        <td className="p-3">Tommie Sykes</td>
      </tr>

      { mode !== "Online" &&

      <>
      {/* Row 2 */}
      <tr className="border-b border-gray-300">
        <td className="bg-[#f0f0f0] p-3 fomt-normal text-gray-600">Location</td>
        <td className="p-3">City Park</td>
      </tr>
      
      {/* Row 3 */}
      <tr className="border-b border-gray-300">
        <td className="bg-[#f0f0f0] p-3 fomt-normal text-gray-600">Address</td>
        <td className="p-3">
          <a href="https://maps.google.com/?q=1001 Cambridge Pl, Tracy, CA 95377" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
            1001 Cambridge Pl, Tracy, CA 95377
          </a>
        </td>
      </tr>
      </>

      }
      
      {/* Row 4 */}
      <tr className="border-b border-gray-300">
        <td className="bg-[#f0f0f0] p-3 fomt-normal text-gray-600">Days</td>
        <td className="p-3">Mondays, Fridays</td>
      </tr>
      
      {/* Row 5 */}
      <tr className="border-b border-gray-300">
        <td className="bg-[#f0f0f0] p-3 fomt-normal text-gray-600">Duration</td>
        <td className="p-3">60 mins</td>
      </tr>

      {/* Row 6 */}
      <tr className="border-b border-gray-300">
        <td className="bg-[#f0f0f0] p-3 fomt-normal text-gray-600">Timing</td>
        <td className="p-3">10:00 a.m - 11:00 a.m</td>
      </tr>

      {/* Row 7 */}
      <tr>
        <td className="bg-[#f0f0f0] p-3 fomt-normal text-gray-600">Session Period</td>
        <td className="p-3">Monthly</td>
      </tr>
    </tbody>
  </table>
</div>
 {/* Map View Part */}
 {
   mode !== "Online" ? (   <div className="md:w-2/5 md:mt-0 mt-[40px]">
    <iframe
      src="https://www.google.com/maps?q=1001+Cambridge+Pl,+Tracy,+CA+95377&output=embed"
      width="100%"
      height="450"
      style={{ border: 0, borderRadius: '20px' }}
      
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div> 

   ) : (
    <div className='md:w-2/5 md:mt-0 mt-[40px]'>
  <img
      src="online-class-image.png" // <-- Replace with your actual image path
      alt="Online session"
      className="w-full md:h-[450px] h-[300px] object-cover rounded-[20px]"
    />
    </div>
  
  )
 
 }
 
</div>
  <div className='text-center text-[20px]'>Enroll when user not login, remover after intergation </div>
  {/* cards */}
  
      { tabs!== "Session" && <div className='md:flex flex-col md:flex-row mx-[20px]   items-center my-[120px] justify-center gap-[70px]'>
      <div className='border-[1px] md:w-[40%] overflow-hidden border-[#484A5C] border-b-[12px] rounded-[24px]'>

  {/* Heading with image background */}
  <div className="relative w-full md:h-[320px] h-[220px] flex md:items-center justify-center overflow-hidden">
    <img
      src="/cloud-blue.svg"
      alt=""
      className="absolute md:block hidden inset-0 w-full h-full object-cover"
    />
    <img
      src="/sm-cloud-blue.png"
      alt=""
      className="absolute  md:hidden block inset-0  w-full h-[220px] object-cover"
    />
    <h2 style={{ fontFamily: 'Clash Display', fontWeight: 500 }} className='relative md:mt-0 mt-12  md:text-[50px] text-[28px] text-center  text-white z-10 '>Charter School’s Student</h2>
  </div>

  {/* Below normal content */}
  <div className='md:p-[30px]  bg-white'>
    <div className='flex justify-center items-center md:gap-[30px] gap-[2px] pb-5'>
      <div className='flex flex-col justify-center items-center gap-2'>
        <h4 className='md:text-[20px] text-[18px]'>First Student</h4>
        <span style={{ fontFamily: 'Clash Display', fontWeight: 500 }} className='md:text-[50px] text-[28px]'>63 $</span>
        <Button   onClick={() => {
    setIsModalOpen(true);
  }}  text='Enroll Now' bgColor='bg-[#484A5C]' textColor='text-white' />
      </div>
      <div className='w-[0.8px] md:h-[200px] h-[130px] bg-[#484A5C]'></div>
      <div className='flex flex-col justify-center items-center gap-2'>
        <h4 className='md:text-[20px] text-[17px]'>Sibling Student</h4>
        <span style={{ fontFamily: 'Clash Display', fontWeight: 500 }} className='md:text-[50px] text-[28px]'>63 $</span>
        <Button 
        onClick={()=>{
          navigate("/Checkout-charter-school-first-student", {
            state: {
              from: "Charter"
            },
          })
        }}
          text='Enroll Now' bgColor='bg-[#484A5C]' textColor='text-white' />
      </div>
    </div>

    <div className='h-[1px] w-[90%] mx-auto bg-[#484A5C]'></div>
    <p className='text-center md:text-[20px] text-[16px] py-4'>Sibling Discount is only available for siblings currently Signed-Up</p>
  </div>

</div>
      <div className='border-[1px] md:w-[40%] md:mt-0 mt-[40px] overflow-hidden border-[#484A5C] border-b-[12px] rounded-[24px]'>

  {/* Heading with image background */}
  <div className="relative w-full md:h-[320px] h-[220px] flex md:items-center justify-center overflow-hidden">
    <img
      src="/cloud-orange.svg"
      alt=""
      className="absolute md:block hidden inset-0 w-full h-full object-cover"
    />
    <img
      src="/sm-cloud-orange.png"
      alt=""
      className="absolute  md:hidden block inset-0  w-full h-[220px] object-cover"
    />
    <h2 style={{ fontFamily: 'Clash Display', fontWeight: 500 }} className='relative md:mt-0 mt-12  md:text-[50px] text-[28px] text-center  text-white z-10 '>Independent Student</h2>
  </div>

  {/* Below normal content */}
  <div className='md:p-[30px]  bg-white'>
    <div className='flex justify-center items-center md:gap-[30px] gap-[2px] pb-5'>
      <div className='flex flex-col justify-center items-center gap-2'>
        <h4 className='md:text-[20px] text-[18px]'>First Student</h4>
        <span style={{ fontFamily: 'Clash Display', fontWeight: 500 }} className='md:text-[50px] text-[28px]'>63 $</span>
        <Button  onClick={()=>{
        navigate("/Checkout-charter-school-first-student", {
          state: {
            from: "Independent"
          },
        })
        }}   text='Enroll Now' bgColor='bg-[#484A5C]' textColor='text-white' />
      </div>
      <div className='w-[0.8px] md:h-[200px] h-[130px] bg-[#484A5C]'></div>
      <div className='flex flex-col justify-center items-center gap-2'>
        <h4 className='md:text-[20px] text-[17px]'>Sibling Student</h4>
        <span style={{ fontFamily: 'Clash Display', fontWeight: 500 }} className='md:text-[50px] text-[28px]'>63 $</span>
        <Button 
        onClick={()=>{
          navigate("/Checkout-charter-school-first-student", {
            state: {
              from: "Independent"
            },
          })
        }}
          text='Enroll Now' bgColor='bg-[#484A5C]' textColor='text-white' />
      </div>
    </div>

    <div className='h-[1px] w-[90%] mx-auto bg-[#484A5C]'></div>
    <p className='text-center md:text-[20px] text-[16px] py-4'>Sibling Discount is only available for siblings currently Signed-Up</p>
  </div>

</div>

      </div>}

      <div className='text-center text-[20px]'>Enroll when user logged in </div>

     { tabs!== "Session" && <div className='md:flex flex-col md:flex-row mx-[20px]   items-center my-[120px] justify-center gap-[70px]'>
      <div className='border-[1px] md:w-[40%] overflow-hidden border-[#484A5C] border-b-[12px] rounded-[24px]'>

  {/* Heading with image background */}
  <div className="relative w-full md:h-[320px] h-[220px] flex md:items-center justify-center overflow-hidden">
    <img
      src="/cloud-blue.svg"
      alt=""
      className="absolute md:block hidden inset-0 w-full h-full object-cover"
    />
    <img
      src="/sm-cloud-blue.png"
      alt=""
      className="absolute  md:hidden block inset-0  w-full h-[220px] object-cover"
    />
    <h2 style={{ fontFamily: 'Clash Display', fontWeight: 500 }} className='relative md:mt-0 mt-12  md:text-[50px] text-[28px] text-center  text-white z-10 '>Charter School’s Student</h2>
  </div>

  {/* Below normal content */}
  <div className='md:p-[30px]  bg-white'>
    <div className='flex justify-center items-center md:gap-[30px] gap-[2px] pb-5'>
      <div className='flex flex-col justify-center items-center gap-2'>
        <h4 className='md:text-[20px] text-[18px]'>First Student</h4>
        <span style={{ fontFamily: 'Clash Display', fontWeight: 500 }} className='md:text-[50px] text-[28px]'>63 $</span>
        <Button  onClick={()=>{
        navigate("/Checkout-charter-school-first-student", {
          state: {
            from: "Charter"
          },
        })
        }}   text='Enroll Now' bgColor='bg-[#484A5C]' textColor='text-white' />
      </div>
      <div className='w-[0.8px] md:h-[200px] h-[130px] bg-[#484A5C]'></div>
      <div className='flex flex-col justify-center items-center gap-2'>
        <h4 className='md:text-[20px] text-[17px]'>Sibling Student</h4>
        <span style={{ fontFamily: 'Clash Display', fontWeight: 500 }} className='md:text-[50px] text-[28px]'>63 $</span>
        <Button 
        onClick={()=>{
          navigate("/Checkout-charter-school-first-student", {
            state: {
              from: "Charter"
            },
          })
        }}
          text='Enroll Now' bgColor='bg-[#484A5C]' textColor='text-white' />
      </div>
    </div>

    <div className='h-[1px] w-[90%] mx-auto bg-[#484A5C]'></div>
    <p className='text-center md:text-[20px] text-[16px] py-4'>Sibling Discount is only available for siblings currently Signed-Up</p>
  </div>

</div>
      <div className='border-[1px] md:w-[40%] md:mt-0 mt-[40px] overflow-hidden border-[#484A5C] border-b-[12px] rounded-[24px]'>

  {/* Heading with image background */}
  <div className="relative w-full md:h-[320px] h-[220px] flex md:items-center justify-center overflow-hidden">
    <img
      src="/cloud-orange.svg"
      alt=""
      className="absolute md:block hidden inset-0 w-full h-full object-cover"
    />
    <img
      src="/sm-cloud-orange.png"
      alt=""
      className="absolute  md:hidden block inset-0  w-full h-[220px] object-cover"
    />
    <h2 style={{ fontFamily: 'Clash Display', fontWeight: 500 }} className='relative md:mt-0 mt-12  md:text-[50px] text-[28px] text-center  text-white z-10 '>Independent Student</h2>
  </div>

  {/* Below normal content */}
  <div className='md:p-[30px]  bg-white'>
    <div className='flex justify-center items-center md:gap-[30px] gap-[2px] pb-5'>
      <div className='flex flex-col justify-center items-center gap-2'>
        <h4 className='md:text-[20px] text-[18px]'>First Student</h4>
        <span style={{ fontFamily: 'Clash Display', fontWeight: 500 }} className='md:text-[50px] text-[28px]'>63 $</span>
        <Button  onClick={()=>{
        navigate("/Checkout-charter-school-first-student", {
          state: {
            from: "Independent"
          },
        })
        }}   text='Enroll Now' bgColor='bg-[#484A5C]' textColor='text-white' />
      </div>
      <div className='w-[0.8px] md:h-[200px] h-[130px] bg-[#484A5C]'></div>
      <div className='flex flex-col justify-center items-center gap-2'>
        <h4 className='md:text-[20px] text-[17px]'>Sibling Student</h4>
        <span style={{ fontFamily: 'Clash Display', fontWeight: 500 }} className='md:text-[50px] text-[28px]'>63 $</span>
        <Button 
        onClick={()=>{
          navigate("/Checkout-charter-school-first-student", {
            state: {
              from: "Independent"
            },
          })
        }}
          text='Enroll Now' bgColor='bg-[#484A5C]' textColor='text-white' />
      </div>
    </div>

    <div className='h-[1px] w-[90%] mx-auto bg-[#484A5C]'></div>
    <p className='text-center md:text-[20px] text-[16px] py-4'>Sibling Discount is only available for siblings currently Signed-Up</p>
  </div>

</div>

      </div>}

      {/* Monthly EFT Membership */}
      { tabs ==="Monthly" && 
        <div className='my-[120px]'>
        <CommonHeading bottomcolor='blue' text='     Monthly EFT Membership'/>
        <div className='md:flex md:flex-row mx-[20px] flex-col mt-12  items-center justify-center gap-[70px]'>
        <div className='border-[1px] md:w-[40%] overflow-hidden border-[#484A5C] border-b-[12px] rounded-[24px]'>
{/* Heading with image background */}
<div className="relative w-full md:h-[320px] h-[170px] flex items-center justify-center overflow-hidden">
<img
      src="/cloud-pink.svg"
      alt=""
      className="absolute md:block hidden inset-0 w-full h-full object-cover"
    />
    <img
      src="/sm-cloud-blue.png"
      alt=""
      className="absolute  md:hidden block inset-0  w-full h-[170px] object-cover"
    />
  <h2 style={{ fontFamily: 'Clash Display', fontWeight: 500 }} className='relative  w-[80%] md:text-[50px] text-[28px] text-center text-white z-10 '>Independent
  Student</h2>
</div>            <div className='md:p-[30px] p-[10px] flex flex-col gap-5 '>
                <div className='flex justify-between items-center'>
                    <span style={{ fontFamily: 'Clash Display', fontWeight: 500 }} className='md:text-[50px] text-[28px]'>53 $</span>
                    <Button onClick={()=>{
        navigate("/Checkout-charter-school-first-student", {
          state: {
            from: "Independent"
          },
        }) }} text='Enroll Now' bgColor='bg-[#484A5C]' textColor='text-white' />
                </div>
  <div className='h-[1px] w-[100%] mx-auto bg-[#484A5C]'></div>
  <span className='text-[20px] text-center'>Every Month</span>


            </div>

            </div>
        <div className='border-[1px] md:w-[40%] md:mt-0 mt-[40px] overflow-hidden border-[#484A5C] border-b-[12px] rounded-[24px]'>
{/* Heading with image background */}
<div className="relative w-full md:h-[320px] h-[170px] flex items-center justify-center overflow-hidden">
<img
      src="/cloud-purple.svg"
      alt=""
      className="absolute md:block hidden inset-0 w-full h-full object-cover"
    />
    <img
      src="/sm-cloud-orange.png"
      alt=""
      className="absolute  md:hidden block inset-0  w-full h-[170px] object-cover"
    />
  <h2 style={{ fontFamily: 'Clash Display', fontWeight: 500 }} className='relative  w-[80%] md:text-[50px] text-[28px] text-center text-white z-10 '>Independent
  Sibling</h2>
</div>            <div className='md:p-[30px] p-[10px] flex flex-col gap-5 '>
                <div className='flex justify-between items-center'>
                    <span style={{ fontFamily: 'Clash Display', fontWeight: 500 }} className='md:text-[50px] text-[28px]'>53 $</span>
                    <Button onClick={()=>{
        navigate("/Checkout-charter-school-first-student", {
          state: {
            from: "Charter"
          },
        }) }}  text='Enroll Now' bgColor='bg-[#484A5C]' textColor='text-white' />
                </div>
  <div className='h-[1px] w-[100%] mx-auto bg-[#484A5C]'></div>
  <span className='text-[20px] text-center'>Every Month</span>


            </div>

            </div>
     
        </div>
      </div>}
      {/* short Card */}
      {tabs === "Session" && (
  <div className='my-[120px]'>


  {/* <div className='flex mt-12  items-center justify-center gap-[70px]'>
  <div className='border-[1px] w-[40%] overflow-hidden border-[#484A5C] border-b-[12px] rounded-[24px]'>

<div className="relative w-full h-[320px] flex items-center justify-center overflow-hidden">
<img
src="/cloud-orange.svg"
alt=""
className="absolute inset-0 w-full h-full object-cover"
/>
<h2 style={{ fontFamily: 'Clash Display', fontWeight: 500 }} className='relative  w-[80%] text-[50px] text-center text-white z-10 '>Charter School’s Student</h2>
</div>            <div className='p-[30px] flex flex-col gap-5 '>
          <div className='flex justify-between items-center'>
              <span style={{ fontFamily: 'Clash Display', fontWeight: 500 }} className='text-[50px]'>53 $</span>
              <Button text='Enroll Now' bgColor='bg-[#484A5C]' textColor='text-white' />
          </div>



      </div>

      </div>
  <div className='border-[1px] w-[40%] overflow-hidden border-[#484A5C] border-b-[12px] rounded-[24px]'>

<div className="relative w-full h-[320px] flex items-center justify-center overflow-hidden">
<img
src="/cloud-blue.svg"
alt=""
className="absolute inset-0 w-full h-full object-cover"
/>
<h2 style={{ fontFamily: 'Clash Display', fontWeight: 500 }} className='relative  w-[80%] text-[50px] text-center text-white z-10 '>Independent
Student</h2>
</div>          
  <div className='p-[30px] flex flex-col gap-5 '>
          <div className='flex justify-between items-center'>
              <span style={{ fontFamily: 'Clash Display', fontWeight: 500 }} className='text-[50px]'>53 $</span>
              <Button text='Enroll Now' bgColor='bg-[#484A5C]' textColor='text-white' />
          </div>




      </div>

      </div>
  </div> */}

<div className='md:flex md:flex-row mx-[20px] flex-col mt-12  items-center justify-center gap-[70px]'>
        <div className='border-[1px] md:w-[40%] overflow-hidden border-[#484A5C] border-b-[12px] rounded-[24px]'>
{/* Heading with image background */}
<div className="relative w-full md:h-[320px] h-[170px] flex items-center justify-center overflow-hidden">
<img
      src="/cloud-blue.svg"
      alt=""
      className="absolute md:block hidden inset-0 w-full h-full object-cover"
    />
    <img
      src="/sm-cloud-blue.png"
      alt=""
      className="absolute  md:hidden block inset-0  w-full h-[170px] object-cover"
    />
  <h2 style={{ fontFamily: 'Clash Display', fontWeight: 500 }} className='relative  w-[90%] md:text-[50px] text-[28px] text-center text-white z-10 '>Charter School’s
  Student</h2>
</div>            <div className='md:p-[30px] p-[10px]  pb-5 flex flex-col gap-5 '>
                <div className='flex justify-between items-center'>
                    <span style={{ fontFamily: 'Clash Display', fontWeight: 500 }} className='md:text-[50px] text-[28px]'>53 $</span>
                    <Button onClick={()=>{
        navigate("/Checkout-charter-school-first-student", {
          state: {
            from: "Charter"
          },
        }) }}  text='Enroll Now' bgColor='bg-[#484A5C]' textColor='text-white' />
                </div>
 


            </div>

            </div>
        <div className='border-[1px] md:w-[40%] md:mt-0 mt-[40px] overflow-hidden border-[#484A5C] border-b-[12px] rounded-[24px]'>
{/* Heading with image background */}
<div className="relative w-full md:h-[320px] h-[170px] flex items-center justify-center overflow-hidden">
<img
      src="/cloud-orange.svg"
      alt=""
      className="absolute md:block hidden inset-0 w-full h-full object-cover"
    />
    <img
      src="/sm-cloud-orange.png"
      alt=""
      className="absolute  md:hidden block inset-0  w-full h-[170px] object-cover"
    />
  <h2 style={{ fontFamily: 'Clash Display', fontWeight: 500 }} className='relative  w-[80%] md:text-[50px] text-[28px] text-center text-white z-10 '>Independent
  Student</h2>
</div>            <div className='md:p-[30px] p-[10px] pb-5 flex flex-col gap-5 '>
                <div className='flex justify-between items-center'>
                    <span style={{ fontFamily: 'Clash Display', fontWeight: 500 }} className='md:text-[50px] text-[28px]'>53 $</span>
                    <Button onClick={()=>{
        navigate("/Checkout-charter-school-first-student", {
          state: {
            from: "Independent"
          },
        })
        }}   text='Enroll Now' bgColor='bg-[#484A5C]' textColor='text-white' />
                </div>



            </div>

            </div>
     
        </div>
</div>
)}

      {/* Student Details */}
      <div className='md:mx-[110px] mx-[20px] my-[120px] '>
        <CommonHeading bottomcolor='blue' text='Student Details'/>
        <div className='md:flex md:flex-row flex-col gap-[70px] mt-12'>
        <div className='md:w-[75%]'>
        <Chart/>
        </div>
          
            <div className="listenerdetails md:w-[23%] md:mt-0 mt-[40px] flex flex-col border-[1px]   border-[#484A5C]  rounded-[24px] justify-between items-center px-[10px]   py-[20px]  bg-white ">
            <div className="heading    text-center md:text-[26px] text-[20px]">
                Gender Details
                </div>
                <div className='md:w-[70%] w-[60%]'>
                <CircularGraph />

                </div>
            <div className="text w-[100%] px-[20px] ">
             
                <div className="middle gap-[10px] my-4 flex flex-col">
                    <div className="1 flex justify-between items-center">
                    <div className='flex justify-start items-center gap-2'>  
                        <div className="circle w-3 h-3 bg-[#1B69FF] rounded-full"></div>
                    <span className='text-[20px]'>Total Boys</span>
                    </div>
                     <span className='text-[20px]'>1440</span>
                   
                  
                </div>
                    <div className="1 flex justify-between items-center">
                    <div className='flex justify-start items-center gap-2'>  
                            <div className="circle w-3 h-3 bg-[#FF2FB8] rounded-full"></div>
                    <span className='text-[20px]'> Total Girls</span>
                    </div>
                     <span className='text-[20px]'>140</span>
                   
                  
                </div>
                    <div className="1 flex pb-2 border-b-[1px] border-[#D9D9D9] justify-between items-center">
                    <div className='flex justify-start items-center gap-2'>  
                            <div className="circle w-3 h-3 bg-[#B4B6C5] rounded-full"></div>
                    <span className='text-[20px]'>Others</span>
                    </div>
                     <span className='text-[20px]'>10</span>
                   
                  
                </div>
                    </div>
                   
                   
        
            </div>
        
          
        </div>
        </div>
       
      </div>
      {/* About Instructer */}
      <div className='my-[120px]'>
        <CommonHeading bottomcolor='blue' text='About Instructor'/>
        <div className='border-[1px] md:p-[40px] p-[15px]  md:mx-[120px] mx-[20px] mt-12 border-[#484A5C] border-b-[12px] rounded-[24px]'>
            <div className='md:flex md:flex-row flex-col w-[100%]  gap-[60px]'>
            <ProfileUi/>
            



                <div className='flex md:w-[80%] w-[100%] flex-col gap-3 '>
                <div  style={{ fontFamily: 'Clash Display', fontWeight: 500 }} className=' flex flex-col md:gap-3 gap-1'>
                    <h2 className='md:text-[28px] text-[20px] md:mt-0 mt-5'>Tommie Sykes</h2>
                    <span  className='md:text-[24px] text-[16px]'>Exp - 10 Yrs</span>
                
                </div>
                    <p className='md:text-[20px] text-[15px] text-[#808080]'>I’ve been teaching Table Tennis for the past 10 years, and it’s been an amazing journey. I love helping students build strong fundamentals, improve their speed, and develop smart game strategies. Whether you're just starting out or looking to play competitively, I make sure every session is fun, focused, and motivating. Let’s smash some goals—on and off the table! 🏓</p>
                </div>
            
            </div>

        </div>
      </div>

    { isModalOpen &&  <EnrollModal  onClose={() => setIsModalOpen(false)} />}

      <Footer/>
      
     
      </div>
  )
}

export default PeCoursesSessions