const Model = require('./model');

const addUser = async (user) => {
    const userobj = new Model(user);
    return await userobj.save()
}
const getUsers = async(filter) =>{
    let f = {};
    if (filter !== null) {
        f = { name: filter};
    }
    const users = await Model.find(f);
    return users; 
}

module.exports = {
    add: addUser,
    getall: getUsers
}