import React from "react";
import { Book, Home, Video, Settings, LogOut, Menu, X } from "react-feather";
import { useNavigate } from "react-router-dom";

const Sidebar = ({
  isOpen,
  toggleSidebar,
  activeMenu,
  setActiveMenu,
  darkMode,
}) => {
  const navigate = useNavigate();
  const menuItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "course", label: "Course", icon: Book },
    { id: "video", label: "Video", icon: Video },
    { id: "settings", label: "Settings", icon: Settings },
  ];
  
  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className={`
          fixed top-4 left-4 z-50 lg:hidden
          p-2 rounded-lg shadow-lg transition-colors
          ${
            darkMode
              ? "bg-gray-800 text-white hover:bg-gray-700"
              : "bg-white text-gray-700 hover:bg-gray-100"
          }
        `}
      >
        <Menu size={24} />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-50 w-64
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          ${
            darkMode
              ? "bg-gray-800 border-gray-700"
              : "bg-white border-gray-200"
          }
          lg:translate-x-0 lg:relative
          border-r
        `}
      >
        <div className="h-full flex flex-col">
          {/* Header with Logo and Close Button */}
          <div className="p-4 flex items-center justify-between">
            <h2
              className={`text-2xl font-bold ${
                darkMode ? "text-white" : "text-blue-900"
              }`}
              onClick={() => {
                navigate('/dashboard')
              }}
            >
              Sekolah Kaya
            </h2>
            <button
              onClick={toggleSidebar}
              className={`lg:hidden p-2 rounded-lg ${
                darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
              }`}
            >
              <X
                size={20}
                className={darkMode ? "text-white" : "text-gray-600"}
              />
            </button>
          </div>

          {/* Navigation Menu */}
          <nav className="flex-1 px-4">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveMenu(item.id);
                  if (window.innerWidth < 1024) {
                    toggleSidebar();
                  }
                }}
                className={`
                  w-full flex items-center space-x-4 px-4 py-3 mb-2 rounded-lg
                  transition-colors
                  ${
                    activeMenu === item.id
                      ? darkMode
                        ? "bg-gray-700 text-blue-400"
                        : "bg-blue-50 text-blue-600"
                      : darkMode
                      ? "text-gray-300 hover:bg-gray-700"
                      : "text-gray-600 hover:bg-gray-50"
                  }
                `}
              >
                <item.icon size={20} />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Logout Button */}
          <div
            className={`p-4 border-t ${
              darkMode ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <button
              className={`
              w-full flex items-center space-x-4 px-4 py-3 rounded-lg
              transition-colors text-red-600
              ${darkMode ? "hover:bg-gray-700" : "hover:bg-red-50"}
            `}
            >
              <LogOut size={20} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
