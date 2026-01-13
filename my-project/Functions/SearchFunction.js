export default function searchChats(chatData, searchQuery) {
    // If search query is empty, return all chats
    if (!searchQuery || searchQuery.trim() === '') {
        return chatData;
    }

    // Convert search query to lowercase for case-insensitive search
    const query = searchQuery.toLowerCase().trim();

    // Filter chats based on name, messages, or subscribers
    return chatData.filter(chat => {
        // Search in chat name
        const nameMatch = chat.name.toLowerCase().includes(query);

        // Search in messages
        const messageMatch = chat.messages.some(message => 
            message.text.toLowerCase().includes(query)
        );

        // Search in subscribers count
        const subscriberMatch = chat.subscribers && 
            chat.subscribers.toString().includes(query);

        // Return true if any field matches
        return nameMatch || messageMatch || subscriberMatch;
    });
}