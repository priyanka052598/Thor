import Button from '@/components/Button'
import Footer from '@/components/Footer';
import Header from '@/components/Header'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function CharterSchool() {
  const navigate = useNavigate();

  const handleContactClick=()=>{
    navigate('/contact-us')
  }

    const trustedSchools = [
        {
          logo: '/trusted-logo-1.svg',
          name: 'American River Charter School',
        },
        {
          logo: '/trusted-logo-2.svg',
          name: 'Sierra Charter School',
        },
        {
          logo: '/trusted-logo-3.svg',
          name: 'Everest Charter Academy',
        },
        {
          logo: '/trusted-logo-4.svg',
          name: 'Pioneer Charter School',
        },
        {
          logo: '/trusted-logo-4.svg',
          name: 'Pioneer Charter School',
        },
        {
          logo: '/trusted-logo-2.svg',
          name: 'Sierra Charter School',
        },
        {
          logo: '/trusted-logo-3.svg',
          name: 'Everest Charter Academy',
        },
        {
          logo: '/trusted-logo-4.svg',
          name: 'Pioneer Charter School',
        },
        {
          logo: '/trusted-logo-4.svg',
          name: 'Pioneer Charter School',
        },
        {
            logo: '/trusted-logo-3.svg',
            name: 'Everest Charter Academy',
          },
        {
            logo: '/trusted-logo-3.svg',
            name: 'Everest Charter Academy',
          },
          {
            logo: '/trusted-logo-4.svg',
            name: 'Pioneer Charter School',
          },
        
      ];
  return (
    <div> 
         <div className="relative w-full">
    {/* Background Image */}
    <img
      src="/Charter-school-main-image.svg"
      alt="Background"
      className="w-full md:block hidden h-auto object-cover" 
    />
    <img
      src="/sm-charter-school-image.png"
      alt="Background"
      className="w-full md:hidden block h-auto object-cover" 
    />

    {/* Absolute Content over Image */}
    <div className="absolute inset-0">
      <Header /> 

      {/* Center Text */}

      <div className="flex flex-col items-center mx-[12px] justify-center md:gap-[39px] gap-[20px] pt-10">
        <div className='flex flex-col justify-center items-center'>
        <span className='bg-[#5E0C4B] px-5 py-1 rounded-3xl md:text-[22px] text-[12px] text-white w-fit'>Trusted by 30 +</span>
        <span
          className="md:text-[60px] text-[30px] text-white text-center leading-[1.4]"
          style={{
            fontFamily: 'Clash Display',
            fontWeight: 500
          }}
        >
        Charter Schools
        </span>
        </div>
      
        <span className='md:text-[24px] text-[16px] text-center text-white'>Adding more Charter Schools throughout the school year. </span>
        {/* buttons */}
        <div className='flex gap-[40px]'>
<Button onClick={handleContactClick} text="Contact us" bgColor="bg-white" textColor="text-black"  showArrow={true} />
        </div>
      </div>
    </div>
    </div>
    {/* Logo cards section */}
    <div className="flex flex-wrap md:gap-[40px] gap-[24px] justify-center mb-[140px] my-[80px] md:px-[50px] px-[20px]">
  {trustedSchools.map((school, index) => (
    <div key={index} className="md:w-[20%] w-[45%]  flex flex-col items-center">
      <div className="bg-white w-full rounded-[16px] border-[1px] border-[#484A5C] border-b-[12px] p-6">
        <img src={school.logo} alt={school.name} className="w-full h-auto object-contain" />
      </div>
      <p className="md:text-[22px] text-[16px] text-center font-medium mt-4">{school.name}</p>
    </div>
  ))}
</div>
<Footer/>

    </div>
  )
}

export default CharterSchool