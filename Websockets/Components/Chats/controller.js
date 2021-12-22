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

const deleteChats = async (chat) => {
    return new Promise(async (resolve, reject) => {
        if (!chat) {
            reject('Invalid id');
            return false;
        }

        store.removeChats(chat)
            .then(() => {
                resolve(chat);
            })
            .catch(e => {
                reject(e);
            });
    });
}

module.exports = {
    addChat,
    listChats,
    deleteChats
}

//!Array.isArray(users)