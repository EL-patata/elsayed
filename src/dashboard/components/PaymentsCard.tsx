import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const PaymentsCard = ({ apartments, darkMode }) => {
  const rentedApartments = apartments
    .filter((apt) => apt.status === "مؤجر")
    .slice(0, 3);

  return (
    <Card
      className={`border-none ${
        darkMode ? "bg-gray-800" : "bg-white"
      } shadow-md`}
    >
      <CardContent className="p-6">
        <h3
          className={`text-lg font-medium ${
            darkMode ? "text-white" : "text-gray-800"
          } mb-4`}
        >
          المدفوعات القادمة
        </h3>
        <div className="space-y-3">
          {rentedApartments.map((apt, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-lg ${
                darkMode ? "bg-gray-700/50" : "bg-gray-50"
              } flex justify-between items-center`}
            >
              <div>
                <p
                  className={`font-medium ${
                    darkMode ? "text-white" : "text-gray-800"
                  }`}
                >
                  الشقة {apt.number}
                </p>
                <p
                  className={`text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {apt.tenant}
                </p>
              </div>
              <div className="text-left">
                <p
                  className={`font-bold ${
                    darkMode ? "text-green-400" : "text-green-600"
                  }`}
                >
                  {apt.rent}
                </p>
                <p
                  className={`text-sm ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  تاريخ الاستحقاق: {apt.dueDate}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentsCard;
