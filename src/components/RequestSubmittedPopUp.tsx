import React from 'react'

function RequestSubmittedPopUp() {
    
  return (
    <div> <div className="fixed inset-0 bg-black/30 backdrop-blur-[2px] bg-opacity- flex justify-center items-center z-50">
    <div className="bg-white  rounded-[16px] overflow-hidden w-[400px] flex flex-col items-center gap-4">
      <img className='' src="/please-login-first.svg" alt="" />
      <p className="text-[16px] leading-[1.4] px-8 text-center">To enroll your child in the session, please log in to your account. Logging in helps to ensures a smooth registration process.</p>
   <div className='w-full flex justify-center items-center gap-4 mt-6 mx-auto'>
    {/* <Btn  className='border-black border-[1px] w-[40%] py-5' onClick={onClose}>Cancel</Btn> */}
    {/* <Btn className='bg-[#484A5C] text-white w-[40%] border-[1px] py-5' onClick={onClose}>Login</Btn> */}
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
  </div></div>
  )
}

export default RequestSubmittedPopUp