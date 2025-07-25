export default function ChatWindow({ selectedChat }) {
    if (!selectedChat) {
      return (
        <div className="flex-1 flex items-center justify-center text-gray-500">
          Select a chat to start messaging.
        </div>
      )
    }
  
    return (
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-3 border-b border-gray-700 flex justify-start gap-2 items-center">
          <div className="flex items-center space-x-3">
            <img
              src="https://yt3.googleusercontent.com/8242e-QaxZcBFfMWe1l0H2lqja81nL6bRp7sFzMS93Gvt20aQlCjcxqTbD8FPOijYMc5Ees0VA=s900-c-k-c0x00ffffff-no-rj"
              alt="Profile"
              className="w-10 h-10 rounded-full"
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
            />
          ))}
        </div>
  
        {/* Input Box */}
        <div className="p-4 border-t border-gray-700">
          <input
            type="text"
            placeholder="Type here..."
            className="w-full px-3 py-2 bg-gray-800 rounded"
          />
          <button
      className="flex-shrink-0 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full ml-237"
      onClick={() => alert("Shared!")}
    >
      ➤
    </button>
        </div>
      </div>
    )
  }
  
  function MessageBubble({ message, reactions = {}, isLink = false }) {
    return (
      <div className="bg-gray-800 p-3 rounded-lg shadow-md w-max max-w-lg">
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
    )
  }
  