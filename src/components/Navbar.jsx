import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white bg-opacity-90 p-4 flex justify-between items-center shadow-md">
      <div className="flex items-center space-x-4">
        <img 
          src="https://th.bing.com/th/id/OIP._C2k2Ch7PYiWPW6G0Chr-gAAAA?rs=1&pid=ImgDetMain" 
          alt="NIT Uttarakhand Logo" 
          className="h-16"
        />
        <h1 className="text-3xl font-semibold text-blue-600">National Institute of Technology, Uttarakhand</h1>
      </div>
      <div className="space-x-6 text-lg">
      <Link to="/" className="hover:text-blue-500 transition">Home</Link>
        <Link to="/About" className="hover:text-blue-500 transition">About</Link>
          <Link to="/others" className="hover:text-blue-500 transition">Other links</Link>
          <Link to="/contact" className="hover:text-blue-500 transition">Contact Us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
