import React from 'react'
import { GoArrowRight } from "react-icons/go";

interface ButtonProps {
  text: string
  bgColor?: string
  textColor?: string
  textSize?: string
  borderWidth?: string
  borderColor?: string
  showArrow?: boolean
  onClick?: () => void
}

function Button({
  text,
  bgColor = 'bg-blue-500',
  textColor = 'text-white',
  textSize = 'text-base',
  borderWidth = '2px',
  borderColor = 'white',
  showArrow = true,
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex  items-center cursor-pointer justify-center gap-2 w-fit px-6 py-3 rounded-[8px] font-semibold ${bgColor} ${textColor} ${textSize}`}
      style={{
        borderWidth: borderWidth,
        borderColor: borderColor,
        borderStyle: 'solid',
      }}
    >
      <span className='md:text-[20px] text-[12px]'>{text}</span>
      {showArrow && (
        <GoArrowRight className={`md:text-[24px] text-[16px] ${bgColor} ${textColor}`} />
      )}
    </button>
  )
}

export default Button
