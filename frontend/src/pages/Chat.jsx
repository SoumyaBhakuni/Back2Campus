

import React, { useState, useRef, useEffect } from 'react';

const ChatPage = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'John Doe', content: "Hey there! How's your project coming along?", isSent: false },
    { id: 2, sender: 'You', content: "It's going well! Just working on the chat functionality now.", isSent: true },
    { id: 3, sender: 'John Doe', content: "That's great! Let me know if you need any help with it.", isSent: false },
    { id: 4, sender: 'You', content: "Thanks! I'll definitely reach out if I get stuck.", isSent: true }
  ]);
  
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null);
  
  // Auto-scroll to the bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  
  // Handle sending a new message
  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    
    const message = {
      id: messages.length + 1,
      sender: 'You',
      content: newMessage,
      isSent: true
    };
    
    setMessages([...messages, message]);
    setNewMessage('');
    
    // Simulate response (could be replaced with actual API call)
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        sender: 'John Doe',
        content: "I got your message. This is an automated response.",
        isSent: false
      };
      setMessages(prevMessages => [...prevMessages, botResponse]);
    }, 1000);
  };
  
  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <div className="max-w-4xl w-full mx-auto my-4 flex flex-col h-full bg-white rounded-lg shadow-md overflow-hidden">
        {/* Chat Header */}
        <div className="bg-[#42b6b5] text-white px-4 py-3 flex items-center justify-between">
          <h1 className="font-bold text-lg">Chat Application</h1>
          <div className="flex items-center">
            <div className="w-2.5 h-2.5 rounded-full bg-white mr-2"></div>
            <span>Online</span>
          </div>
        </div>
        
        {/* Messages Container */}
        <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
          {messages.map((message) => (
            <div 
              key={message.id}
              className={`flex flex-col max-w-xs md:max-w-md mb-4 ${message.isSent ? 'ml-auto items-end' : 'mr-auto items-start'}`}
            >
              <span className="text-xs text-[#1e293b] mb-1">{message.sender}</span>
              <div 
                className={`px-4 py-2 rounded-lg ${
                  message.isSent 
                    ? 'bg-[#42b6b5] text-white rounded-br-sm' 
                    : 'bg-white border border-gray-200 text-[#1e293b] rounded-bl-sm shadow-sm'
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input Container */}
        <div className="border-t border-gray-200 p-4 flex bg-white">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#42b6b5]"
            placeholder="Type a message..."
          />
          <button
            onClick={handleSendMessage}
            className="ml-2 px-4 py-2 bg-[#42b6b5] text-white rounded-full font-medium hover:bg-[#389998] focus:outline-none focus:ring-2 focus:ring-[#42b6b5] transition-colors duration-200"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
