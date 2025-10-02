import React from "react";

const LoginForm = ({
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  onSubmit,
  mode = "login",
  setMode,
  goToOtp,
  isDarkMode,
}) => {
  // Tambahkan state untuk error
  const [errors, setErrors] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Fungsi validasi
  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    // Validasi email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(email)) {
      tempErrors.email = "Please enter a valid email";
      isValid = false;
    }

    // Validasi password
    if (!password) {
      tempErrors.password = "Password is required";
      isValid = false;
    } else if (password.length < 8) {
      tempErrors.password = "Password must be at least 8 characters";
      isValid = false;
    }

    // Validasi confirm password (hanya untuk mode register)
    if (mode === "register") {
      if (!confirmPassword) {
        tempErrors.confirmPassword = "Please confirm your password";
        isValid = false;
      } else if (password !== confirmPassword) {
        tempErrors.confirmPassword = "Passwords do not match";
        isValid = false;
      }
    }

    setErrors(tempErrors);
    return isValid;
  };

  // Modify button click handler
  const handleSubmit = () => {
    if (validate()) {
      if (mode === "register") {
        goToOtp();
      } else {
        onSubmit();
      }
    }
  };

  return (
    <div className="w-full max-w-80 flex flex-col gap-6">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">
          {mode === "login" ? "Login to your account" : "Register your account"}
        </h1>
        <p
          className={`text-sm ${
            isDarkMode ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {mode === "login"
            ? "Enter your email below to login to your account"
            : "Enter your email below to create your account"}
        </p>
      </div>

      <div className="grid gap-6">
        <div className="grid gap-3">
          <label
            htmlFor="email"
            className={`text-sm font-medium ${
              isDarkMode ? "text-gray-200" : "text-gray-700"
            }`}
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setErrors({ ...errors, email: "" });
            }}
            className={`rounded-md px-2 py-2 text-base transition-all focus:outline-none focus:ring-2 ${
              isDarkMode
                ? "border border-gray-600 bg-gray-800 text-gray-100 focus:border-blue-500 focus:ring-blue-500/30"
                : "border border-gray-300 bg-white text-gray-700 focus:border-blue-600 focus:ring-blue-600/20"
            } ${errors.email ? "border-red-500" : ""}`}
            required
          />
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email}</span>
          )}
        </div>

        <div className="grid gap-3">
          <div className="flex items-center">
            <label
              htmlFor="password"
              className={`text-sm font-medium ${
                isDarkMode ? "text-gray-200" : "text-gray-700"
              }`}
            >
              Password
            </label>
          </div>
          <input
            id="password"
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrors({ ...errors, password: "" });
            }}
            className={`rounded-md px-2 py-2 text-base transition-all focus:outline-none focus:ring-2 ${
              isDarkMode
                ? "border border-gray-600 bg-gray-800 text-gray-100 focus:border-blue-500 focus:ring-blue-500/30"
                : "border border-gray-300 bg-white text-gray-700 focus:border-blue-600 focus:ring-blue-600/20"
            } ${errors.password ? "border-red-500" : ""}`}
            required
          />
          {errors.password && (
            <span className="text-red-500 text-xs">{errors.password}</span>
          )}
          {mode === "login" && (
            <a
              href="#forgot"
              className={`ml-auto text-sm no-underline hover:underline underline-offset-4 ${
                isDarkMode ? "text-blue-400" : "text-blue-600"
              }`}
            >
              Forgot your password?
            </a>
          )}
        </div>

        {mode === "register" && (
          <div className="grid gap-3">
            <label
              htmlFor="confirmPassword"
              className={`text-sm font-medium ${
                isDarkMode ? "text-gray-200" : "text-gray-800"
              }`}
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setErrors({ ...errors, confirmPassword: "" });
              }}
              className={`rounded-md px-2 py-2 text-base transition-all focus:outline-none focus:ring-2 ${
                isDarkMode
                  ? "border border-gray-600 bg-gray-800 text-gray-100 focus:border-blue-500 focus:ring-blue-500/30"
                  : "border border-gray-300 bg-white text-gray-700 focus:border-blue-600 focus:ring-blue-600/20"
              } ${errors.confirmPassword ? "border-red-500" : ""}`}
              required
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-xs">
                {errors.confirmPassword}
              </span>
            )}
          </div>
        )}

        <button
          type="button"
          onClick={handleSubmit}
          className={`w-full rounded-md py-2 border-none text-base cursor-pointer transition-colors ${
            isDarkMode
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {mode === "login" ? "Login" : "Register"}
        </button>
      </div>

      <div className="text-center text-sm">
        {mode === "login" ? (
          <>
            Don't have an account?{" "}
            <button
              type="button"
              className={`underline underline-offset-4 bg-transparent border-none cursor-pointer ${
                isDarkMode ? "text-blue-400" : "text-blue-600"
              }`}
              onClick={() => setMode("register")}
            >
              Sign up
            </button>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <button
              type="button"
              className={`underline underline-offset-4 bg-transparent border-none cursor-pointer ${
                isDarkMode ? "text-blue-400" : "text-blue-600"
              }`}
              onClick={() => setMode("login")}
            >
              Login
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
