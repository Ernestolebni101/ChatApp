const Model = require('./model');

const addChat = (chat) => {
  const myChat = new Model(chat);
  return myChat.save();
}

const listChats = (userId) => {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (userId) {
      filter = {
        users: userId,
      }
    }

    Model.find(filter)
      .populate('users')
      .exec((err, populated) => {
        if (err) {
          reject(err);
          return false;
        }
        resolve(populated);
      });
  });
}

const removeChats = async (chat) => {
  return await Model.deleteOne({
    _id: chat
  });
}


module.exports = {
  add: addChat,
  list: listChats,
  removeChats: removeChats
}