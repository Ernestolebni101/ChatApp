const Model = require('./model');

const addMessage = async (mss) => {
    const myMessage = new Model(mss);
    await myMessage.save();
}
const get_Messages = async (filterUser) => {

    return new Promise((resolve, reject) => {
        let filter = {};
        if (filterUser !== null) {
            filter = { user: filterUser };
        }
        Model.find(filter)
            .populate('user')
            .exec((error, populated) => {
                if (error) {
                    reject(error);
                    return false;
                }
                resolve(populated);
            });
    });
}

const updateText = async (id, message) => {
    const foundmessage = await Model.findOne({
        _id: id
    });
    foundmessage.message = message;
    const newmss = await foundmessage.save();
    return newmss;
}

const removeMessage = async (id) => {
    return await Model.deleteOne({
        _id: id
    });
}

module.exports = {
    add: addMessage,
    getall: get_Messages,
    update: updateText,
    remove: removeMessage
}   
