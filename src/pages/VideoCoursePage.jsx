import React, { useState } from "react";
import useTheme from "../hooks/useTheme";
import SidebarCourse from "../components/SidebarCourse";

const VideoCoursePage = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(1);

  return (
    <div
      className={`min-h-screen ${
        darkMode ? "dark bg-gray-900" : "bg-gray-100"
      }`}
    >
      <SidebarCourse
        isOpen={isOpen}
        toggleSidebar={() => setIsOpen(!isOpen)}
        activeVideo={activeVideo}
        setActiveVideo={setActiveVideo}
        darkMode={darkMode}
        toggleTheme={toggleTheme}
      />
      {/* ...existing code... */}
    </div>
  );
};

export default VideoCoursePage;
