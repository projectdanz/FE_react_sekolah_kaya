import React from "react";
import { User, Bell, Lock, Globe } from "react-feather";

const Settings = ({ darkMode }) => {
  const sections = [
    {
      title: "Profile Settings",
      icon: User,
      items: [
        { label: "Update Profile Picture", action: () => {} },
        { label: "Edit Personal Information", action: () => {} },
        { label: "Change Email", action: () => {} },
      ],
    },
    {
      title: "Notification Settings",
      icon: Bell,
      items: [
        { label: "Email Notifications", action: () => {} },
        { label: "Push Notifications", action: () => {} },
        { label: "Course Updates", action: () => {} },
      ],
    },
    {
      title: "Security Settings",
      icon: Lock,
      items: [
        { label: "Change Password", action: () => {} },
        { label: "Two-Factor Authentication", action: () => {} },
        { label: "Session Management", action: () => {} },
      ],
    },
  ];

  return (
    <div className="max-w-4xl space-y-6">
      {sections.map((section, index) => (
        <div
          key={index}
          className={`p-6 rounded-xl ${
            darkMode ? "bg-gray-800" : "bg-white"
          } shadow-sm`}
        >
          <div className="flex items-center space-x-3 mb-6">
            <section.icon
              size={24}
              className={darkMode ? "text-gray-400" : "text-gray-600"}
            />
            <h2
              className={`text-xl font-semibold ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              {section.title}
            </h2>
          </div>

          <div className="space-y-4">
            {section.items.map((item, itemIndex) => (
              <button
                key={itemIndex}
                onClick={item.action}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  darkMode
                    ? "hover:bg-gray-700 text-gray-300"
                    : "hover:bg-gray-50 text-gray-700"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Settings;
