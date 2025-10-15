import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import ProfileTab from "../../components/ProfileSetting";
import SecurityTab from "../../components/SecuritySetting";

const SettingsPage = () => {
  const { darkMode } = useTheme();
  const [activeMenu, setActiveMenu] = useState("pengaturan");
  const [activeTab, setActiveTab] = useState("profile");
  const [userData, setUserData] = useState({
    username: "danzsky",
    email: "akunprojectdanz@gmail.com",
    fullName: "",
    avatar: null,
  });

  return (
    <div
      className={`flex min-h-screen ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
    >
     
      <div className="flex-1 flex flex-col">
        <div className="flex-1 p-8">
          <div className="max-w-4xl">
            {/* Tabs */}
            <div
              className={`flex gap-4 mb-8 border-b ${
                darkMode ? "border-gray-700" : "border-gray-200"
              }`}
            >
              <button
                onClick={() => setActiveTab("profile")}
                className={`px-6 py-3 font-medium transition-colors relative ${
                  activeTab === "profile"
                    ? darkMode
                      ? "text-white"
                      : "text-gray-900"
                    : darkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                Profile
                {activeTab === "profile" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
                )}
              </button>
              <button
                onClick={() => setActiveTab("keamanan")}
                className={`px-6 py-3 font-medium transition-colors relative ${
                  activeTab === "keamanan"
                    ? darkMode
                      ? "text-white"
                      : "text-gray-900"
                    : darkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                Keamanan
                {activeTab === "keamanan" && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
                )}
              </button>
            </div>

            {/* Tab Content */}
            <div
              className={`rounded-lg p-8 ${
                darkMode ? "bg-gray-800" : "bg-white"
              }`}
            >
              {activeTab === "profile" && (
                <ProfileTab
                  userData={userData}
                  setUserData={setUserData}
                  darkMode={darkMode}
                />
              )}
              {activeTab === "keamanan" && <SecurityTab darkMode={darkMode} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
