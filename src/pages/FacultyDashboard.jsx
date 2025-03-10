import { Link, Route, Routes } from "react-router-dom";
import FacultyBooks from "../faculty/FacultyBooks";
import FacultyProfile from "../faculty/FacultyProfile";
import Navbar from "../components/Navbar";

const FacultyDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Navbar */}
      <Navbar />

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-green-700 text-white min-h-screen p-6 space-y-6 fixed">
          <h2 className="text-2xl font-bold text-center mb-4">Faculty Dashboard</h2>
          <ul className="space-y-4">
            <li>
              <Link to="/faculty-dashboard/faculty-books" className="block p-3 rounded-lg hover:bg-green-500 transition">
                📖 Books
              </Link>
            </li>
            <li>
              <Link to="/faculty-dashboard/profile" className="block p-3 rounded-lg hover:bg-green-500 transition">
                👤 Profile
              </Link>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-10 ml-64 bg-gray-100 min-h-screen">
          <Routes>
            <Route path="faculty-books" element={<FacultyBooks />} />
            <Route path="profile" element={<FacultyProfile />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default FacultyDashboard;
