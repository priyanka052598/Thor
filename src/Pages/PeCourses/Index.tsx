import Button from '@/components/Button'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';


function PeCourses() {

    const courses = [
        {
          id: 1,
          title: "Table Tennis",
          mode: "Online",
          city: "Sun Hussien",
          ages: "6 - 15 Years Old",
          description: "Table Tennis is a dynamic physical activity class designed for students to improve fitness, coordination, and teamwork. It includes warm-ups, endurance training, strength exercises, sports games, and mindfulness activities.",
          image: "/pe-courses-card-1.png"
        },
        {
          id: 2,
          title: "Basketball Training",
          mode: "In Person",
          city: "Los Angeles",
          ages: "8 - 18 Years Old",
          description: "Basketball training focusing on dribbling, shooting, teamwork, and physical fitness. Classes involve drills, practice matches, and personalized coaching.",
          image: "/pe-courses-card-1.png"
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
        P.E Courses
        </span>
        
      </div>
      </div>
      </div>
      <div className="mx-[100px] my-40 flex flex-col gap-[40px]">
  {courses.map((course) => (
    <div
      key={course.id}
      className="border-[1px] rounded-[16px] overflow-hidden flex border-[#484A5C] border-b-[12px]"
    >
      <div className="w-1/3 h-full">
        <img className="w-full h-[380px] object-cover" src={course.image} alt={course.title} />
      </div>
      <div className="flex flex-col gap-[20px] p-[40px] w-2/3">
        <h3
          style={{ fontFamily: 'Clash Display', fontWeight: 500 }}
          className="text-[32px] text-black"
        >
          {course.title}
        </h3>
        <div className="flex gap-[30px]">
          <div className="text-black text-[22px] font-medium">
            Mode: <span>{course.mode}</span>
          </div>
          <div className="text-black text-[22px] font-medium">
            City: <span>{course.city}</span>
          </div>
          <div className="text-black text-[22px] font-medium">
            Ages: <span>{course.ages}</span>
          </div>
        </div>
        <p className="text-[20px] text-[#808080]">{course.description}</p>
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

export default PeCourses