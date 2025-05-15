import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const StatCard = ({ stat, darkMode }) => {
  return (
    <Card
      className={`border-none ${
        darkMode
          ? "bg-gray-800 shadow-lg shadow-black/10"
          : "bg-white shadow-md hover:shadow-lg"
      } transition-all group hover:-translate-y-1`}
    >
      <CardContent className="p-6 flex justify-between items-center">
        <div>
          <h3
            className={`text-sm font-medium ${
              darkMode ? "text-gray-400" : "text-gray-500"
            }`}
          >
            {stat.title}
          </h3>
          <p
            className={`text-3xl font-bold mt-2 ${
              darkMode ? `text-${stat.color}-400` : `text-${stat.color}-600`
            }`}
          >
            {stat.value}
          </p>
        </div>
        <div
          className={`p-3 rounded-full ${
            darkMode
              ? `bg-${stat.color}-900/20 text-${stat.color}-400`
              : `bg-${stat.color}-50 text-${stat.color}-500`
          } group-hover:scale-110 transition-transform`}
        >
          <stat.icon className="h-6 w-6" />
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
