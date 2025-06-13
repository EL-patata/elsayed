import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const ActivityCard = ({ activities, darkMode }) => {
  return (
    <Card
      className={`border-none col-span-2 ${
        darkMode ? "bg-gray-800" : "bg-white"
      } shadow-md`}
    >
      <CardContent className="p-6">
        <h3
          className={`text-lg font-medium ${
            darkMode ? "text-white" : "text-gray-800"
          } mb-4`}
        >
          النشاطات الأخيرة
        </h3>
        <div
          className={`space-y-4 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {activities.map((activity, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div
                className={`mt-1 w-2 h-2 rounded-full ${
                  darkMode ? "bg-blue-400" : "bg-blue-600"
                }`}
              ></div>
              <div>
                <p className="font-medium">{activity.action}</p>
                <div className="flex items-center mt-1 text-sm">
                  <span
                    className={darkMode ? "text-gray-400" : "text-gray-500"}
                  >
                    {activity.user}
                  </span>
                  <span
                    className={`mx-2 ${
                      darkMode ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    •
                  </span>
                  <span
                    className={darkMode ? "text-gray-500" : "text-gray-400"}
                  >
                    {activity.time}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityCard;
