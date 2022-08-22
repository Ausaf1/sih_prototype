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
import Service2 from "./pages/Services/service2/service2.js";
import EmailSend from "./pages/Services/service3/empanelForm";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import PrivateRoute from "./components/routing/PrivateRoute";
import PrivateScreen from "./components/screens/PrivateScreen";
import InstituteRoute from "./components/routing/InstituteRoute";
import InstituteScreen from "./components/screens/InstitueScreen";
import ListInstitute from "./pages/ListInstitutes/ListInstitute";
import SelectedList from "./pages/SelectedList/SelectedList";
import Profile from "./pages/Institute_Side/profile/profile";
import Table from "./pages/Institute_Side/Table/table";
import StudentForm from "./pages/Institute_Side/studentForm/studentForm";
import Footer from "./components/Footer/Footer";
import EditProfile from "./pages/Institute_Side/EditProfile/EditProfile";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/officer/dashboard" element={<PrivateRoute />}>
          <Route path="/officer/dashboard" element={<PrivateScreen />} />
        </Route>
        <Route exact path="/institute/dashboard" element={<InstituteRoute />}>
          <Route path="/institute/dashboard" element={<InstituteScreen />} />
        </Route>
        <Route path="/" exact element={<Home />} />
        <Route path="/studentList/:id" element={<Table />} />
        <Route path="/Service3" element={<Profile />} />

        <Route path="/addStudent" element={<StudentForm />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/faq" element={<Service1 />} />
        <Route path="/feedback" element={<Service2 />} />
        <Route path="/Service3" element={<EmailSend />} />
        <Route path="/importantDocuments" element={<ImportantDocuments />} />
        <Route path="/instituteLogin" element={<InstituteLogin />} />
        <Route path="/officerLogin" element={<OfficerLogin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/passwordreset/:resetToken" element={<ResetPassword />} />
        <Route path="/listInstitutes" element={<ListInstitute />} />
        <Route path="/selectedList" element={<SelectedList />} />
        <Route path="/editProfile/:id" element={<EditProfile />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
