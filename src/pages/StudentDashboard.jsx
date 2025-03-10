import { Link, Route, Routes } from "react-router-dom";
import YourBooks from "../assets/student/YourBooks";
import FeesStatus from "../assets/student/FeesStatus";
import Profile from "../assets/student/Profile";
import Navbar from "../components/Navbar";

const StudentDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navbar */}
      <Navbar />

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-blue-700 text-white min-h-screen p-6 space-y-6 fixed">
          <h2 className="text-2xl font-bold text-center mb-4">Student Dashboard</h2>
          <ul className="space-y-4">
            <li>
              <Link to="/dashboard/your-books" className="block p-3 rounded-lg hover:bg-blue-500 transition">
                📚 Your Books
              </Link>
            </li>
            <li>
              <Link to="/dashboard/fees-status" className="block p-3 rounded-lg hover:bg-blue-500 transition">
                💰 Fees Status
              </Link>
            </li>
            <li>
              <Link to="/dashboard/profile" className="block p-3 rounded-lg hover:bg-blue-500 transition">
                👤 Profile
              </Link>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-10 ml-64 bg-gray-100 min-h-screen">
          <Routes>
            <Route path="your-books" element={<YourBooks />} />
            <Route path="fees-status" element={<FeesStatus />} />
            <Route path="profile" element={<Profile />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;