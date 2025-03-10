import { Link, Route, Routes } from "react-router-dom";
import ManageBooks from "../admin/ManageBooks";
import ManageUsers from "../admin/ManageUsers";
import Reports from "../admin/Reports";
import Navbar from "../components/Navbar";


const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-red-900 text-white min-h-screen p-6 space-y-6 fixed overflow-y-auto">
          <h2 className="text-2xl font-bold text-center mb-4">Admin Dashboard</h2>
          <ul className="space-y-4">
            <li>
              <Link to="/admin/manage-books" className="block p-3 rounded-lg hover:bg-red-500 transition">
                📖 Manage Books
              </Link>
            </li>
            <li>
              <Link to="/admin/manage-users" className="block p-3 rounded-lg hover:bg-red-500 transition">
                👥 Manage Users
              </Link>
            </li>
            <li>
              <Link to="/admin/reports" className="block p-3 rounded-lg hover:bg-red-500 transition">
                📊 Reports
              </Link>
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-10 ml-64 bg-gray-100 min-h-screen">
          <Routes>
            <Route path="manage-books" element={<ManageBooks />} />
            <Route path="manage-users" element={<ManageUsers />} />
            <Route path="reports" element={<Reports />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
