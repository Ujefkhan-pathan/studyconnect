import Sidebar from '../components/Sidebar'
import ChatWindow from '../components/ChatWindow'
import { useState } from 'react';

export function HomePage() {
  const [selectedChat, setSelectedChat] = useState(null);


  const chatData = [
    {
      id: 1,
      name: 'Chor Bazzar',
      badge: '38',
      subscribers: '18,000',
      messages: [
        { text: 'Hello' },
        { text: 'How are you?' }
      ]
    },
    {
      id: 2,
      name: 'SHIVAM H4CKS',
      badge: '5',
      subscribers: '42,100',
      messages: [
        { text: 'Hack the world!', isLink: false }
      ]
    },
    {
      id: 3,
      name: 'Unseen Tech',
      badge: '0',
      subscribers: '24,736',
      messages: [
        { text: 'Tech is unseen!' }
      ]
    }
  ]

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar chats={chatData}  selectedChat={selectedChat} setSelectedChat={setSelectedChat} />
      <ChatWindow  selectedChat={selectedChat} />
    </div>
  )
}

