import React from 'react'

function PopUp() {
  return (
    <div className='bg-white   rounded-[16px] h-[450px] w-[420px] flex flex-col justify-center items-center gap-4'>
        <img src="/popup-icon.svg" alt="" />
        <p className='text-[24px] font-medium text-center'>Message Sent Successfully!</p>
        
    </div>
  )
}

export default PopUp
