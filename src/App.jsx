import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AllCourses from "./components/AllCourses";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfUse from "./components/TermsOfUse";
import Error from "./components/Error";
import Faqs from "./components/Faqs.jsx";
import Resetpassword from "./components/Resetpassword.jsx";
import Community from "./components/Community.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/resetpassword" element={<Resetpassword />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/courses" element={<AllCourses />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path='/community' element={<Community />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
