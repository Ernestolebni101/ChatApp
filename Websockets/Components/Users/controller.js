const store = require('./store');

const addUser = async (name) => {
    if (!name)
        return Promise.reject('Invalid Name');
    const user = {
        name,
    };
    return await store.add(user);
}

const getUser =  (filter) => {
    return new Promise(async (resolve, reject) => {
        await resolve(store.getall(filter));
    })
}

module.exports = {
    addUser,
    getUser
}