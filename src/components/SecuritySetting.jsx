import React from "react";

const SecurityTab = ({ darkMode }) => {
  return (
    <div className="space-y-8">
      <div>
        <h2
          className={`text-2xl font-semibold mb-2 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Keamanan
        </h2>
        <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
          Kelola password dan keamanan akun kamu
        </p>
      </div>

      {["Password Lama", "Password Baru", "Konfirmasi Password Baru"].map(
        (label, index) => (
          <div key={index}>
            <label
              className={`block mb-2 ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {label}
            </label>
            <input
              type="password"
              className={`w-full px-4 py-3 rounded-lg border ${
                darkMode
                  ? "bg-gray-700 border-gray-600 text-white focus:border-blue-500"
                  : "bg-white border-gray-200 text-gray-900 focus:border-blue-600"
              } transition-colors focus:outline-none`}
              placeholder={`Masukkan ${label.toLowerCase()}`}
            />
          </div>
        )
      )}

      <div className="flex justify-end">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
          Update Password
        </button>
      </div>
    </div>
  );
};

export default SecurityTab;
