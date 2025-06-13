import React from "react";
import { Plus } from "lucide-react";
import { Card } from "@/components/ui/card";
import UsersTable from "../components/UsersTable";

const UsersPage = ({ darkMode, users }) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2
          className={`text-2xl font-bold ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
        >
          المستخدمون
        </h2>
        <button
          className={`flex items-center gap-2 ${
            darkMode
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-blue-600 hover:bg-blue-700"
          } text-white px-4 py-2 rounded-lg transition-colors shadow-sm hover:shadow-md`}
        >
          <Plus className="h-5 w-5" />
          <span>إضافة مستخدم</span>
        </button>
      </div>
      <Card
        className={`border-none ${
          darkMode ? "bg-gray-800" : "bg-white"
        } shadow-md`}
      >
        <UsersTable users={users} darkMode={darkMode} />
      </Card>
    </div>
  );
};

export default UsersPage;
