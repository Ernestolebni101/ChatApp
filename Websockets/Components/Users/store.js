const Model = require('./model');

const addUser = async (user) => {
    const userobj = new Model(user);
    return await userobj.save()
}
const getUsers = async (filter) => {
    let f = {};
    if (filter !== null) {
        f = { name: filter };
    }
    const users = await Model.find(f);
    return users;
}

const deleteUser = async (useruid) => {
    const uid = { _id: useruid };
    return await Model.remove(uid);;
}

const updateUser = async (uid,usermodel) =>{
    const founduser = await Model.findOne({
        _id: uid
    });
    founduser.name = usermodel.name ;
    founduser.lastname = usermodel.lastname ;
    founduser.birthdate = usermodel.birthdate;
    const newuser = await founduser.save();
    return newuser;
}


module.exports = {
    add: addUser,
    getall: getUsers,
    delete: deleteUser,
    update: updateUser
}