import React, { useState } from "react";
import { User, Edit2 } from "react-feather";

const ProfileTab = ({ userData, setUserData, darkMode }) => {
  const [showAvatarPicker, setShowAvatarPicker] = useState(false);
  
  // Daftar avatar yang tersedia
  const avatarOptions = [
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Jasmine',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Max',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Luna',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Oscar',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie',
    'https://api.dicebear.com/7.x/avataaars/svg?seed=Charlie',
  ];
  const [fullName, setFullName] = useState(userData.fullName || "");

  return (
    <div className="space-y-8">
      <div>
        <h2
          className={`text-2xl font-semibold mb-2 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Profile
        </h2>
        <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
          Kelola avatar dan data profile kamu
        </p>
      </div>

      {/* Avatar Section */}
     <div>
  <label
    className={`block mb-4 ${
      darkMode ? "text-gray-300" : "text-gray-700"
    }`}
  >
    Avatar
  </label>
  <div className="relative inline-block">
    <div
      className={`w-32 h-32 rounded-full flex items-center justify-center ${
        darkMode ? "bg-gray-700" : "bg-gray-200"
      }`}
    >
      {userData.avatar ? (
        <img
          src={userData.avatar}
          alt="Avatar"
          className="w-full h-full rounded-full object-cover"
        />
      ) : (
        <User
          size={48}
          className={darkMode ? "text-gray-400" : "text-gray-500"}
        />
      )}
    </div>
    <button 
      onClick={() => setShowAvatarPicker(!showAvatarPicker)}
      className="absolute bottom-0 right-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors border-4 border-white dark:border-gray-800"
    >
      <Edit2 size={16} className="text-white" />
    </button>
  </div>

  {/* Avatar Picker Modal */}
  {showAvatarPicker && (
    <div className="fixed inset-0 bg-[rgba(0,0,0,.8)] flex items-center justify-center z-50">
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 max-w-md w-full mx-4`}>
        <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Pilih Avatar
        </h3>
        <div className="grid grid-cols-4 gap-4 mb-4">
          {avatarOptions.map((avatar, index) => (
            <button
              key={index}
              onClick={() => {
                setUserData({ ...userData, avatar });
                setShowAvatarPicker(false);
              }}
              className={`w-16 h-16 rounded-full overflow-hidden hover:ring-4 hover:ring-blue-500 transition-all ${
                userData.avatar === avatar ? 'ring-4 ring-blue-600' : ''
              }`}
            >
              <img
                src={avatar}
                alt={`Avatar ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
        <button
          onClick={() => setShowAvatarPicker(false)}
          className="w-full bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-lg transition-colors"
        >
          Tutup
        </button>
      </div>
    </div>
  )}
</div>

      {/* Form Fields */}
      <div className="space-y-6">
        {["username", "email"].map((field) => (
          <div key={field}>
            <label
              className={`block mb-2 capitalize ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {field}
            </label>
            <div
              className={`px-4 py-3 rounded-lg ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "bg-gray-50 border-gray-200 text-gray-900"
              } border`}
            >
              {userData[field]}
            </div>
          </div>
        ))}

        <div>
          <label
            className={`block mb-2 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Full Name
          </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className={`w-full px-4 py-3 rounded-lg border ${
              darkMode
                ? "bg-gray-700 border-gray-600 text-white focus:border-blue-500"
                : "bg-white border-gray-200 text-gray-900 focus:border-blue-600"
            } transition-colors focus:outline-none`}
          />
        </div>
      </div>

      <div className="flex justify-end">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
          Simpan Perubahan
        </button>
      </div>
    </div>
  );
};

export default ProfileTab;
