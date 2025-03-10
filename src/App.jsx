import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import FacultyDashboard from "./pages/FacultyDashboard";
 
const App = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/faculty-dashboard" element={<FacultyDashboard />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    );
  };
  
  export default App;
  