const store = require('./store');

function addChat(chats) {
    if (!chats || !Array.isArray(chats.users)) {
        return Promise.reject('Invalid user list');
    }
    const chat = {
        users: chats.users,
        date: chats.date
    };
    return store.add(chat);
}

const listChats = async (userId) => {
    return await store.list(userId);
}

module.exports = {
    addChat,
    listChats,
}

//!Array.isArray(users)