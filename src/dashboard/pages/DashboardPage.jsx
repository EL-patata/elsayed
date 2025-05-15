import React from "react";
import { Home, Users, BarChart3, DollarSign } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import StatCard from "../components/StatCard";
import ActivityCard from "../components/ActivityCard";
import PaymentsCard from "../components/PaymentsCard";

const DashboardPage = ({
  darkMode,
  apartments,
  totalRentedApartments,
  occupancyRate,
  monthlyRevenue,
}) => {
  const stats = [
    {
      title: "إجمالي عدد الطلبات",
      value: apartments.length,
      icon: Home,
      color: "blue",
    },
    {
      title: "اجمالى عدد المستخدمين ",
      value: totalRentedApartments,
      icon: Users,
      color: "green",
    },
    {
      title: "معدل الإشغال",
      value: `${occupancyRate}%`,
      icon: BarChart3,
      color: "purple",
    },
    // {
    //   title: " الشهرية",
    //   value: `$${monthlyRevenue}`,
    //   icon: DollarSign,
    //   color: "amber",
    // },
  ];

  const activities = [
    {
      action: "تم طلب استفسار جديد",
      user: "ليلى حسن",
      time: "قبل ساعتين",
    },
    {
      action: "تم طلب استفسار جديد",
      user: "أحمد محمد",
      time: "بالأمس",
    },
    {
      action: "تم طلب استفسار جديد",
      user: "محمد خالد",
      time: "قبل 3 أيام",
    },
    {
      action: "تم طلب استفسار جديد",
      user: "النظام",
      time: "قبل أسبوع",
    },
  ];

  return (
    <div className="space-y-8">
      <h1
        className={`text-3xl font-bold ${
          darkMode ? "text-white" : "text-gray-800"
        }`}
      >
        نظرة عامة على لوحة التحكم
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <StatCard key={idx} stat={stat} darkMode={darkMode} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ActivityCard activities={activities} darkMode={darkMode} />
        {/* <PaymentsCard apartments={apartments} darkMode={darkMode} /> */}
      </div>
    </div>
  );
};

export default DashboardPage;
