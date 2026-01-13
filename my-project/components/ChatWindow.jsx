import { useState } from 'react';
export default function ChatWindow({ selectedChat, setIconClicked,sendMessage }) {
  const [inputValue, setInputValue] = useState('');
  if (!selectedChat) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-500">
        Select a chat to start messaging.
      </div>
    )
  }
  // console.log(selectedChat.id) a1,b2

  const handleSend = () => {
    if (inputValue.trim()) {
      sendMessage(selectedChat.id, inputValue);
      setInputValue('');
    }
  };

  return (
    <div onClick={() => setIconClicked(false)} className="flex-1 flex flex-col">
      {/* Chat Header */}
      <div className="p-3 border-b border-gray-700 flex justify-start gap-2 items-center">
        <div className="flex items-center space-x-3">
          <img
            src={selectedChat.profileImage || 'https://via.placeholder.com/40'}
            className="w-10 h-10 rounded-full object-cover"
          />
        </div>
        <div>
          <h2 className="font-bold">{selectedChat.name}</h2>
          <p className="text-xs text-gray-400">{selectedChat.subscribers} subscribers</p>
        </div>
        <button className="ml-auto text-xl">⋮</button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-[url('/background-pattern.png')] bg-cover custom-scrollbar">
        {selectedChat.messages.map((msg, index) => (
          <MessageBubble
            key={index}
            message={msg.text}
            isLink={msg.isLink}
            reactions={msg.reactions}
            sender={msg.sender}
          />
        ))}
      </div>

      {/* Input Box */}
      <div className="p-4 border-t flex gap-2 border-gray-700">
      <input
          type="text"
          placeholder="Type here..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          className="w-full px-3 py-2 bg-gray-800 rounded"
        />
       <button
          className="cursor-pointer bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full"
          onClick={handleSend}
        >
          ➤
        </button>
      </div>
    </div>
  )
}

function MessageBubble({ message, reactions = {}, isLink = false, sender }) {
  const isSent = sender === 'me';
  
  return (
    <div className={`flex ${isSent ? 'justify-end' : 'justify-start'}`}>
      <div className={`p-3 rounded-lg shadow-md w-max max-w-lg ${
        isSent ? 'bg-blue-600' : 'bg-gray-800'
      }`}>
        <p className="text-sm break-words">
          {isLink ? (
            <a href={message} className="text-blue-400" target="_blank" rel="noreferrer">
              {message}
            </a>
          ) : (
            message
          )}
        </p>
        {Object.keys(reactions).length > 0 && (
          <div className="flex gap-2 mt-2 text-xs text-gray-300">
            {reactions.like && <span>❤️ {reactions.like}</span>}
            {reactions.sad && <span>😢 {reactions.sad}</span>}
            {reactions.angry && <span>😠 {reactions.angry}</span>}
          </div>
        )}
      </div>
    </div>
  )
}