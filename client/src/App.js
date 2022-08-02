import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/About";
import Services from "./pages/Services/Services";
import ImportantDocuments from "./pages/Documents/Documents";
import InstituteLogin from "./pages/InstituteLogin/InstituteLogin";
import OfficerLogin from "./pages/OfficerLogin/OfficerLogin";
import Navbar from "./components/Navbar/Navbar";
import Service1 from "./pages/Services/service1/service1.jsx";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
// import PrivateRoute from "./components/routing/PrivateRoute";
import PrivateScreen from "./components/screens/PrivateScreen";
import InstituteLanding from "./components/screens/InstituteLanding.js";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/officer/dashboard" element={<PrivateScreen />} />
        <Route path="/" exact element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Service1" element={<Service1 />} />
        <Route path="/importantDocuments" element={<ImportantDocuments />} />
        <Route path="/instituteLogin" element={<InstituteLogin />} />
        <Route path="/officerLogin" element={<OfficerLogin />} />
        <Route path="/institute/dashboard" element={<InstituteLanding />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/passwordreset/:resetToken" element={<ResetPassword />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
