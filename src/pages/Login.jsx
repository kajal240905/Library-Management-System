import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    
    const studentPattern = /^(bt|mt)\d{2}(cse|eee|me|civ|ece)\d{3}$/;

  
    const facultyPattern = /^[a-zA-Z0-9._%+-]+@nituk$/;

    
    const adminPattern = /^admin@123$/;

    if (studentPattern.test(email)) {
      console.log("Student Logged In:", email);
      navigate("/student-dashboard");
    } else if (facultyPattern.test(email)) {
      console.log("Faculty Logged In:", email);
      navigate("/faculty-dashboard");
    } else if (adminPattern.test(email)) {
      console.log("Admin Logged In:", email);
      navigate("/admin-dashboard");
    } else {
      setError("Invalid login. Use bt23cse005, mt23eee005, name@nituk, or admin@123.");
    }
  };

  return (
<div>
  <Navbar />
    <div 
      className="min-h-screen flex items-center justify-center bg-cover bg-center" 
      style={{ backgroundImage: "url('https://imgmedia.lbb.in/media/2018/01/5a64cb63f2377c0ef4861e97_57c4ac72474f25a725467b06_1516555107569.jpg')" }}
    >
      
      
      <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">Library Login</h2>
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Enter ID (e.g., bt23cse005, mt23eee005, name@nituk, or admin@123)"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded mb-3"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded mb-3"
            required
          />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded shadow-lg">
            Login
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
