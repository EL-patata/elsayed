import React from "react";
import {
  Users,
  Home,
  Bell,
  User,
  LogOut,
  DollarSign,
  BarChart3,
  Settings,
  Calendar,
} from "lucide-react";

const Sidebar = ({ sidebarOpen, activeTab, setActiveTab, darkMode }) => {
  const menuItems = [
    { icon: Home, label: "لوحة التحكم", id: "dashboard" },
    { icon: Users, label: "المستخدمون", id: "users" },
    { icon: BarChart3, label: "مراجعة الطلبات ", id: "apartments" },
    { icon: DollarSign, label: "التقارير والاحصائيات", id: "payments" },
    { icon: Calendar, label: "ادارة اهداف الاستدامة ", id: "schedule" },
    { icon: User, label: "الملف الشخصي", id: "profile" },
    { icon: Settings, label: "الإعدادات", id: "settings" },
  ];

  return (
    <aside
      className={`fixed right-0 top-16 h-full ${
        darkMode ? "bg-gray-800/90" : "bg-white/90"
      } backdrop-blur-md border-l ${
        darkMode ? "border-gray-700" : "border-gray-100"
      } transition-all duration-300 ${
        sidebarOpen ? "translate-x-0" : "translate-x-full"
      }`}
      style={{ width: "16rem" }}
    >
      <nav className="mt-6 px-3 space-y-1.5">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center px-4 py-3 text-right rounded-xl transition-all duration-200 ${
              activeTab === item.id
                ? darkMode
                  ? "bg-blue-900/30 text-blue-400 shadow-sm shadow-blue-900/20"
                  : "bg-blue-50 text-blue-700 shadow-sm"
                : darkMode
                ? "text-gray-300 hover:bg-gray-700/50"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <item.icon className="ml-3 h-5 w-5" />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
        <button
          className={`w-full flex items-center px-4 py-3 text-right rounded-xl ${
            darkMode
              ? "text-red-400 hover:bg-red-900/20"
              : "text-red-600 hover:bg-red-50"
          } transition-colors mt-4`}
        >
          <LogOut className="ml-3 h-5 w-5" />
          <span className="font-medium">تسجيل الخروج</span>
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
