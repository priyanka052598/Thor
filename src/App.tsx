import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home/Index'

import PeCourses from './Pages/PeCourses/Index'
import ContactUs from './Pages/ContactUs/Index';
import CharterSchool from './Pages/CharterSchool/Index';
import PeCoursesSessions from './Pages/PeCourses/PeCoursesSessions/Index';
import AcademicCourses from './Pages/AcademicCourses/Index';
import VirtualPayment from './Pages/VirtualPayment/Index';
import CharterSchoolFirstStudent from './Pages/PeCourses/PeCoursesSessions/CheckoutScreens/CharterSchoolFirstStudent';
import PaymentDetails from './Pages/PeCourses/PeCoursesSessions/CheckoutScreens/PaymentDetails';

function App() {

  return (
 <Router>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/pe-courses" element={<PeCourses />} />
    <Route path='/Pe-Courses-session-screen' element={<PeCoursesSessions/>}></Route>
    <Route path="/contact-us" element={<ContactUs />} />
    <Route path='/charter-schools' element={<CharterSchool/> } />
    <Route path='/academic-courses' element={<AcademicCourses/> } />
    <Route path='/virtual-payment' element={<VirtualPayment/> } />
    <Route path='/Checkout-charter-school-first-student' element={<CharterSchoolFirstStudent/> } />
    <Route path='payment-screen' element={<PaymentDetails/>}/>


  </Routes>
 </Router>
  )
}

export default App
