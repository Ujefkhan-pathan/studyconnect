import React from 'react';

export default function Sidebar({ selectedChat, setSelectedChat, chats }) {
    return (
        <div className="w-1/3 border-r border-gray-700 p-2 overflow-y-auto mb-4 custom-scrollbar">
            {/* Top Search and Icon */}
            <div className='flex items-center justify-center gap-2 mb-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 50 50">
                    <path fill='white' d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z" />
                </svg>
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full bg-gray-800 text-white px-3 py-2 rounded outline-none"
                />
            </div>

            {/* Chat List */}
            <div className="space-y-2">
                {chats.map((chat, i) => (
                    <ChatItem
                        key={i}
                        name={chat.name}
                        badge={chat.badge}
                        selected={selectedChat?.name === chat.name}
                        onSelect={() => setSelectedChat(chat)}
                    />
                ))}
            </div>
        </div>
    );
}

function ChatItem({ name, badge, selected, onSelect }) {
    return (
        <div
            onClick={onSelect}
            className={`p-2 h-14 rounded cursor-pointer flex justify-between items-center transition-all duration-200 ${
                selected ? 'bg-purple-500' : 'hover:bg-gray-800'
            }`}
        >
            <span>{name}</span>
            {badge && (
                <span className={`text-xs px-2 py-0.5 rounded-full ${selected ? 'bg-white text-purple-600' : 'bg-purple-600 text-white'}`}>
                    {badge}
                </span>
            )}
        </div>
    );
}
