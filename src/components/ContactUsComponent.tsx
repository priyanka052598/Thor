import React, { useState } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import Button from './Button'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import PopUp from './PopUp'

function ContactUsComponent({ heading = "Contact Us" }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [showPopup, setShowPopup] = useState(false); // 👈 popup state

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: '' }); // clear error on typing
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = () => {
    const newErrors: any = {};

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.length < 10) {
      newErrors.phone = 'Enter a valid phone number';
    }
    if (!formData.message) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If no errors -> Show Popup
    console.log('Form Submitted', formData);
    setShowPopup(true); 
  };

  return (
    <div>

      <div className='flex md:mx-[100px] mx-[20px] mt-[200px] md:h-[700px] overflow-hidden mb-[130px] border-[2px] border-[#484A5C] border-b-[12px] rounded-[24px]'>
        <img className='md:w-[50%] sm:block hidden h-full object-cover' src="/contact-us.svg" alt="" />
        {
          showPopup ?
          <div className=' w-full bg-[#F4E5FF] flex justify-center items-center '>
     <PopUp  />
          </div>
     
:
<div className='flex flex-col gap-[15px] md:px-[40px] px-[15px] md:py-[15px] py-[30px] bg-[#F4E5FF] md:w-[50%]'>
<div className='flex flex-col'>
  <h3 style={{ fontFamily: 'Clash Display', fontWeight: 500 }} className='md:text-[40px] text-[28px]'>
    {heading}
  </h3>
  <img className='w-[50%]' src="/line-1.svg" alt="" />
</div>

<div className='flex flex-col gap-2'>
  <Input 
    className={`bg-white py-5 md:text-[24px] mt-6 ${errors.name ? 'border-red-500' : ''}`} 
    type="text" 
    placeholder="Your Name"
    value={formData.name}
    onChange={(e) => handleChange('name', e.target.value)}
  />
  {errors.name && <p className="text-red-500 text-[12px]">{errors.name}</p>}
</div>

<div className='flex flex-col gap-2'>
  <Input 
    className={`bg-white py-5 ${errors.email ? 'border-red-500' : ''}`} 
    type="email" 
    placeholder="Your Email"
    value={formData.email}
    onChange={(e) => handleChange('email', e.target.value)}
  />
  {errors.email && <p className="text-red-500 text-[12px]">{errors.email}</p>}
</div>

<div className='flex flex-col gap-2'>
  <div className={`bg-white py-1 px-4 border-[1px] ${errors.phone ? 'border-red-500 ' : 'border-black'} rounded-[6px]`}>
    <PhoneInput
      country={'in'}
      value={formData.phone}
      onChange={(value) => handleChange('phone', value)}
      inputStyle={{
        width: '100%',
        fontSize: '16px',
        border: 'none',
        background: 'transparent',
      }}
      buttonStyle={{
        background: 'transparent',
        border: 'none',
      }}
      placeholder="Enter phone number"
    />
  </div>
  {errors.phone && <p className="text-red-500 text-[12px]">{errors.phone}</p>}
</div>

<div className='flex flex-col gap-2'>
  <Textarea 
    className={`bg-white h-[200px] py-3 ${errors.message ? 'border-red-500' : ''}`} 
    placeholder="Message."
    value={formData.message}
    onChange={(e) => handleChange('message', e.target.value)}
  />
  {errors.message && <p className="text-red-500 text-[12px]">{errors.message}</p>}
</div>

<div onClick={handleSubmit}>
  <Button text=" Submit" bgColor="bg-[#484A5C]" textColor="text-white" showArrow={true} />
</div>
</div>

        }

       
      </div>
      {/* {showPopup && } */}
    </div>
  )
}

export default ContactUsComponent
