import React, { useState, useEffect, useRef } from "react";
import ThemeToggle from "../components/ThemeToggle";
import { useNavigate } from "react-router-dom";

const OTPPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [countdown, setCountdown] = useState(5);
  const [resendCount, setResendCount] = useState(0);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef([]);
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  const handleResend = () => {
    if (canResend) {
      // Reset OTP fields
      setOtp(["", "", "", "", "", ""]);
      // Logic for resending OTP
      console.log("Resending OTP...");

      // Update counter logic
      setResendCount((prev) => prev + 1);
      setCanResend(false);
      // Set countdown based on resend count
      setCountdown(resendCount === 0 ? 5 : 30);
    }
  };

  const handleChange = (index, value) => {
    if (value.length > 1) value = value.slice(0, 1);
    if (/^[0-9]*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value !== "" && index < 5) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleVerify = () => {
    const otpValue = otp.join("");
    if (otpValue.length === 6) {
      console.log("Verifying OTP:", otpValue);
      navigate("/dashboard");
    } else {
      alert("Please enter complete OTP code");
    }
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div
        className={`grid min-h-screen relative lg:grid-cols-2 transition-colors ${
          isDarkMode ? "bg-gray-900 text-gray-200" : "bg-gray-100 text-gray-700"
        }`}
      >
        <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleDarkMode} />

        {/* Left Section */}
        <div
          className={`flex flex-col gap-4 p-6 md:p-10 transition-colors ${
            isDarkMode ? "bg-gray-900" : "bg-white"
          }`}
        >
          <div className="flex flex-1 items-center justify-center">
            <div className="w-full max-w-md space-y-8">
              <div className="text-center">
                <h2
                  className={`text-3xl font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Verify Your Account
                </h2>
                <p
                  className={`mt-2 text-sm ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Enter the 6-digit code sent to your email
                </p>
              </div>

              {/* OTP Input Fields */}
              <div className="flex justify-center gap-2">
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    className={`w-12 h-12 text-center text-xl font-semibold rounded-lg border-2 
                      ${
                        isDarkMode
                          ? "bg-gray-700 border-gray-200 text-white focus:border-gray-300"
                          : "bg-gray-300 border-gray-300 text-gray-900 focus:border-gray-600"
                      } focus:outline-none focus:ring-2 focus:ring-gray-200/50`}
                  />
                ))}
              </div>

              {/* Verify Button */}
              <button
                onClick={handleVerify}
                className="w-full py-3 px-4 rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Verify Code
              </button>

              {/* Resend Section */}
              <div className="text-center mt-4">
                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Didn't receive the code?
                </p>
                <button
                  onClick={handleResend}
                  disabled={!canResend}
                  className={`mt-2 text-sm font-medium ${
                    canResend
                      ? "text-blue-600 hover:text-blue-500 cursor-pointer"
                      : "text-gray-400 cursor-not-allowed"
                  }`}
                >
                  {canResend ? "Resend Code" : `Resend in ${countdown}s`}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div
          className={`hidden lg:block relative ${
            isDarkMode ? "bg-blue-950" : "bg-gray-200"
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

export default OTPPage;
