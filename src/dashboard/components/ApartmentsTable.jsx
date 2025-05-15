import React from "react";

const ApartmentsTable = ({ apartments, darkMode }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead
          className={darkMode ? "bg-gray-700/50" : "bg-gray-50/50"}
        >
          <tr>
            <th
              className={`px-6 py-4 text-right text-sm font-medium ${
                darkMode ? "text-gray-300" : "text-gray-500"
              }`}
            >
              رقم الشقة
            </th>
            <th
              className={`px-6 py-4 text-right text-sm font-medium ${
                darkMode ? "text-gray-300" : "text-gray-500"
              }`}
            >
              الطابق
            </th>
            <th
              className={`px-6 py-4 text-right text-sm font-medium ${
                darkMode ? "text-gray-300" : "text-gray-500"
              }`}
            >
              الحالة
            </th>
            <th
              className={`px-6 py-4 text-right text-sm font-medium ${
                darkMode ? "text-gray-300" : "text-gray-500"
              }`}
            >
              المستأجر
            </th>
            <th
              className={`px-6 py-4 text-right text-sm font-medium ${
                darkMode ? "text-gray-300" : "text-gray-500"
              }`}
            >
              الإيجار
            </th>
            <th
              className={`px-6 py-4 text-right text-sm font-medium ${
                darkMode ? "text-gray-300" : "text-gray-500"
              }`}
            >
              الإجراءات
            </th>
          </tr>
        </thead>
        <tbody
          className={`divide-y ${
            darkMode ? "divide-gray-700" : "divide-gray-100"
          }`}
        >
          {apartments.map((apartment) => (
            <tr
              key={apartment.id}
              className={`${
                darkMode
                  ? "hover:bg-gray-700/30"
                  : "hover:bg-gray-50/50"
              } transition-colors`}
            >
              <td
                className={`px-6 py-4 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {apartment.number}
              </td>
              <td
                className={`px-6 py-4 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {apartment.floor}
              </td>
              <td className="px-6 py-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    apartment.status === "مؤجر"
                      ? darkMode
                        ? "bg-green-900/30 text-green-400"
                        : "bg-green-50 text-green-700"
                      : apartment.status === "شاغر"
                      ? darkMode
                        ? "bg-yellow-900/30 text-yellow-400"
                        : "bg-yellow-50 text-yellow-700"
                      : darkMode
                      ? "bg-red-900/30 text-red-400"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {apartment.status}
                </span>
              </td>
              <td
                className={`px-6 py-4 ${