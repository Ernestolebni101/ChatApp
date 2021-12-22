const store = require('./store');


const AddMessage = (message) => {
    return new Promise(async (resolve, reject) => {
        if (!message) {
            console.error('[MessageController]: No se proporcionó el usuario y mensaje');
            reject('Los datos son incorrectos');
            return false;
        }
        
        const full_Message = {
            user: message.user,
            chat: message.chat,
            message: message.message,
            messageimg: message.messageimg,
            date: new Date()
        };
        store.add(full_Message);
        resolve(full_Message);
    });
}

const get_Messages = (filterchat) => {
    return new Promise(async (resolve, reject) => {
        await resolve(store.getall(filterchat));
    })
}

const updateMessage = (id, message) => {
    return new Promise(async (resolve, reject) => {
        if (!id || !message) {
            reject('missing Data');
            return false;
        }
        const result = await store.update(id, message);
        resolve(result);
    });
}

const deleteMessage = (id) => {
    return new Promise(async (resolve, reject) => {
        if (!id) {
            reject('Invalid id');
            return false;
        }

        store.remove(id)
            .then(() => {
                resolve(id);
            })
            .catch(e => {
                reject(e);
            });
    });
}

module.exports = {
    AddMessage,
    get_Messages,
    updateMessage,
    deleteMessage
}