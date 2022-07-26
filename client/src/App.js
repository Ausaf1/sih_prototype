import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/About";
import Services from "./pages/Services/Services";
import ImportantDocuments from "./pages/Documents/Documents";
import InstituteLogin from "./pages/InstituteLogin/InstituteLogin";
import StudentLogin from "./pages/StudentLogin/StudentLogin";
import OfficerLogin from "./pages/OfficerLogin/OfficerLogin";
import Navbar from "./components/Navbar/Navbar";
import Service1 from "./pages/Services/service1/service1.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/Services' element={<Services />} />
        <Route path='/Service1' element={<Service1 />} />
        <Route path='/importantDocuments' element={<ImportantDocuments />} />
        <Route path='/instituteLogin' element={<InstituteLogin />} />
        <Route path='/studentLogin' element={<StudentLogin />} />
        <Route path='/officerLogin' element={<OfficerLogin />} />
      </Routes>
    </Router>
  );
}

export default App;
