import React, { useState } from "react";
import { useParams } from "react-router-dom";
import SidebarCourse from "../components/SidebarCourse";
import { useTheme } from "../context/ThemeContext";
import { themeConfig } from "../config/theme";

const DetailCourse = () => {
  const { darkMode, toggleTheme } = useTheme();
  const theme = darkMode ? themeConfig.dark : themeConfig.light;
  const [isOpen, setIsOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(1);
  const { slug } = useParams();

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className={`min-h-screen ${theme.background}`}>
        <SidebarCourse
          isOpen={isOpen}
          toggleSidebar={() => setIsOpen(!isOpen)}
          activeVideo={activeVideo}
          setActiveVideo={setActiveVideo}
          darkMode={darkMode}
          toggleTheme={toggleTheme}
        />
        <main className={`ml-0 lg:ml-72 min-h-screen ${theme.background}`}>
          {/* Video player section */}
          <div className={`p-6 ${theme.card}`}>
            {/* Add your course content here */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DetailCourse;
