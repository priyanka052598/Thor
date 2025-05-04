import Button from '@/components/Button'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';


function AcademicCourses() {

    const courses = [
        {
          id: 1,
          title: "Table Tennis",
          mode: "Online",
          city: "Sun Hussien",
          ages: "6 - 15 Years Old",
          description: "Table Tennis is a dynamic physical activity class designed for students to improve fitness, coordination, and teamwork. It includes warm-ups, endurance training, strength exercises, sports games, and mindfulness activities.",
          image: "/pe-courses-card.png"
        },
        {
          id: 2,
          title: "Basketball Training",
          mode: "In Person",
          city: "Los Angeles",
          ages: "8 - 18 Years Old",
          description: "Basketball training focusing on dribbling, shooting, teamwork, and physical fitness. Classes involve drills, practice matches, and personalized coaching.",
          image: "/pe-courses-card.png"
        },
      ];
      

  return (
    <div>
    <div>
  <div className="relative w-full">
    {/* Background Image */}
    <img
      src="/pe-courses-image.svg"
      alt="Background"
      className="w-full md:block hidden h-auto object-cover" 
    />
    <img
      src="/sm-academic-courses-image.png"
      alt="Background"
      className="w-full md:hidden block h-auto object-cover" 
    />

    {/* Absolute Content over Image */}
    <div className="absolute inset-0">
      <Header /> 

      {/* Center Text */}
      <div className="flex flex-col items-center justify-center gap-[26px] md:pt-10 pt-6">
        <span
          className="md:text-[60px] text-[30px] text-white text-center leading-[1.4]"
          style={{
            fontFamily: 'Clash Display',
            fontWeight: 500
          }}
        >
    Academic Courses
        </span>
        
      </div>
      </div>
      </div>
      <div className="md:mx-[100px] mx-[20px] my-40 flex flex-col gap-[40px]">
  {courses.map((course) => (
    <div
      key={course.id}
      className="border-[1px] rounded-[16px] overflow-hidden md:flex border-[#484A5C] border-b-[12px]"
    >
      <div className="md:w-1/3 h-full">
        <img className="w-full md:h-[380px] h-[200px] object-cover" src={course.image} alt={course.title} />
      </div>
      <div className="flex flex-col gap-[20px] md:p-[40px] px-4 md:py-0 py-5 md:w-2/3">
        <h3
          style={{ fontFamily: 'Clash Display', fontWeight: 500 }}
          className="md:text-[32px] text-[24px] text-black"
        >
          {course.title}
        </h3>
        <div className="md:flex md:gap-[30px]">
          <div className="text-black md:text-[22px] text-[18px] font-medium">
            Mode: <span>{course.mode}</span>
          </div>
          <div className="text-black md:text-[22px] text-[18px] font-medium">
            City: <span>{course.city}</span>
          </div>
          <div className="text-black md:text-[22px] text-[18px] font-medium">
            Ages: <span>{course.ages}</span>
          </div>
        </div>
        <p className="md:text-[20px] text-[16px] text-[#808080]">{course.description}</p>
        <Link state={{course:course}} to={"/Pe-Courses-session-screen"}> <Button bgColor="bg-[#484A5C]" text="Sessions" />
        </Link>
       
      </div>
    </div>
  ))}
</div>

      <Footer/>

    </div>
    </div>
  )
}

export default AcademicCourses