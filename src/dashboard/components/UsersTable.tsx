import React from "react";

const UsersTable = ({ users, darkMode }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className={darkMode ? "bg-gray-700/50" : "bg-gray-50/50"}>
          <tr>
            <th
              className={`px-6 py-4 text-right text-sm font-medium ${
                darkMode ? "text-gray-300" : "text-gray-500"
              }`}
            >
              الاسم
            </th>
            <th
              className={`px-6 py-4 text-right text-sm font-medium ${
                darkMode ? "text-gray-300" : "text-gray-500"
              }`}
            >
              البريد الإلكتروني
            </th>
            <th
              className={`px-6 py-4 text-right text-sm font-medium ${
                darkMode ? "text-gray-300" : "text-gray-500"
              }`}
            >
              الدور
            </th>
            <th
              className={`px-6 py-4 text-right text-sm font-medium ${
                darkMode ? "text-gray-300" : "text-gray-500"
              }`}
            >
              تاريخ الانضمام
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
          {users.map((user) => (
            <tr
              key={user.id}
              className={`${
                darkMode ? "hover:bg-gray-700/30" : "hover:bg-gray-50/50"
              } transition-colors`}
            >
              <td
                className={`px-6 py-4 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {user.name}
              </td>
              <td
                className={`px-6 py-4 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {user.email}
              </td>
              <td className="px-6 py-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    user.role === "مستأجر"
                      ? darkMode
                        ? "bg-blue-900/30 text-blue-400"
                        : "bg-blue-50 text-blue-700"
                      : user.role === "مالك"
                      ? darkMode
                        ? "bg-purple-900/30 text-purple-400"
                        : "bg-purple-50 text-purple-700"
                      : darkMode
                      ? "bg-green-900/30 text-green-400"
                      : "bg-green-50 text-green-700"
                  }`}
                >
                  {user.role}
                </span>
              </td>
              <td
                className={`px-6 py-4 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {user.joinDate}
              </td>
              <td className="px-6 py-4 flex items-center space-x-2">
                <button
                  className={`p-1 rounded-md ${
                    darkMode
                      ? "text-blue-400 hover:bg-blue-900/20"
                      : "text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  تعديل
                </button>
                <button
                  className={`p-1 rounded-md ml-2 ${
                    darkMode
                      ? "text-red-400 hover:bg-red-900/20"
                      : "text-red-600 hover:bg-red-50"
                  }`}
                >
                  حذف
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
