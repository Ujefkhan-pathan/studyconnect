import React, { useState } from 'react';

export default function Sidebar({ selectedChatId, setSelectedChatId, chats, setIconClicked, iconClicked }) {
    const [searchQuery, setSearchQuery] = useState('');
    
    // Filter chats based on search query
    const filteredChats = chats.filter(chat => {
        if (!searchQuery.trim()) return true;
        
        const query = searchQuery.toLowerCase();
        const nameMatch = chat.name.toLowerCase().includes(query);
        // console.log("chatMessege :" ,chat.messages);
        const messageMatch = chat.messages.some(msg => 
            msg.text.toLowerCase().includes(query)
        );
        const subscriberMatch = chat.subscribers?.toString().includes(query);
        
        return nameMatch || messageMatch || subscriberMatch;
    });

    return (
        <div className="w-1/3 border-r border-gray-700 h-screen relative p-2 mb-4 overflow-y-auto custom-scrollbar">
            {/* Top Search and Icon */}
            {/* 1st point */}
            <div className='flex items-center justify-center w-full bg-gray-900 gap-2 mb-4'>
                <div className="p-2 relative rounded-full hover:bg-gray-800 hover:cursor-pointer w-fit">
                    <svg onClick={() => setIconClicked(!iconClicked)} xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 50 50">
                        <path
                            fill="white"
                            d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z 
                            M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z 
                            M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"
                        />
                    </svg>

                    <div
                        className={`absolute top-12 left-0 z-10 p-2 flex flex-col gap-2 min-h-[400px] min-w-[200px] bg-red-800 transition-all duration-200 transform origin-left rounded-2xl 
                         ${iconClicked ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                    >
                        {/* Chat 1 */}
                        <div className='flex items-center gap-2 p-2 h-14 rounded-2xl bg-white w-full'>
                            <img className='h-10 w-10 object-cover rounded-full' src={chats[0].profileImage} alt="" />
                            <span className="text-black font-medium">{chats[0].name}</span>
                        </div>

                        {/* Chat 2 */}
                        <div className='flex items-center gap-2 p-2 h-14 rounded-2xl bg-white w-full'>
                            <div className='h-10 w-10 bg-gray-400 rounded-full'></div>
                            <span className="text-black font-medium">Chat 2</span>
                        </div>

                        {/* Chat 3 */}
                        <div className='flex items-center gap-2 p-2 h-14 rounded-2xl bg-white w-full'>
                            <div className='h-10 w-10 bg-gray-400 rounded-full'></div>
                            <span className="text-black font-medium">Chat 3</span>
                        </div>
                    </div>
                </div>

                <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-gray-800 text-white px-3 py-2 rounded outline-none"
                />
            </div>
            {/* end point */}
            {/* Chat List */}
            <div onClick={() => setIconClicked(false)} className="space-y-2">
                {filteredChats.length > 0 ? (
                    filteredChats.map((chat, i) => (
                        <ChatItem
                            key={i}
                            name={chat.name}
                            badge={chat.badge}
                            selected={selectedChatId === chat.id}
                            onSelect={() => setSelectedChatId(chat.id)}
                            profileImage={chat.profileImage}
                            setIconClicked={setIconClicked}
                            iconClicked={iconClicked}
                        />
                    ))
                ) : (
                    <div className="text-center text-gray-400 mt-8">
                        No chats found
                    </div>
                )}
            </div>

            {/* Floating Create Group Icon */}
            <button
                onClick={() => alert('clicked')}
                className="sticky cursor-pointer bottom-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-200 z-50"
                title="Create Group"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M12.146.854a.5.5 0 0 1 .708 0l2.292 2.292a.5.5 0 0 1 0 .708l-9.439 9.439a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l9.439-9.439zM11.207 2L3 10.207V11h.793L14 3.793 11.207 2zM2 12v1h1l.293-.293-1-1L2 12z" />
                </svg>
            </button>
        </div>
    );
}

function ChatItem({ name, badge, selected, onSelect, profileImage, setIconClicked, iconClicked }) {
    return (
        <div
            onClick={() => {
                onSelect();
                setIconClicked(!iconClicked);
            }}
            className={`p-2 h-14 rounded cursor-pointer flex gap-3 z-9 items-center transition-all relative duration-200 ${
                selected ? 'bg-purple-500' : 'hover:bg-gray-800'
            }`}
        >
            <div className="flex items-center">
                <img
                    src={profileImage}
                    alt={name}
                    className="w-10 h-10 rounded-full object-cover"
                />
            </div>
            <span>{name}</span>
            {badge && (
                <span className={`absolute right-1 text-xs px-2 py-0.5 rounded-full ${
                    selected ? 'bg-white text-purple-600' : 'bg-purple-600 text-white'
                }`}>
                    {badge}
                </span>
            )}
        </div>
    );
}