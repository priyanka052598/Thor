import Button from '@/components/Button';
import Header from '@/components/Header'

import React from 'react'
import { text } from 'stream/consumers';
import CommonHeading from '@/components/CommonHeading';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import Footer from '@/components/Footer';
import ContactUs from '../ContactUs/Index';
import ContactUsComponent from '@/components/ContactUsComponent';
import ProfileUi from '@/components/ProfileUi';






function Home() {

  const cards = [
    {
      id: 1,
      image: "/offer-image-1.png",
      title: "Physical Education Classes",
      courses: "15 Courses"
    },
    {
      id: 2,
      image: "/offer-image-2.png",
      title: "Academic Excellence",
      courses: "20 Courses"
    },
    
  ]
  const trustedLogos=[
    {
      id:1,
      image:"trusted-logo-1.svg",
    text:"Charter School American River"
    },
    {
      id:2,
      image:"trusted-logo-2.svg",
    text:"Blue Ridge Academy"
    },
    {
      id:3,
      image:"trusted-logo-3.svg",
    text:"Clarksville Charter School"
    },
    {
      id:4,
      image:"trusted-logo-4.svg",
    text:"CORE Charter School"
    },
    {
      id:5,
      image:"trusted-logo-5.svg",
    text:"Compass Charter School"}

  ]
   const youthMovement=[
    {
     id:1,
     image:"yoth-movement-logo-1.svg",
     heading:"Community",
     text:"Building a supportive and inclusive community"
   },
    {
     id:1,
     image:"youth-movement-logo-2.svg",
     heading:"Respect",
     text:"Teaching respect for oneself and other children"
   },
    {
     id:1,
     image:"youth-movement-logo-3.svg",
     heading:"Creativity",
     text:"Encouraging creative expression and innovation"
   },
    {
     id:1,
     image:"youth-movement-logo-4.svg",
     heading:"Growth",
     text:"Promoting personal growth and knowledge learning"
   },
  ]
  const testinomial=[
    {
      id:1,
      image:"testimonial-image-1.svg",
      name:"Thomas Miller",
      text:"Youth Movement has been a  game-changer for my child! The combination of physical education and academic classes keeps them engaged and motivated. Highly recommend!",
    },
    {
      id:2,
      image:"testimonial-image-2.svg",
      name:"Thomas Miller",
      text:"I love how easy it is to enroll and track my child’s progress. The platform is seamless, and the classes are well-structured. My son has improved both academically and physically. Highly recommend!",
    },
    {
      id:3,
      image:"testimonial-image-1.svg",
      name:"Thomas Miller",
      text:"After joining Youth Movement’s programs, she has become more active and disciplined. The P.E. classes have improved her fitness, while the academic sessions have boosted her learning skills",
    },

  ]
  const faq=[
    {
      id:1,
      question:"WHAT ARE P.E. CLASSES LIKE?",
      answer:"P.E. classes are similar to what you would see in a public school P.E. Class:  relay races, team-building activities, sport-related activities, etc."  
    },
    {
      id:2,
      question:"CAN A 5 YEAR OLD JOIN A P.E. CLASS?",
      answer:"You can track your child's progress by logging in to their account. You can see their performance and achievements in each program."  
    },
    {
      id:3,
      question:"CCAN MY STUDENT TRY OUT A CLASS FOR FREE?",
      answer:"You can track your child's progress by logging in to their account. You can see their performance and achievements in each program."  
    },
    {
      id:4,
      question:"CHARTER STUDENT:  HOW DO I SIGN UP MY STUDENT?",
      answer:"You can track your child's progress by logging in to their account. You can see their performance and achievements in each program."  
    },
    {
      id:5,
      question:"CAN A 5 YEAR OLD JOIN A P.E. CLASS?",
      answer:"You can track your child's progress by logging in to their account. You can see their performance and achievements in each program."  
    },
  ]

  const instructors = [
    {
      name: "Jane Doe",
      title: "P.E instructor",
      profile: <ProfileUi /> 
    },
    {
      name: "John Smith",
      title: "Yoga Instructor",
      profile: <ProfileUi />
    },
    {
      name: "John Smith",
      title: "Yoga Instructor",
      profile: <ProfileUi />
    },
    {
      name: "John Smith",
      title: "Yoga Instructor",
      profile: <ProfileUi />
    },
  ];
  
  return (
    <div>
      {/* Engaging Physical & Academic Classes, All in One Place! */}
    <div className="relative w-full">
      {/* Background Image */}
      <img
        src="/Engaging.svg"
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
            Engaging Physical & Academic <br /> Classes, All in One Place!
          </span>
          {/* buttons */}
          <div className='flex gap-[40px]'>
<Button text="Explore Courses" bgColor="bg-transparent" textColor="text-white"  showArrow={true} />
<Button text="Enroll Now" bgColor="bg-white" textColor="text-black" showArrow={true} />
          </div>
        </div>
      </div>
    </div>
     {/* Video part */}
     <div className="relative w-full">
  {/* Background Image right aligned */}
  <img
    className="absolute right-0 top-0 w-auto h-auto object-contain"
    src="/video-part-bg.svg"
    alt=""
  />

  {/* Foreground: Laptop + Video */}
  <div className="relative flex justify-center items-center pt-20">
   
    <div className="relative">
      {/* Laptop Image */}
      <img
        className="w-[300%]"
        src="/video-part-laptop.svg"
        alt=""
      />

      {/* Video inside laptop screen */}
      <video
        className="absolute top-[3%] left-[.5%] w-[99%]  object-cover rounded-md pointer-events-auto"
        src="/video.mp4"
        autoPlay
        loop
        muted
     
        controls={false} // initially no controls
      ></video>
    </div>
  </div>
</div>
{/* What we do offer */}
<div className='my-[160px]'>
<CommonHeading  bottomcolor='blue' text="What We Do Offer"/>
  {/* Cards  */}
  <div className="flex justify-center flex-wrap gap-[80px] mt-[80px]">
        {cards.map((card) => (
          <div
            key={card.id}
            className="w-[500px] h-[580px] border-[2px] border-b-[12px] border-[#484A5C] rounded-[16px] overflow-hidden flex flex-col"
          >
            {/* Image */}
            <div className="w-full h-[65%]">
              <img
                className="w-full h-full object-cover"
                src={card.image}
                alt={card.title}
              />
            </div>

            {/* Text and Button */}
            <div className="px-[35px] py-[15px] flex flex-col justify-between gap-[10px]">
              <h3
                style={{
                  fontFamily: 'Clash Display',
                  fontWeight: 500,
                }}
                className="text-[30px] text-center"
              >
                "{card.title}"
              </h3>

              <div className="flex justify-between items-center mt-6">
                <span className="text-[24px] text-[#808080]">{card.courses}</span>
                <Button
                  text="Explore Courses"
                  bgColor="bg-[#484A5C]"
                  textColor="text-white"
                  showArrow={true}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
</div>
{/* Trusted by 30+ Charter Schools */}
<div  className='py-[80px] bg-[#D1E4FF]'>
  <h3 style={{
    fontFamily: 'Clash Display',
    fontWeight: 500
  }} className='text-[40px] text-center'>Trusted by 30+ Charter Schools</h3>

{/* logos */}

<div className='flex justify-around mx-[80px] gap-[30px]'>
{trustedLogos.map((logo) => (
  <div className='flex  flex-col justify-center items-center   w-[15%]  gap-[20px] mt-[40px]'>
    <img className='w-[80%] ' src={logo.image} alt="" />
    <p className='text-[25px]  text-black text-center'>{logo.text}</p>
  </div>
))}
</div>
</div>
{/* About us */}
<div className='my-[160px] w-[88%] mx-auto  overflow-hidden border-[2px] border-[#484A5C] border-b-[12px] rounded-[16px] flex'>
<div className='w-[50%] px-[30px] py-[50px]   bg-[#4177C7]'>
  <h3 style={{
    fontFamily: 'Clash Display',
    fontWeight: 500
  }} className='text-white text-[56px] '>About Us</h3>
  <img className='w-[40%]  mb-5' src="/line-2.svg" alt="" />
  <p className='text-[24px] text-white'>
  Youth Movement is a dynamic initiative dedicated to empowering young minds through a perfect blend of physical education and academic excellence. We aim to create a nurturing environment where children grow stronger, smarter, and more confident—both inside and outside the classroom. With a team of experienced instructors and a values-driven approach, we are committed to shaping the next generation with purpose, discipline, and holistic growth.
  </p>
</div>
<div className='ml-10'><img className='item-center' src="/about-us.svg" alt="" /></div>
</div>
{/* Meet our Instructors */}
{/* <div>
  <CommonHeading bottomcolor='blue' text="Meet Our Instructors"/>
  <div className='flex  justify-center items-center mt-[60px] gap-[70px]'>
  {instructors.map((instructor, index) => (
    <div key={index} className='flex flex-col justify-center items-center gap-[30px]'>
      {instructor.profile}
      <div className='flex flex-col justify-center items-center gap-[7px]'>
        <h3
          style={{ fontFamily: 'Clash Display', fontWeight: 500 }}
          className='text-[24px] text-center'
        >
          {instructor.name}
        </h3>
        <p className='text-[20px] text-center'>{instructor.title}</p>
      </div>
    </div>
  ))}
</div>

</div> */}

{/* What we believe at Youth movement */}
<div className=''  style={{

    background: 'radial-gradient(circle, #D033EA 0%, #831994 100%)'
  }}>


<div  className='flex justify-between  items-center w-[90%] py-[40px] mx-auto my-[160px]'>
  <img className='w-[45%]' src="/youth-movement-girl-image.svg" alt="" />
  <div className='w-[50%] flex flex-col gap-[25px]'>
    <h3 style={{
      fontFamily: 'Clash Display',
      fontWeight: 500
    }} className='text-[40px] text-white '>What we believe at Youth movement</h3>
    <div className='flex flex-col '>
      {youthMovement.map((item) => (
        <div className='flex items-center text-white  gap-[20px] my-[20px]'>
          <img className='w-[80px]' src={item.image} alt="" />
        <div>
          <h3 style={{
            fontFamily: 'Clash Display',
            fontWeight: 500
          }} className='text-[24px]'>{item.heading}</h3>
          <p className='text-[20px]'>{item.text}</p>
        </div>
        </div>
      ))}
    </div>
  </div>
</div>
</div>

{/* Parent Testimonials */}
<div>
  <CommonHeading bottomcolor='blue' text="Parent Testimonials" />
  <div className='mx-[100px]  mt-[80px]  flex justify-around items-center border-[2px] border-[#484A5C] border-b-[12px] rounded-[16px]'>
    {testinomial.map((item,index) => (
      <div className={`w-[31%] flex flex-col h-[100%] ${ index<2 && "border-r-[2px]" } border-[#484A5C] justify-between p-[30px] gap-[30px]`} key={item.id}>
        <img className='w-[22%]' src={item.image} alt={item.name} />
        <p  className='text-[20px] line-clamp-6 '> {item.text}</p>
        <h3 style={{
          fontFamily: 'Clash Display',
          fontWeight: 500
        }} className='text-[32px] '>{item.name}</h3>
      </div>
    ))}
  </div>
  <img className='w-full ' src="/parent-testimonial-bottom-image.svg" alt="" />
</div>

{/* All you need to know - FAQS */}
<div className='m-[100px]  '>
  <h3 style={{
    fontFamily: 'Clash Display',
    fontWeight: 500
  }} className='text-[56px] my-[30px]'>All you need to know - FAQS</h3>
<Accordion className="border-[2px] border-[#484A5C] rounded-[20px] border-b-[12px] px-[30px] py-[20px]" type="single" collapsible>
  {faq.map(({ id, question, answer }) => (
    <AccordionItem key={id} value={`item-${id}`}>
      <AccordionTrigger className="text-[22px]  pr-4 relative after:hidden [&>svg]:hidden group hover:no-underline">
        {question} {/* Use `question` here instead of `faq` */}
        <div className="ml-auto cursor-pointer flex items-center relative">
          <img
            src="/plus-icon.svg"
            alt="plus"
            className="h-12 w-12 transition-all duration-200 group-data-[state=open]:hidden"
          />
          <img
            src="/minus-icon.svg"
            alt="minus"
            className="h-12 w-12 transition-all duration-200 hidden group-data-[state=open]:block"
          />
        </div>
      </AccordionTrigger>
      <AccordionContent className="text-[20px]">
        {answer} {/* Use `answer` here */}
      </AccordionContent>
    </AccordionItem>
  ))}
</Accordion>





</div>
{/* Ready to give your child a head start? */}
<div className="bg-[url('/head-start-image.svg')] bg-cover bg-center rounded-[24px] mx-[100px]     h-[100%] py-[100px] flex items-center justify-center">
  <span style={{
    fontFamily: 'Clash Display',
    fontWeight: 500
  }} className="text-[56px] text-white text-center w-[58%] leading-[1.3] mx-auto">
    Ready to give your child a head start?
  </span>
</div>

<ContactUsComponent heading='Contact Us' />
<Footer/>

</div>

   
  )
}

export default Home
