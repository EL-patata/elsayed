import React from "react";
import { Menu, Bell, Search } from "lucide-react";
import Logo from "@/assets/logo.png"; // Assuming you have a logo image

const Navbar = ({ sidebarOpen, setSidebarOpen, darkMode, setDarkMode }) => {
  return (
    <nav
      className={`${
        darkMode ? "bg-gray-800/90" : "bg-white/90"
      } backdrop-blur-md border-b ${
        darkMode ? "border-gray-700" : "border-gray-100"
      } fixed w-full z-10 transition-colors duration-300`}
    >
      <div className="max-w -7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className={`p-2 rounded-lg ${
                darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
              } transition-colors`}
            >
              <Menu
                className={`h-5 w-5 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              />
            </button>
            <span className="text-xl font-bold bg-gradient-to-r from-lime-900 to-lime-900 text-transparent bg-clip-text">
              منصة جامعة الأقصر للاستدامة
            </span>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="بحث..."
                className={`w-64 px-4 py-2 pr-10 rounded-full ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    : "bg-gray-50 border-none text-gray-900"
                } focus:ring-2 focus:ring-blue-500 transition-colors`}
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg ${
                darkMode
                  ? "bg-gray-700 text-yellow-400"
                  : "bg-gray-100 text-gray-700"
              } transition-colors`}
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
            <button className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <Bell
                className={`h-5 w-5 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              />
              <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            <div className="relative flex items-center gap-2">
              <img
                className="h-10 w-10 rounded-full ring-2 ring-blue-500"
                src={Logo}
                alt="User"
              />
              <span
                className={`text-sm font-medium ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                } hidden md:block`}
              >
                المدير
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
