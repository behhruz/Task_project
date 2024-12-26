import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
const Helps = () => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [successMessage, setSuccessMessage] = useState(false); 
  const API_URL = "http://localhost:5000/helps";  
  const API_TOKEN = 'your_api_token_here';  
  const navigate = useNavigate();  

  
  const handleSubmit = () => {
    const newHelp = {
      name: name,
      title: title
    };

    
    fetch(API_URL, {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${API_TOKEN}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newHelp),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        
        setName('');
        setTitle('');
        setSuccessMessage(true); 
        
        setTimeout(() => {
          setSuccessMessage(false);
        }, 4000);
      })
      .catch((error) => console.error("Error posting data:", error));
  };

  
  const goHome = () => {
    navigate('/'); 
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-[50px]">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Help Section</h1>

      
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Your Complaint or Help"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSubmit}
          className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </div>

      
      {successMessage && (
        <div className="mt-6 p-4 text-green-600 bg-green-100 border border-green-400 rounded-lg text-center">
          Muvaffaqiyatli qabul qilindi!
        </div>
      )}

      
      <button
        onClick={goHome}
        className="w-full py-3 mt-6 bg-gray-600 text-white rounded-lg font-semibold shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
      >
        Go Home
      </button>
    </div>
  );
};

export default Helps;