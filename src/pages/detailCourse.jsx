import React, { useState } from "react";
import { useParams } from "react-router-dom";
import SidebarCourse from "../components/SidebarCourse";

const DetailCourse = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(1);
  const { slug } = useParams();

  return (
    <div className={darkMode ? "dark" : ""}>
      <div
        className={`min-h-screen ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
      >
        <SidebarCourse
          isOpen={isOpen}
          toggleSidebar={() => setIsOpen(!isOpen)}
          activeVideo={activeVideo}
          setActiveVideo={setActiveVideo}
          darkMode={darkMode}
          toggleTheme={toggleTheme}
        />
        <main
          className={`ml-0 lg:ml-72 min-h-screen ${
            darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
          }`}
        >
          {/* Add your course content here */}
        </main>
      </div>
    </div>
  );
};

export default DetailCourse;
