const store = require('./store');

const addUser = async (usermodel) => {
    if (!usermodel)
        return Promise.reject('Invalid Name'); 
    return await store.add(usermodel);
}

const getUser = (filter) => {
    return new Promise(async (resolve, reject) => {
        await resolve(store.getall(filter));
    });
}

const deleteUser = (useruid) => {
    return new Promise(async (resolve, reject) => {
        await resolve(store.delete(useruid));
    });
}

const updateUser = (uid, usermodel) => {
    return new Promise(async (resolve, reject) => {
        await resolve(store.update(uid, usermodel));
    });
}

module.exports = {
    addUser,
    getUser,
    deleteUser,
    updateUser
}