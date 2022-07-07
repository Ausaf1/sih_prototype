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

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact component={Home} />
        <Route path='/AboutUs' component={AboutUs} />
        <Route path='/Services' component={Services} />
        <Route path='/importantDocuments' component={ImportantDocuments} />
        <Route path='/instituteLogin' component={InstituteLogin} />
        <Route path='/studentLogin' component={StudentLogin} />
        <Route path='/officerLogin' component={OfficerLogin} />
      </Routes>
    </Router>
  );
}

export default App;
