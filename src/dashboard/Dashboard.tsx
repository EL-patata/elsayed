import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import DashboardPage from "./pages/DashboardPage";
import UsersPage from "./pages/UsersPage";
import ApartmentsPage from "./pages/ApartmentsPage";

// Data moved to separate files
// import { users } from "./data/users";
// import { apartments } from "./data/apartments";

function Dashboard() {

  const [users, setUsers] = useState([
    { id: 1, name: "أحمد", email: "", role: "مدير", joined: "2023-01-01" },
  ]);
  const [apartments, setApartments] = useState([
    {
      id: 1,
      name: "شقة 101",
      status: "مؤجر",
      rent: "1000",
      tenant: "أحمد",
      dueDate: "2023-10-01",
      lastPayment: "2023-09-01",
      maintenance: "لا",

      maintenanceDue: "2023-10-01",
      maintenanceStatus: "لا",
    },
  ]);

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [darkMode, setDarkMode] = useState(false);

  // Calculate statistics
  const totalRentedApartments = apartments.filter(
    (a) => a.status === "مؤجر"
  ).length;
  const occupancyRate = Math.round(
    (totalRentedApartments / apartments.length) * 100
  );
  const monthlyRevenue = apartments
    .filter((a) => a.status === "مؤجر")
    .reduce((sum, apt) => sum + parseInt(apt.rent.replace(/\D/g, "")), 0);

  const themeClass = darkMode ? "dark bg-gray-900 text-white" : "bg-gray-50";

  return (
    <div
      className={`min-h-screen ${themeClass} transition-colors duration-300 rtl`}
      dir="rtl"
    >
      <Navbar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <Sidebar
        sidebarOpen={sidebarOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        darkMode={darkMode}
      />

      <main
        className={`transition-all duration-300 ${
          sidebarOpen ? "mr-64" : "mr-0"
        } pt-24 px-6 lg:px-8`}
      >
        {activeTab === "dashboard" && (
          <DashboardPage
            darkMode={darkMode}
            apartments={apartments}
            totalRentedApartments={totalRentedApartments}
            occupancyRate={occupancyRate}
            monthlyRevenue={monthlyRevenue}
          />
        )}

        {activeTab === "users" && (
          <UsersPage darkMode={darkMode} users={users} />
        )}

        {activeTab === "apartments" && (
          <ApartmentsPage darkMode={darkMode} apartments={apartments} />
        )}
      </main>
    </div>
  );
}

export default Dashboard;
