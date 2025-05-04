import Header from '@/components/Header'
import React, { useState } from 'react'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { ChevronDown } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { AiOutlinePlus } from "react-icons/ai";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import PhoneInput from 'react-phone-input-2';
import { Button as Btn } from "@/components/ui/button"
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { FaCheck } from "react-icons/fa6";
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import PaymentDetails from './PaymentDetails';







// import { Select } from '@radix-ui/react-select';
const RequestSubmittedPopUp = ({  onClose,navigate }: {  onClose: () => void,navigate:any }) => {

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-[2px] bg-opacity- flex justify-center items-center z-50">
      <div className="bg-white  rounded-[16px] overflow-hidden w-[400px] flex flex-col items-center gap-4">
        <img className='' src="/request-submitted-image.svg" alt="" />
        <p className="text-[16px] leading-[1.4] px-8 text-center"> We're excited to have you in the session. You can check the status of your request anytime by visiting your profile.</p>
     <div className='w-full flex justify-center items-center gap-4 mt-6  px-8 pb-10 '>
      <Btn   className='bg-[#484A5C] text-white  border-[1px] py-5 w-full cursor-pointer ' onClick={()=>{navigate("/")}}>Okay</Btn>
     </div>

      </div>
    </div>
  )
}





function CharterSchoolFirstStudent() {

  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const navigate = useNavigate();

  const [studentName, setStudentName] = useState('');
const [school, setSchool] = useState('');
const [age, setAge] = useState('');
const [gender, setGender] = useState('');
const [parentName, setParentName] = useState('');
const [parentEmail, setParentEmail] = useState('');
const [parentPhone, setParentPhone] = useState('');
const [showPopup, setShowPopup] = useState(false);
const [students, setStudents] = useState([
  {
    id: 1,
    name: "Mohit Asani",
    displayName: "Mohit Asani", // For display in the student tags
    school: "",
    age: "",
    gender: "",
    joinDate: ""
  }
]);
const [activeStudentId, setActiveStudentId] = useState(1);
const {from} = useLocation().state || {from: ""};

console.log(from,"from")

const addStudent = () => {
  const newId = students.length + 1;
  const newStudent = {
    id: newId,
    name: "",
    displayName: `Student ${newId}`, // Default display name
    school: "",
    age: "",
    gender: "",
    joinDate: ""
  };
  
  setStudents([...students, newStudent]);
  // Automatically switch to the new student's form
  setActiveStudentId(newId);
};

const removeLastStudent = () => {
  if (students.length > 1) {
    const newStudents = students.slice(0, -1);
    setStudents(newStudents);
    
    // If the removed student was active, switch to the last remaining student
    if (activeStudentId === students[students.length - 1].id) {
      setActiveStudentId(newStudents[newStudents.length - 1].id);
    }
  }
};

const updateStudentData = (id:any, field:any, value:any) => {
  setStudents(
    students.map(student => {
      if (student.id === id) {
        // If updating name, also update displayName
        if (field === 'name' && value) {
          return { ...student, [field]: value, displayName: value };
        }
        return { ...student, [field]: value };
      }
      return student;
    })
  );
};




const activeStudent = students.find(student => student.id === activeStudentId) || students[0];
const renderStudentDetailsSection = () => (
  <div className='Student Details'>
    <Accordion type="single" defaultValue="session" collapsible className="border-[1px] px-5 py-[4px] border-[#484A5C] border-b-[12px] rounded-[16px]">
      <AccordionItem value="session">
        <AccordionTrigger
          style={{ fontFamily: 'Clash Display', fontWeight: 500 }}
          className="text-[32px] hover:no-underline flex justify-between items-center group"
        >
          <span>Student Details</span>
          <ChevronDown className="h-8 w-8 transition-transform duration-300 group-data-[state=open]:rotate-180" />
        </AccordionTrigger>

        <AccordionContent className='flex flex-col gap-[20px]'>
          {/* Joining Date - Common for all */}
          <div>
            <h2 className='text-[16px]'>Joining Date *</h2>
            <input 
              className='w-full px-3 py-[8px] border-[1px] border-[#484A5C] rounded-[8px]' 
              type="date" 
              value={activeStudent.joinDate}
              onChange={(e) => updateStudentData(activeStudentId, 'joinDate', e.target.value)}
            />
          </div>

          {/* Students Tags Section */}
          <div>
            <div className='flex justify-between items-center'>
              <div className='flex flex-wrap gap-[12px] items-center'>
                {students.map((student) => (
                  <span
                    key={student.id}
                    className={`px-5 py-2 text-[18px] cursor-pointer ${activeStudentId === student.id ? 'text-white bg-[#1B69FF]' : 'text-white bg-[#484A5C]'} rounded-[8px]`}
                    onClick={() => setActiveStudentId(student.id)}
                  >
                    {student.displayName}
                  </span>
                ))}
                <AiOutlinePlus
                  onClick={addStudent}
                  className='cursor-pointer border-[1px] border-black text-[40px] rounded-[8px] p-1'
                />
              </div>
            </div>

            {/* Radio + Remove Button */}
            <div className='radio mt-4'>
              <h2 className='text-[16px] mb-1'>Independent Student</h2>
              <div className='flex justify-between items-center'>
                <div className='flex gap-2'>
                  <input className='w-5 accent-black' type='radio' />
                  <span>No</span>
                </div>

                {students.length > 1 && (
                  <Button
                    className='px-6 py-3 text-[#EB5757]'
                    variant='outline'
                    onClick={removeLastStudent}
                  >
                    Remove Student
                  </Button>
                )}
              </div>
            </div>
          </div>

          {/* Active Student Form */}
          <div className="p-4 border border-gray-300 rounded-lg mb-4">
            <h3 className="text-xl font-medium mb-3">
              {activeStudent.displayName || `Student ${activeStudent.id}`}
            </h3>
            
            {/* Student Name */}
            <div className="mb-4">
              <h2 className='text-[16px]'>Student Name *</h2>
              <Input 
                type='text' 
                placeholder='Enter student name'
                value={activeStudent.name}
                onChange={(e) => updateStudentData(activeStudentId, 'name', e.target.value)}
              />
            </div>
            
            {/* Charter School */}
            <div className='mb-4'>
              <h2 className='text-[16px]'>Charter School *</h2>
              <Select
                value={activeStudent.school}
                onValueChange={(value) => updateStudentData(activeStudentId, 'school', value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue className='text-[18px]' placeholder="Select School" />
                </SelectTrigger>
                <SelectContent className='text-[18px] bg-white'>
                  <SelectItem value="school1">Mountain View School</SelectItem>
                  <SelectItem value="school2">Valley High School</SelectItem>
                  <SelectItem value="school3">Riverside Academy</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            {/* Age & Gender */}
            <div className='w-full flex justify-center items-center gap-4 mx-auto'>
              <div className='w-full'>
                <h2 className='text-[16px]'>Age (Yrs) *</h2>
                <Select
                  value={activeStudent.age}
                  onValueChange={(value) => updateStudentData(activeStudentId, 'age', value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue className='text-[18px]' placeholder="Enter age" />
                  </SelectTrigger>
                  <SelectContent className='text-[18px] bg-white'>
                    {Array.from({ length: 18 }, (_, i) => i + 3).map(age => (
                      <SelectItem key={age} value={age.toString()}>{age}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className='w-full'>
                <h2 className='text-[16px]'>Gender *</h2>
                <Select
                  value={activeStudent.gender}
                  onValueChange={(value) => updateStudentData(activeStudentId, 'gender', value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue className='text-[18px]' placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent className='text-[18px] bg-white'>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
);




const handleSubmit = () => {
  if (!studentName || !school || !age || !gender || !parentName || !parentEmail || !parentPhone) {
    alert('Please fill in all required fields.');
    return;
  }

  // Form submission logic here (API call, console log, etc.)
  console.log({
    studentName,
    school,
    age,
    gender,
    parentName,
    parentEmail,
    parentPhone,
  });

  // Show confirmation 
  setShowPopup(true);
};

const handleProceed = () => {
  navigate('/payment-screen', {
    state: {
      from: 'Independent', // or any other data you want to pass
      // you can include other fields too, like: students, formData, etc.
    },
  });
};
  
  

  return (
    <div>
      {/* Header */}
          <div className="relative w-full">
    {/* Background Image */}
    <img
      src="/Pe-courses-main-image-2.svg"
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
     Checkout
        </span>
        
      </div>
      </div>
      </div>
      {/* Below Content */}
      <div className='flex flex-col gap-[40px] mx-[110px]'>
        {/* for charter student */}
    { from == "Charter" &&   <div className="progress flex flex-col justify-center items-center my-8 w-[50%] mx-auto">
        <div className='flex justify-center items-center'>
          <div className='w-10 h-10 border-[2px] border-[#1B69FF]  bg-[#1B69FF] rounded-full flex justify-center items-center'>
          <FaCheck className='text-white bg-[#1B69FF] text-[25px] '/>

          </div>
<div className='w-[380px] h-[1px] bg-[#1B69FF]'/>
<div className='w-10 h-10 border-[2px] border-[#1B69FF] rounded-full flex justify-center items-center'/>
        </div>
        <div className=' w-[95%] flex justify-between items-center'><p className='text-[20px] text-[#1B69FF]'>
        Select Membership</p> <p className='text-[20px] text-[#484A5C]'>Fill Student Details</p></div>
        </div>}
        {/* for independent students */}
     { from == "Independent" &&   <div className="progress flex flex-col justify-center items-center my-8 w-[50%] mx-auto">
        <div className='flex justify-center items-center'>
          <div className='w-10 h-10 border-[2px] border-[#1B69FF]  bg-[#1B69FF] rounded-full flex justify-center items-center'>
          <FaCheck className='text-white bg-[#1B69FF] text-[25px] '/>

          </div>
<div className='w-[200px] h-[1px] bg-[#1B69FF]'/>
<div className='w-10 h-10 border-[2px] border-[#1B69FF] rounded-full flex justify-center items-center'/>
<div className='w-[200px] h-[1px] bg-[#1B69FF]'/>

<div className='w-10 h-10 border-[2px] border-[#1B69FF] rounded-full flex justify-center items-center'/>
        </div>
        <div className=' w-[100%] flex justify-between items-center'>
          <p className='text-[20px] text-[#1B69FF]'>
        Select Membership</p>
         <p className='text-[20px] text-[#484A5C]'>Fill Student Details</p>
         <p className='text-[20px] text-[#484A5C]'>Payment Details</p>
         </div>
        </div>
      }
      <div className='flex gap-[40px]'>
        {/* Session details */}
        <div className='flex w-3/5 flex-col gap-[40px]'>
        <div className=' '>
   <Accordion type="single" collapsible className="px-5 py-[4px] border-[1px] border-[#484A5C] border-b-[12px]  rounded-[16px]">
      <AccordionItem value="session">
      <AccordionTrigger
  style={{ fontFamily: 'Clash Display', fontWeight: 500 }}
  className="text-[32px] hover:no-underline flex justify-between items-center group "
>
  <span>Session Details</span>
  
  {/* Custom ChevronDown Icon */}
  
              <ChevronDown className="h-8 w-8 transition-transform duration-300 group-data-[state=open]:rotate-180" />
</AccordionTrigger>

  <AccordionContent>
        <table className="w-full border text-[18px] mx-5  border-gray-300">
    <tbody className='px-4'>
      {/* Row 1 */}
      <tr className="border-b border-gray-300">
        <td className="bg-[#f0f0f0] p-3 fomt-normal text-gray-600">Course Name</td>
        <td className="p-3">Table Tennis</td>
      </tr>

     

      <>
      {/* Row 2 */}
      <tr className="border-b border-gray-300">
        <td className="bg-[#f0f0f0] p-3 fomt-normal text-gray-600">Location</td>
        <td className="p-3">City Park</td>
      </tr>
      
      {/* Row 3 */}
      <tr className="border-b border-gray-300">
        <td className="bg-[#f0f0f0] p-3 fomt-normal text-gray-600">Session ID</td>
        <td className="p-3">
          <a href="https://maps.google.com/?q=1001 Cambridge Pl, Tracy, CA 95377" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
          #0101
          </a>
        </td>
      </tr>
      </>

   
      
      {/* Row 4 */}
      <tr className="border-b border-gray-300">
        <td className="bg-[#f0f0f0] p-3 fomt-normal text-gray-600">Location</td>
        <td className="p-3">Mondays, Fridays</td>
      </tr>
      
      {/* Row 5 */}
      <tr className="border-b border-gray-300">
        <td className="bg-[#f0f0f0] p-3 fomt-normal text-gray-600">Days</td>
        <td className="p-3">60 mins</td>
      </tr>

      {/* Row 6 */}
      <tr className="border-b border-gray-300">
        <td className="bg-[#f0f0f0] p-3 fomt-normal text-gray-600">Timing </td>
        <td className="p-3">10:00 a.m - 11:00 a.m</td>
      </tr>

      {/* Row 7 */}
      <tr>
        <td className="bg-[#f0f0f0] p-3 fomt-normal text-gray-600">Session Period</td>
        <td className="p-3">Monthly</td>
      </tr>
    </tbody>
  </table>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
      </div>
<div className='Student Details'>
   <Accordion type="single"  collapsible className="  border-[1px] px-5 py-[4px] border-[#484A5C] border-b-[12px]  rounded-[16px]">
      <AccordionItem value="session">
      <AccordionTrigger
  style={{ fontFamily: 'Clash Display', fontWeight: 500 }}
  className="text-[32px] hover:no-underline flex justify-between items-center group "
>
  <span>Student Details</span>
  
  {/* Custom ChevronDown Icon */}
  
              <ChevronDown className="h-8 w-8 transition-transform duration-300 group-data-[state=open]:rotate-180" />
</AccordionTrigger>

  <AccordionContent className='flex flex-col gap-[20px]'>
<div>
<h2 className='text-[16px]'> Joining Date * </h2>

<input className='w-full px-3 py-[8px] border-[1px] border-[#484A5C] rounded-[8px]' type="date" name="" id="" />

</div>


<div>
      {/* Top Section: Students + Single Add Button */}
      <div className='flex justify-between items-center'>
        <div className='flex flex-wrap gap-[12px] items-center'>
          {students.map((student, index) => (
            <span
              key={index}
              className='px-5 py-2 text-[18px] text-white bg-[#484A5C] rounded-[8px]'
            >
              {student}
            </span>
          ))}
          <AiOutlinePlus
            onClick={addStudent}
            className='cursor-pointer border-[1px] border-black text-[40px] rounded-[8px] p-1'
          />
        </div>
      </div>

      {/* Radio + One Remove Button (Only if more than one student) */}
      <div className='radio mt-4'>
        <h2 className='text-[16px] mb-1'>Independent Student</h2>
        <div className='flex justify-between items-center'>
          <div className='flex gap-2'>
            <input className='w-5 accent-black' type='radio' />
            <span>No</span>
          </div>

          {students.length > 1 && (
            <Button
              className='px-6 py-3 text-[#EB5757]'
              variant='outline'
              onClick={removeLastStudent}
            >
              Remove Student
            </Button>
          )}
        </div>
      </div>
    </div>
     <div>
      <h2 className='text-[16px]'> Student Name * </h2>
     <Select>
  <SelectTrigger className="w-full ">
    <SelectValue  className='text-[18px]' placeholder="Theme" />
  </SelectTrigger>
  <SelectContent className='text-[18px] bg-white'>
    <SelectItem value="light">Parteek</SelectItem>
    <SelectItem value="dark">Mohan</SelectItem>
    <SelectItem value="system">Sohan</SelectItem>
  </SelectContent>
</Select>

           </div>
     <div className='select school'>
      <h2 className='text-[16px]'> Charter School *  </h2>
     <Select>
  <SelectTrigger className="w-full ">
    <SelectValue className='text-[18px]' placeholder="Select School" />
  </SelectTrigger>
  <SelectContent className='text-[18px] bg-white'>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>

           </div>
           <div className='w-full age-gender flex justify-center items-center gap-4  mx-auto'>
           <div className='w-full'>
      <h2 className='text-[16px]'> Age (Yrs) *   </h2>
     <Select >
  <SelectTrigger className="w-full   ">
    <SelectValue className='text-[18px]' placeholder="Enter age" />
  </SelectTrigger>
  <SelectContent className='text-[18px] bg-white'>
    <SelectItem value="light">Light</SelectItem>
    <SelectItem value="dark">Dark</SelectItem>
    <SelectItem value="system">System</SelectItem>
  </SelectContent>
</Select>

           </div>
           <div className='w-full'>
      <h2 className='text-[16px]'> Gender *  </h2>
     <Select>
  <SelectTrigger className="w-full ">
    <SelectValue className='text-[18px]' placeholder="SSelect" />
  </SelectTrigger>
  <SelectContent className='text-[18px] bg-white'>
    <SelectItem value="light">Male</SelectItem>
    <SelectItem value="dark">Female</SelectItem>
    <SelectItem value="system">Others</SelectItem>
  </SelectContent>
</Select>

           </div>
           </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
      </div>
      <div className='w-full '>
   <Accordion type="single" collapsible className="px-5 py-[4px] border-[1px] border-[#484A5C] border-b-[12px]  rounded-[16px]">
      <AccordionItem value="session">
      <AccordionTrigger
  style={{ fontFamily: 'Clash Display', fontWeight: 500 }}
  className="text-[32px] hover:no-underline  flex justify-between items-center group "
>
  <span>Parent Details</span>
  
  {/* Custom ChevronDown Icon */}
  
              <ChevronDown className="h-8 w-8 transition-transform duration-300 group-data-[state=open]:rotate-180" />
</AccordionTrigger>

  <AccordionContent>
      <div className='flex flex-col gap-[20px]'>
        <div>
        <h2 className='text-[16px]'> Parent Name *   </h2>
        <Input  value={parentName}
  onChange={(e) => setParentName(e.target.value)} type='text' placeholder='Parent Name'/>
        </div>
        <div>
        <h2 className='text-[16px]'> Parent Email ID *   </h2>
      <Input type='' placeholder=' enter Email ID *'/>
        </div>
        <div>
        <div className='flex flex-col '>
  <h2 className='text-[16px]'> Parent Phone Number *   </h2>

  <div className={`bg-white  px-2 border-[1px] rounded-[6px]`}>

    <PhoneInput
      country={'in'}
      value={parentPhone}
  onChange={(phone) => setParentPhone(phone)}
      // value={formData.phone}
      // onChange={(value) => handleChange('phone', value)}
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
  {/* {errors.phone && <p className="text-red-500 text-[12px]">{errors.phone}</p>} */}
</div>
        </div>
     

      </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
      </div>

        </div>
        <div className='w-2/5 h-min bg- overflow-hidden  border-[1px] border-[#484A5C] border-b-[12px]  rounded-[16px]'>
        <div className="relative flex justify-center items-center">
  <img className="w-full" src="/order-summary-image.png" alt="" />
  <h2 className="absolute inset-0 flex items-center justify-center text-white text-3xl font-semibold">
    Order Summary
  </h2></div>


<div className='p-[40px] flex flex-col gap-[24px]'>
  <div className='bg-[#F4E5FF] flex flex-col gap-[8px] p-[24px] rounded-[16px]'>
    <div className='flex justify-between items-center text-[20px] '><span>Cost for First student</span> <span>63$</span></div>
    <div className='flex justify-between items-center text-[20px] '><span>Cost for  Sibling</span> <span>63$</span></div>
  </div>
  <div className='flex justify-between items-center text-[20px] '><span>Mohit Asnani</span> <span>63$</span></div>
  <div className='w-full h-[1px] bg-[#808080]'/>
  <div className='flex justify-between items-center text-[20px] '><span>Grand total</span> <span>63$</span></div>




</div>
        </div>

      </div>
      <div className='terms and condiion'>
   <Accordion type="single" collapsible className=" border-[1px] px-5 py-[4px] border-[#484A5C] border-b-[12px]  rounded-[16px]">
      <AccordionItem value="session">
      <AccordionTrigger
  style={{ fontFamily: 'Clash Display', fontWeight: 500 }}
  className="text-[32px] flex hover:no-underline justify-between items-center group "
>
  <span>Terms and Conditions</span>
  
  {/* Custom ChevronDown Icon */}
  
              <ChevronDown className="h-8 w-8 transition-transform duration-300 group-data-[state=open]:rotate-180" />
</AccordionTrigger>

  <AccordionContent>
    <div>

    </div>
  <div className="text-[16px] space-y-4">
  <ul className="list-disc list-inside space-y-2">
      <li>Participant acknowledges assumption of risk and full release from liability of Local Fitness Solution, DeRoche LLC and Youth Movement. Participant acknowledges that personal training/ fitness classes and all other instructional classes hereunder includes participation in strenuous physical activities, including not limited to aerobic fitness, body weight training, weight training, stability and suspension training. Participant acknowledges these physical activities involve inherent risk of physical injuries or other damages, including but not limited to heart attacks, muscle strains, pull or tears, broken bones, shin splints, heart prostration, knee, lower back, foot and other injuries. Soreness, or injury however caused, could occur during or after member’s participation in the physical activities. By signing this agreement, member asserts that he or she is capable of participating in strenuous physical activity and releases the liability of Local Fitness Solution, DeRoche LLC and Youth Movement from any and all damages and/or sustained injuries from this fitness program.</li>
      <li>Member acknowledges that monthly prices are to be paid in full regardless of the amount of times the student attends class. Pro-rates are offered if paid ahead of time. Class material and facility fees are derived off of the assumed class size and location.</li>
    </ul>
 <h4  style={{ fontFamily: 'Clash Display', fontWeight: 500 }} className='text-[20px] my-3'>COVID Waiver Terms</h4>
  <ul className="list-disc list-inside space-y-2">
 <li> I acknowledge the contagious nature of the Coronavirus/COVID-19 and that the CDC and many other public health authorities still recommend practicing social distancing. </li>  
 <li>I further acknowledge that DeRoche LLC and Youth Movement has put in place preventative measures to reduce the spread of the Coronavirus/COVID-19.  </li> 
 <li> I further acknowledge that DeRoche LLC and Youth Movement cannot guarantee that my family and I will not become infected with the Coronavirus/Covid-19.  </li> 
    <li> I understand that the risk of becoming exposed to and/or infected by the Coronavirus/COVID-19 may result from the actions, omissions, or negligence of myself and others, including, but not limited to, fitness staff, and other fitness clients and their families.  </li> 
    <li> I voluntarily seek services provided by DeRoche LLC and Youth Movement and acknowledge that I am increasing my risk to exposure to the Coronavirus/COVID-19.  </li> 
    <li>I acknowledge that I must comply with all set procedures to reduce the spread while attending my appointment.</li> 
    </ul>

  <p className="font-semibold">I attest that:</p>

  <ul className="list-disc list-inside space-y-2">
    <li>I am not experiencing any symptoms of illness such as cough, shortness of breath or difficulty breathing, fever, chills, repeated shaking with chills, muscle pain, headache, sore throat, or new loss of taste or smell.</li>
    <li>I have not traveled internationally within the last 14 days.</li>
    <li>I have not traveled to a highly impacted area within the United States of America in the last 14 days.</li>
    <li>I do not believe I have been exposed to someone with a suspected and/or confirmed case of the Coronavirus/COVID-19.</li>
    <li>I have not been diagnosed with Coronavirus/Covid-19 and not yet cleared as non-contagious by state or local public health authorities.</li>
    <li>I am following all CDC recommended guidelines as much as possible and limiting my exposure to the Coronavirus/COVID-19.</li>
  </ul>

  <p>
    I hereby release and agree to hold DeRoche LLC and Youth Movement harmless from, and waive on behalf of myself, my heirs, and any personal representatives any and all causes of action, claims, demands, damages, costs, expenses and compensation for damage or loss to myself and/or property that may be caused by any act, or failure to act of the fitness professionals, or that may otherwise arise in any way in connection with any services received from DeRoche LLC and Youth Movement.  
    I understand that this release discharges DeRoche LLC and Youth Movement from any liability or claim that I, my heirs, or any personal representatives may have against the company with respect to any bodily injury, illness, death, medical treatment, or property damage that may arise from, or in connection to, any services received from DeRoche LLC and Youth Movement.  
    This liability waiver and release extends to the salon together with all owners, partners, and employees.
  </p>
</div>


        </AccordionContent>
      </AccordionItem>
    </Accordion>
      </div>
      <div className='flex flex-col  gap-[14px]'>
      <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-[20px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
     I agree to all Terms & Conditions.
      </label>
    </div>
      <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-[20px] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
    I agree to all COVID Wavier Terms.
      </label>
    </div>
      </div>
   
      </div>
      <div className='my-5 flex flex-col mt-[150px] gap-4'>
        <div className='  w-full h-[1px] bg-[#808080]'/>
        <div  className='flex gap-[10px] text-[18px] justify-end  mr-[100px]' >
        <Button onClick={() => navigate(-1)} className='px-6 py-4 cursor-pointer' variant="outline">Back</Button>     
        {from=="Independent" && <Button           onClick={handleProceed}
 className='bg-[#484A5C] text-white px-6 py-5 coursor-pointer'>Proceed to payment</Button>}
        {from=="Charter" && <Button  onClick={() => setShowPopup(true)} className='bg-[#484A5C] text-white px-6 py-5 cursor-pointer'>Enroll In the Class</Button>}
        {/* when Proceed to paayment -checkout component */}
       
        </div>
        {showPopup && <RequestSubmittedPopUp navigate={navigate} onClose={() => setShowPopup(false)} />}


      </div>
    </div>
  )
}

export default CharterSchoolFirstStudent