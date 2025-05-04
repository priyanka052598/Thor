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


import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
 


function Home() {

  
  // const [api, setApi] = React.useState<CarouselApi>()
  // const [current, setCurrent] = React.useState(0)
  // const [count, setCount] = React.useState(0)
 
  // React.useEffect(() => {
  //   if (!api) {
  //     return
  //   }
 
  //   setCount(api.scrollSnapList().length)
  //   setCurrent(api.selectedScrollSnap() + 1)
 
  //   api.on("select", () => {
  //     setCurrent(api.selectedScrollSnap() + 1)
  //   })
  // }, [api])



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

  const carouselData = [
    { image:"testimonial-image-1.svg" ,name: "Thomas Miller", description: "Youth Movement has been a game-changer for my child! The combination of physical education and academic classes keeps them engaged and motivated." },
    { image:"testimonial-image-2.svg" ,name: "Jessica Brown", description: "I love how easy it is to enroll and track my child’s progress. The platform is seamless, and the classes are well-structured. My son has improved both academically and physically. " },
    { image:"testimonial-image-1.svg" ,name: "John Smith", description: "Youth Movement has been a game-changer for my child! The combination of physical education and academic classes keeps them engaged and motivated." },

  ];
  
  return (
    <div>
      {/* Engaging Physical & Academic Classes, All in One Place! */}
    <div className="relative w-full">
      {/* Background Image */}
      <img
        src="/Engaging.svg"
        alt="Background"
        className="w-full h-auto object-cover hidden sm:block" 
      />

        {/* Background Image for small screens */}
  <img
    src="/sm-home-main.svg" // use your mobile image path here
    alt="Mobile Background"
    className="w-full h-auto object-cover block sm:hidden"
  />

      {/* Absolute Content over Image */}
      <div className="absolute inset-0">
        <Header /> 

        {/* Center Text */}
        <div className="flex flex-col items-center justify-center gap-[26px] md:pt-10 pt-6">
          <span
            className="md:text-[60px] text-[22px] text-white text-center leading-[1.4]"
            style={{
              fontFamily: 'Clash Display',
              fontWeight: 500
            }}
          >
            Engaging Physical & Academic <br /> Classes, All in One Place!
          </span>
          {/* buttons */}
          <div className='flex flex-col md:flex-row justify-center items-center     md:gap-[40px] gap-[10px]'>
<Button text="Explore Courses" bgColor="bg-transparent" textColor="text-white"  showArrow={true} />
<Button text="Enroll Now" bgColor="bg-white" textColor="text-black" showArrow={true} />
          </div>
        </div>
      </div>
    </div>
     {/* Video part */}
     <div className="relative md:mx-1   w-full">
  <img
  className="absolute right-0 top-0 md:w-[100%] w-[90%] h-auto object-contain"
    src="/video-part-bg.svg"
    alt=""
  />

  <div className="relative flex justify-center items-center pt-20">
   
    <div className="relative">
      <img
        className="md:w-[300%] w-[280px] object-contain"
        src="/video-part-laptop.svg"
        alt=""
      />

      <video
        className="absolute top-[3%] left-[.5%] md:w-[99%] w-[99%]  object-cover rounded-md pointer-events-auto"
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
<div className='md:my-[160px] my-[80px]'>
<CommonHeading  bottomcolor='blue' text="What We Do Offer"/>
  {/* Cards  */}
  <div className="flex justify-center flex-wrap md:mx-0 mx-[20px] md:gap-[80px] gap-[40px] md:mt-[80px] mt-[40px]">
        {cards.map((card) => (
          <div
            key={card.id}
            className="w-[500px] md:h-[580px] border-[2px] border-b-[12px] border-[#484A5C] rounded-[16px] overflow-hidden flex flex-col"
          >
            {/* Image */}
            <div className="w-full md:h-[65%]">
              <img
                className="w-full h-full object-cover"
                src={card.image}
                alt={card.title}
              />
            </div>

            {/* Text and Button */}
            <div className="md:px-[35px] px-[15px] md:py-[15px] py-[20px] md:mb-0 mb-5 flex flex-col justify-between md:gap-[10px]">
              <h3
                style={{
                  fontFamily: 'Clash Display',
                  fontWeight: 500,
                }}
                className="md:text-[30px] text-[24px] text-center"
              >
                "{card.title}"
              </h3>

              <div className="flex justify-between items-center md:mt-6 mt-3">
                <span className="md:text-[24px] text-[15px] text-[#808080]">{card.courses}</span>
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
  }} className='md:text-[40px] mx-[20px] text-[24px] text-center'>Trusted by 30+ Charter Schools</h3>

{/* logos */}

<div className='flex   flex-wrap justify-around  md:mx-[80px] mx-[20px] md:gap-[30px] gap-[10px]'>
{trustedLogos.map((logo) => (
  <div className='flex  flex-col justify-center items-center md:w-[15%] w-[45%]    gap-[20px] mt-[40px]'>
    <img className='md:w-[80%] w-[70%]  ' src={logo.image} alt="" />
    <p className='md:text-[25px] text-[15px]  text-black text-center'>{logo.text}</p>
  </div>
))}
</div>
</div>
{/* About us */}
<div className='md:my-[160px] my-[80px] w-[88%] mx-auto  overflow-hidden border-[2px] border-[#484A5C] border-b-[12px] rounded-[16px] flex'>
<div className='md:w-[50%] md:px-[30px] px-[10px] py-[50px]   bg-[#4177C7]'>
  <h3 style={{
    fontFamily: 'Clash Display',
    fontWeight: 500
  }} className='text-white md:text-[56px] text-[28px] '>About Us</h3>
  <img className='w-[40%]  mb-5' src="/line-2.svg" alt="" />
  <p className='md:text-[24px] text-[16px] text-white'>
  Youth Movement is a dynamic initiative dedicated to empowering young minds through a perfect blend of physical education and academic excellence. We aim to create a nurturing environment where children grow stronger, smarter, and more confident—both inside and outside the classroom. With a team of experienced instructors and a values-driven approach, we are committed to shaping the next generation with purpose, discipline, and holistic growth.
  </p>
</div>
<div className='ml-10 sm:block hidden'><img className='item-center' src="/about-us.svg" alt="" /></div>
</div>
{/* Meet our Instructors */}
<div>
  <CommonHeading bottomcolor='blue' text="Meet Our Instructors"/>
  <div className='flex flex-wrap w-full  justify-center items-center md:mt-[60px] mt-[40px] md:gap-[70px] gap-[40px]' >
  {instructors.map((instructor, index) => (
    <div key={index} className='flex flex-wrap flex-col justify-center items-center md:gap-[30px] gap-[20px]'>
      <div className=''>
      {instructor.profile}
      </div>
     
      <div className='flex flex-col justify-center items-center md:gap-[7px] '>
        <h3
          style={{ fontFamily: 'Clash Display', fontWeight: 500 }}
          className='md:text-[20px] text-[20px] text-center'
        >
          {instructor.name}
        </h3>
        <p className='md:text-[20px] text-[16px] text-center'>{instructor.title}</p>
      </div>
    </div>
  ))}
</div>

</div>

{/* What we believe at Youth movement */}
<div className=''  style={{

    background: 'radial-gradient(circle, #D033EA 0%, #831994 100%)'
  }}>


<div  className='flex justify-between  items-center w-[90%] py-[40px] mx-auto md:my-[160px] my-[80px]'>
  <img className='w-[45%] sm:block hidden' src="/youth-movement-girl-image.svg" alt="" />
  <div className='md:w-[50%] flex flex-col gap-[25px]'>
    <h3 style={{
      fontFamily: 'Clash Display',
      fontWeight: 500
    }} className='md:text-[40px] text-[26px] text-white '>What we believe at Youth movement</h3>
    <div className='flex flex-col '>
      {youthMovement.map((item) => (
        <div className='flex items-center text-white  gap-[20px] my-[20px]'>
          <img className='md:w-[80px] w-[50px]' src={item.image} alt="" />
        <div>
          <h3 style={{
            fontFamily: 'Clash Display',
            fontWeight: 500
          }} className='md:text-[24px] text-[20px]'>{item.heading}</h3>
          <p className='md:text-[20px] text-[16px]'>{item.text}</p>
        </div>
        </div>
      ))}
    </div>
  </div>
</div>
</div>

{/* Parent Testimonials */}
<div className='md:block hidden '>
  <CommonHeading bottomcolor='blue' text="Parent Testimonials" />
  <div className='mx-[100px]  mt-[80px]  flex justify-around items-center border-[2px] border-[#484A5C] border-b-[12px] rounded-[16px]'>
    {testinomial.map((item,index) => (
      <div className={`md:w-[31%] flex flex-col h-[100%] ${ index<2 && "border-r-[2px]" } border-[#484A5C] justify-between p-[30px] gap-[30px]`} key={item.id}>
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
<div className='md:hidden block'>
<CommonHeading bottomcolor='blue' text="Parent Testimonials" />

<div className='w-[70%] mx-auto mt-[40px] '>


<Carousel>
  <CarouselContent>
    {carouselData.map((item, index) => (
      <CarouselItem key={index}>
        <div className="p-1">
          <Card className='border-[2px] py-8 border-[#484A5C] border-b-[12px] rounded-[16px]'>
            <CardContent className="flex aspect-square items-center justify-center  px-3 text-center">
              
              <div className='flex flex-col gap-[20px] '>
                <img className='w-[50px]' src={item.image} alt="" />
                <p className='text-[14px] text-left'>{item.description}</p>
                <h2 style={{fontFamily: 'Clash Display', fontWeight: 500}} className='text-[22px] text-left'>{item.name}</h2>
                
              </div>
            </CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>


    </div>
    <img className='w-full ' src="/sm-parent-testimonial-bootom-image.png" alt="" />
    </div>


{/* All you need to know - FAQS */}
<div className='md:m-[100px] mx-[20px] md:my-[120px] my-[80px] '>
  <h3 style={{
    fontFamily: 'Clash Display',
    fontWeight: 500
  }} className='md:text-[56px] text-[26px] md:my-[30px] my-[20px]'>All you need to know - FAQS</h3>
<Accordion className="border-[2px] border-[#484A5C] rounded-[20px] border-b-[12px] md:px-[30px] px-[10px] py-[20px]" type="single" collapsible>
  {faq.map(({ id, question, answer }) => (
    <AccordionItem key={id} value={`item-${id}`}>
      <AccordionTrigger className="md:text-[22px]  text-[17px]  flex justify-between item-center md:pr-4 pr-0 relative after:hidden [&>svg]:hidden group hover:no-underline">
     <div className='md:w-[80%] w-[90%]'>    {question} {/* Use `question` here instead of `faq` */}
      </div>
        <div className="ml-auto w-[40px] cursor-pointer flex  relative">
          <img
            src="/plus-icon.svg"
            alt="plus"
            className="md:h-12 md:w-12 h-7 w-7 transition-all duration-200 group-data-[state=open]:hidden"
          />
          <img
            src="/minus-icon.svg"
            alt="minus"
            className="md:h-12 md:w-12 w-7 h-  transition-all duration-200 hidden group-data-[state=open]:block"
          />
        </div>
      </AccordionTrigger>
      <AccordionContent className="md:text-[20px] text-[16px]">
        {answer} {/* Use `answer` here */}
      </AccordionContent>
    </AccordionItem>
  ))}
</Accordion>





</div>
{/* Ready to give your child a head start? */}
<div className="md:bg-[url('/head-start-image.svg')] bg-[url('/sm-head-start-image.png')] bg-cover bg-center md:mt-0 mt-[50px] rounded-[24px] mx-[20px] md:mx-[100px] md:w-[86%] w-[90%] h-[400px]  md:pt-0 pt-7    md:py-[100px]  flex md:items-center justify-center">
  <span style={{
    fontFamily: 'Clash Display',
    fontWeight: 500
  }} className="md:text-[56px]  text-[27px] text-white text-center md:w-[58%] w-full leading-[1.3] mx-auto">
    Ready to give your child a head start?
  </span>
</div>

<ContactUsComponent heading='Contact Us' />
<Footer/>

</div>

   
  )
}

export default Home
