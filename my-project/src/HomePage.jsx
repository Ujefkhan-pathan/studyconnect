import Sidebar from '../components/Sidebar'
import ChatWindow from '../components/ChatWindow'
import { useState } from 'react';

export function HomePage() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [iconClicked, setIconClicked] = useState(false);

  const chatData = [
    {
      id: 'a1',
      name: 'Chor Bazzar',
      profileImage: 'https://yt3.googleusercontent.com/8242e-QaxZcBFfMWe1l0H2lqja81nL6bRp7sFzMS93Gvt20aQlCjcxqTbD8FPOijYMc5Ees0VA=s900-c-k-c0x00ffffff-no-rj',
      badge: '38',
      subscribers: '18,000',
      messages: [
        { text: 'Hello' },
        { text: 'How are you?' }
      ]
    },
    {
      id: 'b2',
      name: 'SHIVAM H4CKS',
      badge: '5',
      subscribers: '42,100',
      profileImage: 'https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg',
      messages: [
        { text: 'Hack the world!', isLink: false }
      ]
    },
    {
      id: 'c3',
      name: 'Unseen Tech',
      badge: '0',
      profileImage: 'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=',
      subscribers: '24,736',
      messages: [
        { text: 'Tech is unseen!' },
        { text: 'Check out this link', isLink: true, reactions: { like: 5, sad: 3 } }
      ]
    },
    {
      id: 'd4',
      name: 'Bazzar Talks',
      profileImage: 'https://yt3.googleusercontent.com/8242e-QaxZcBFfMWe1l0H2lqja81nL6bRp7sFzMS93Gvt20aQlCjcxqTbD8FPOijYMc5Ees0VA=s900-c-k-c0x00ffffff-no-rj',
      badge: '21',
      subscribers: '10,500',
      messages: [
        { text: 'New drops today!' },
        { text: 'Grab fast or regret later' }
      ]
    },
    {
      id: 'e5',
      name: 'Code SHIVAM',
      badge: '8',
      subscribers: '46,800',
      profileImage: 'https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg',
      messages: [
        { text: 'Coding tips daily', isLink: false }
      ]
    },
    {
      id: 'f6',
      name: 'Tech Revealed',
      badge: '2',
      profileImage: 'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=',
      subscribers: '8,340',
      messages: [
        { text: 'Unboxing tech gadgets' },
        { text: 'See full review', isLink: true, reactions: { like: 3, sad: 0 } }
      ]
    },
    {
      id: 'g7',
      name: 'Desi Chor Bazzar',
      profileImage: 'https://yt3.googleusercontent.com/8242e-QaxZcBFfMWe1l0H2lqja81nL6bRp7sFzMS93Gvt20aQlCjcxqTbD8FPOijYMc5Ees0VA=s900-c-k-c0x00ffffff-no-rj',
      badge: '12',
      subscribers: '6,200',
      messages: [
        { text: 'Hidden gems only!' },
        { text: 'Sale alert 🚨' }
      ]
    },
    {
      id: 'h8',
      name: 'H4CKING SHIVAM',
      badge: '11',
      subscribers: '52,000',
      profileImage: 'https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg',
      messages: [
        { text: 'New exploit found', isLink: false }
      ]
    },
    {
      id: 'i9',
      name: 'Tech Mirror',
      badge: '0',
      profileImage: 'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=',
      subscribers: '15,740',
      messages: [
        { text: 'What’s behind the screen?' },
        { text: 'Link to deep dive', isLink: true, reactions: { like: 10, sad: 1 } }
      ]
    },
    {
      id: 'j10',
      name: 'Midnight Deals',
      badge: '17',
      subscribers: '22,300',
      profileImage: 'https://yt3.googleusercontent.com/8242e-QaxZcBFfMWe1l0H2lqja81nL6bRp7sFzMS93Gvt20aQlCjcxqTbD8FPOijYMc5Ees0VA=s900-c-k-c0x00ffffff-no-rj',
      messages: [
        { text: 'Drop at 12 sharp!' },
        { text: 'Early link inside', isLink: true }
      ]
    },
    {
      id: 'k11',
      name: 'SHIVAM Codes',
      badge: '14',
      subscribers: '30,900',
      profileImage: 'https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg',
      messages: [
        { text: 'How to code React', isLink: false }
      ]
    },
    {
      id: 'l12',
      name: 'Future Techies',
      badge: '0',
      profileImage: 'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=',
      subscribers: '19,400',
      messages: [
        { text: 'We’re building the future' },
        { text: 'Read about AI chipsets', isLink: true, reactions: { like: 9, sad: 0 } }
      ]
    },
    {
      id: 'm13',
      name: 'Thug Deals',
      profileImage: 'https://yt3.googleusercontent.com/8242e-QaxZcBFfMWe1l0H2lqja81nL6bRp7sFzMS93Gvt20aQlCjcxqTbD8FPOijYMc5Ees0VA=s900-c-k-c0x00ffffff-no-rj',
      badge: '7',
      subscribers: '13,800',
      messages: [
        { text: 'Only 1 hour stock left!' }
      ]
    },
    {
      id: 'n14',
      name: 'White Hat Shivam',
      profileImage: 'https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg',
      badge: '3',
      subscribers: '33,210',
      messages: [
        { text: 'Cybersecurity 101', isLink: false }
      ]
    },
    {
      id: 'o15',
      name: 'Daily Tech Shots',
      profileImage: 'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=',
      badge: '1',
      subscribers: '9,100',
      messages: [
        { text: 'Snap-sized tech news!' },
        { text: 'Link to today’s update', isLink: true, reactions: { like: 1, sad: 0 } }
      ]
    }
  ];
  
  const sharedProps = {
    setIconClicked,
    selectedChat,
    setSelectedChat,
    chats: chatData,
    iconClicked,
    setIconClicked
  };
  
  return (
    <div className="flex h-screen bg-gray-900 text-white justify-center">
    <div className="flex w-full max-w-[1500px] h-full">
      <Sidebar {...sharedProps} />
      <ChatWindow setIconClicked={setIconClicked}  selectedChat={selectedChat} />
    </div>
  </div>
  
  )
}

