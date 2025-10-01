const ThemeToggle = ({ isDarkMode, onToggle }) => {
  return (
    <div className="absolute top-6 right-6 z-20">
      <input 
        type="checkbox" 
        id="dark-mode-toggle" 
        className="hidden"
        checked={isDarkMode}
        onChange={onToggle}
      />
      <label 
        htmlFor="dark-mode-toggle" 
        className={`flex items-center justify-between w-[60px] h-[30px] rounded-full p-1 relative cursor-pointer transition-colors ${
          isDarkMode ? 'bg-gray-600' : 'bg-gray-300'
        }`}
      >
        <span className={`absolute top-[3px] left-[3px] w-6 h-6 bg-white rounded-full transition-transform ${
          isDarkMode ? 'translate-x-[30px]' : ''
        }`}></span>
        <span className="text-sm px-0.5">☀️</span>
        <span className="text-sm px-0.5">🌙</span>
      </label>
    </div>
  );
};

export default ThemeToggle;