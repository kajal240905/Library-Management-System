import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen bg-[url('https://imgmedia.lbb.in/media/2018/01/5a64cb63f2377c0ef4861e97_57c4ac72474f25a725467b06_1516555107569.jpg')] bg-cover bg-center">
{/* /
      <nav className="w-full bg-white shadow-md fixed top-0 left-0 right-0 p-4 flex justify-between items-center z-50">
        <div className="flex justify-center w-[60%]">
          <img 
            src="https://i1.rgstatic.net/ii/institution.image/AS:276761880350720%401442996582387_l" 
            alt="NIT Uttarakhand Logo" 
            className="w-[70%] h-[100px] object-contain"
          />
        </div>
        <div className="space-x-6 text-lg font-medium text-gray-800 mr-20">
          <Link to="/" className="hover:text-blue-500 transition">Home</Link>
          <Link to="/About" className="hover:text-blue-500 transition">About</Link>
          <Link to="/others" className="hover:text-blue-500 transition">Other links</Link>
          <Link to="/contact" className="hover:text-blue-500 transition">Contact Us</Link>
         
        </div>
      </nav>

      */}
      <Navbar />

      <div className="fixed bottom-5 right-5">
        <Link 
          to="/login" 
          className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg shadow-lg hover:bg-blue-600 transition"
        >
          Login
        </Link>
      </div>

    </div>
  );
};

export default Home;
