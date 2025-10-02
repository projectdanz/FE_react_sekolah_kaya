import React from "react";
import { Book, Home, Video, Settings, LogOut } from "react-feather";

const Sidebar = ({ isOpen, toggleSidebar, activeMenu, setActiveMenu }) => {
  const menuItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "course", label: "Course", icon: Book },
    { id: "video", label: "Video", icon: Video },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <aside
      className={`
      fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 transform transition-transform duration-200 ease-in-out
      ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } lg:relative lg:translate-x-0
    `}
    >
      <div className="h-full flex flex-col">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-blue-900">Sekolah Kaya</h2>
        </div>

        <nav className="flex-1 px-4">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveMenu(item.id)}
              className={`
                w-full flex items-center space-x-4 px-4 py-3 mb-2 rounded-lg transition-colors
                ${
                  activeMenu === item.id
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600 hover:bg-gray-50"
                }
              `}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-200">
          <button className="w-full flex items-center space-x-4 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
