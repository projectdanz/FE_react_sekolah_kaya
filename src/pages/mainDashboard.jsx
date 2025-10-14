import React, { useState } from "react";
import { Menu, Sun, Moon } from "react-feather";
import Sidebar from "../components/Sidebar";
import Alert from "../components/Alert";
import Home from "./dashboard/Home";
import Course from "./dashboard/Course";
import Settings from "./dashboard/Setting";
import { useTheme } from "../context/ThemeContext";
import { themeConfig } from "../config/theme";
import WaFloating from "../components/WaFloating";

const Dashboard = () => {
  const { darkMode, toggleTheme } = useTheme();
  const theme = darkMode ? themeConfig.dark : themeConfig.light;

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("course");
  const [showAlert, setShowAlert] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  const renderContent = () => {
    switch (activeMenu) {
      case "home":
        return <Home darkMode={darkMode} />;
      case "course":
        return <Course darkMode={darkMode} />;
      case "settings":
        return <Settings darkMode={darkMode} />;
      default:
        return <Home darkMode={darkMode} />;
    }
  };

  return (
    <div className={`min-h-screen ${theme.background}`}>
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar
          isOpen={sidebarOpen}
          toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          darkMode={darkMode}
          toggleTheme={toggleTheme}
        />

        {/* Main content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <header
            className={`border-b shadow-sm ${
              darkMode
                ? "bg-gray-800 border-gray-700"
                : "bg-white border-gray-200"
            }`}
          >
            <div className="px-6 py-4 flex items-center justify-between">
              {/* Left section */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="lg:hidden p-2 rounded-lg"
                >
                  <Menu
                    size={24}
                    className={darkMode ? "text-white" : "text-blue-900"}
                  />
                </button>
                <h1
                  className={`text-2xl font-bold ${
                    darkMode ? "text-white" : "text-blue-900"
                  }`}
                >
                  {activeMenu.charAt(0).toUpperCase() + activeMenu.slice(1)}
                </h1>
              </div>

              {/* Right section */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-lg transition-colors ${
                    darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
                  }`}
                >
                  {darkMode ? (
                    <Moon size={20} className="text-yellow-500" />
                  ) : (
                    <Sun size={20} className="text-blue-900" />
                  )}
                </button>
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center cursor-pointer hover:shadow-lg transition-shadow" />
              </div>
            </div>
          </header>

          {/* Body content */}
          <main className="flex-1 overflow-y-auto p-6">
            {showAlert && <Alert onClose={() => setShowAlert(false)} />}
            {renderContent()}
            
            <WaFloating phone="6281914430274" message="Halo%20saya%20mau%20cek%20order"/>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
