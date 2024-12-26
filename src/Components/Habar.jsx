import React, { useState, useEffect, useRef } from "react";

const Habar = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  const fetchMessages = async () => {
    try {
      const response = await fetch("http://localhost:5000/messages");
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(() => {
      fetchMessages();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleAddMessage = async () => {
    if (newMessage.trim() === "") return;

    const newEntry = {
      id: Math.random().toString(36).substring(2, 9),
      title: newMessage,
      sender: "Habar",
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    try {
      const response = await fetch("http://localhost:5000/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEntry),
      });

      if (response.ok) {
        fetchMessages();
      }
    } catch (error) {
      console.error("Error adding message:", error);
    }

    setNewMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddMessage();
    }
  };

  return (
    <div className="p-4 w-full h-full max-w-full mx-auto">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Habar</h1>
      <div className="space-y-4 overflow-y-auto max-h-[80vh]">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === "Habar" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`bg-${message.sender === "Habar" ? "[#8774E1]" : "white"} 
              text-${message.sender === "Habar" ? "white" : "black"} rounded-2xl 
              rounded-br-none px-4 py-2 shadow-sm max-w-xs lg:max-w-md`}
            >
              <p className="text-sm">{message.title}</p>
              <span
                className={`text-xs ${
                  message.sender === "Habar" ? "text-white" : "text-gray-500"
                } mt-1`}
              >
                {message.timestamp}
              </span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="mt-4 flex items-center">
        <input
          type="text"
          placeholder="Type a new message...,"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          className="border p-2 rounded w-full mr-2"
        />
        <button
          onClick={handleAddMessage}
          className="bg-[#8774E1] text-white px-4 py-2 rounded hover:bg-[#7665d0]"
        >
          Add Message
        </button>
      </div>
    </div>
  );
};

export default Habar;




