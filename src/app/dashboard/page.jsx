"use client";
import React, { useState } from "react";
import {
  LayoutDashboard,
  UserPlus,
  BookOpen,
  MessageCircle,
  Home,
  Menu,
  X,
} from "lucide-react";
import Dashboard from "@/components/dashboardPage/Dashboard";
import AddChilds from "@/components/dashboardPage/AddChilds";
import ManageTutions from "@/components/dashboardPage/ManageTutions";
import Consultatio from "@/components/dashboardPage/Consultatio";

const AdminLayout = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "addchilds", label: "Add Childs", icon: UserPlus },
    { id: "managetutions", label: "Manage Tutions", icon: BookOpen },
    { id: "consultation", label: "Consultation Meeting", icon: MessageCircle },
  ];

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
    <div className="flex h-screen  bg-gray-50">
      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-primary text-white flex flex-col transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Sidebar Header */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-teal-500">
          <div className="flex items-center">
            <Home className="w-8 h-8 mr-3" />
            <span className="text-xl font-semibold">Dashboard</span>
          </div>
          {/* Close button for mobile */}
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="lg:hidden"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsSidebarOpen(false); // Close sidebar on mobile after click
                }}
                
                className={`w-full flex items-center px-4 py-4 mb-2 rounded-lg transition-all ${
                  isActive
                    ? "bg-white text-teal-600 shadow-lg font-medium"
                    : "text-teal-50 hover:bg-teal-600 hover:text-white"
                }`}
              >
                <Icon className="w-6 h-6 mr-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar with Hamburger */}
        <header className="h-16 bg-white shadow-sm border-b border-gray-200 flex items-center px-6">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden"
          >
            <Menu className="w-7 h-7 text-gray-700" />
          </button>
          <h1 className="ml-4 text-xl font-semibold text-gray-800 lg:ml-0">
            {menuItems.find((item) => item.id === activeTab)?.label || "Dashboard"}
          </h1>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto bg-gray-100 p-3 ">
          <div className="bg-white p-3 rounded-lg shadow-sm min-h-full">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;