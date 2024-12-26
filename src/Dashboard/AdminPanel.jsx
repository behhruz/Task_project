import React from 'react';
import { useNavigate } from 'react-router-dom';

const Adminpanel = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <button
        onClick={() => navigate('/massages')}
        className="px-8 py-3 bg-purple-600 text-white rounded-full font-semibold shadow-lg hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300"
      >
        Massages
      </button>
    </div>
  );
};

export default Adminpanel;
