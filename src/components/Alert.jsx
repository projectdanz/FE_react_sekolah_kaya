import React from 'react';
import { X } from 'react-feather';

const Alert = ({ onClose }) => {
  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded-lg">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-yellow-700">
            <span className="font-bold">Welcome back!</span> Continue your learning journey.
          </p>
        </div>
        <button
          onClick={onClose}
          className="text-yellow-400 hover:text-yellow-500"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default Alert;