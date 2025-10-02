import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800 mb-2">
          {course.title}
        </h3>
        <div className="relative w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-blue-600 rounded-full"
            style={{ width: `${course.progress}%` }}
          />
        </div>
        <p className="mt-2 text-sm text-gray-600">
          Progress: {course.progress}%
        </p>
      </div>
    </div>
  );
};

export default CourseCard;
