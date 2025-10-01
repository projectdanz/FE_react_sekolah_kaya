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
}) => {
  return (
    <div className="w-full max-w-80 flex flex-col gap-6">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">
          {mode === "login" ? "Login to your account" : "Register your account"}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          {mode === "login"
            ? "Enter your email below to login to your account"
            : "Enter your email below to create your account"}
        </p>
      </div>

      <div className="grid gap-6">
        <div className="grid gap-3">
          <label
            htmlFor="email"
            className="text-sm font-medium text-gray-700 dark:text-gray-200"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 dark:border-gray-600 rounded-md px-2 py-2 text-base bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 dark:focus:border-blue-500 dark:focus:ring-blue-500/30 transition-all"
            required
          />
        </div>

        <div className="grid gap-3">
          <div className="flex items-center">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Password
            </label>
          </div>
          <input
            id="password"
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 dark:border-gray-600 rounded-md px-2 py-2 text-base bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 dark:focus:border-blue-500 dark:focus:ring-blue-500/30 transition-all"
            required
          />
          {mode === "login" && (
            <a
              href="#forgot"
              className="ml-auto text-sm no-underline hover:underline underline-offset-4 text-blue-600 dark:text-blue-500"
            >
              Forgot your password?
            </a>
          )}
        </div>

        {mode === "register" && (
          <div className="grid gap-3">
            <label
              htmlFor="confirmPassword"
              className="text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border border-gray-300 dark:border-gray-600 rounded-md px-2 py-2 text-base bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-100 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 dark:focus:border-blue-500 dark:focus:ring-blue-500/30 transition-all"
              required
            />
          </div>
        )}

        <button
          type="button"
          onClick={() => {
            if (mode === "register") {
              goToOtp();
            } else {
              onSubmit();
            }
          }}
          className="w-full bg-blue-600 dark:bg-blue-500 text-white rounded-md py-2 border-none text-base cursor-pointer hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
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
              className="underline underline-offset-4 text-blue-600 dark:text-blue-500"
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
              className="underline underline-offset-4 text-blue-600 dark:text-blue-500"
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
