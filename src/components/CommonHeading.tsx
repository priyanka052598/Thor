import React, { isValidElement } from 'react'

interface HeadingProps {
  text: string,
  bottomcolor:  string
}

function CommonHeading({ text,bottomcolor }: HeadingProps) {
  return (
    <div className='flex flex-col justify-center items-center'>

 
    <div className="flex justify-center items-center gap-[24px]">
      <img className="w-[10%]" src="/pencil.svg" alt="Left Pencil" />
      <h2
        style={{
          fontFamily: 'Clash Display',
          fontWeight: 500,
        }}
        className="text-[65px] w-full text-black text-center"
      >
        {text}
      </h2>

      <img className="w-[10%]" src="/pencil.svg" alt="Right Pencil" />
    </div>
    {
      bottomcolor == "blue" && 
      <img src="/line-1.svg" alt="" />
    }

    
    </div>
  )
}

export default CommonHeading
