import React, { isValidElement } from 'react'

interface HeadingProps {
  text: string,
  bottomcolor:  string
}

function CommonHeading({ text,bottomcolor }: HeadingProps) {
  return (
    <div className='flex flex-col justify-center w-full items-center'>

 
    <div className="flex justify-center items-center md:gap-[24px] gap-[5px]">
      <img className="md:w-[10%] w-[10%]" src="/pencil.svg" alt="Left Pencil" />
      <h2
        style={{
          fontFamily: 'Clash Display',
          fontWeight: 500,
        }}
        className="md:text-[60px] md:w-[100%] w-[73%] text-[22px]  text-black text-center"
      >
        {text}
      </h2>

      <img className="md:w-[10%] w-[10%]" src="/pencil.svg" alt="Right Pencil" />
    </div>
    {
      bottomcolor == "blue" && 
      <img className='md:w-[35%] w-[50%] object-cover' src="/line-1.svg" alt="" />
    }

    
    </div>
  )
}

export default CommonHeading
