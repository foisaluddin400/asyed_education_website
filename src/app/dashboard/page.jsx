"use client";
import React, { useState } from "react";
import {
  LayoutDashboard,
  UserPlus,
  BookOpen,
  MessageCircle,
  Home,
  Settings,
  ChevronDown,
} from "lucide-react";
import Dashboard from "@/components/dashboardPage/Dashboard";
import AddChilds from "@/components/dashboardPage/AddChilds";
import ManageTutions from "@/components/dashboardPage/ManageTutions";
import Consultatio from "@/components/dashboardPage/Consultatio";

const AdminLayout = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "addchilds", label: "Add Childs", icon: UserPlus },
    { id: "managetutions", label: "Manage Tutions", icon: BookOpen },
    { id: "consultation", label: "Consultation Meeting", icon: MessageCircle },
  ];

  // Function to switch pages
  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "addchilds":
        return <AddChilds />;
      case "managetutions":
        return <ManageTutions />;
      case "consultation":
        return <Consultatio />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-[82vh] container mx-auto">
      {/* Sidebar */}
      <div className="w-64 bg-primary text-white flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-teal-500">
          <Home className="w-8 h-8 mr-3" />
          <span className="text-xl font-semibold">Dashboard</span>
        </div>

        <nav className="flex-1 px-4 py-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center px-4 py-4 mb-2 rounded-lg transition-all ${
                  isActive
                    ? "bg-white text-teal-600 shadow-lg font-medium"
                    : "text-teal-50 hover:bg-teal-500 hover:text-white"
                }`}
              >
                <Icon className="w-6 h-6 mr-4" />
                <span className="text-left">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Settings */}
       
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="bg-white p-5">
         

          <div className=" ">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
