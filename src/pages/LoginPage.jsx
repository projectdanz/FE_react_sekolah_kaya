import React, { useState } from "react";
import ThemeToggle from "../components/ThemeToggle";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  const [mode, setMode] = useState("login");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSubmit = () => {
    console.log("Login submitted:", { email, password });
  };

  const goToOtp = () => {
    // validasi password dan confirmPassword
    if (password !== confirmPassword) {
      alert("Password tidak sama!");
      return;
    }
    // redirect ke halaman OTP
    navigate("/otp");
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div
        className={`grid min-h-screen relative ${
          isDarkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-700"
        } lg:grid-cols-2 transition-colors`}
      >
        <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />

        {/* Left Section */}
        <div
          className={`flex flex-col gap-4 p-6 md:p-10 ${
            isDarkMode ? "bg-gray-800" : "bg-white"
          } transition-colors`}
        >
          <div className="flex flex-1 items-center justify-center">
            <LoginForm
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
              onSubmit={handleSubmit}
              mode={mode}
              setMode={setMode}
              goToOtp={goToOtp}
            />
          </div>
        </div>

        {/* Right Section */}
        <div
          className={`hidden lg:block relative ${
            isDarkMode ? "bg-gray-900" : "bg-gray-200"
          }`}
        >
          <img
            src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
            alt="Workspace image"
            className={`absolute inset-0 h-full w-full object-cover ${
              isDarkMode ? "brightness-50 grayscale-[0.3]" : "brightness-75"
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
