const Model = require('./model');

const getUsers = async (filter) => {
    let f = {};
    if (filter !== null) {
        f = { name: filter };
    }
    const users = await Model.find(f);
    return users;
}

const addUser = async (usermodel) => {
    //if(Model.findOne(usermodel))
    //    return Promise.reject('User Exist');
    const userobj = new Model(usermodel);
    return await userobj.save()
}

const updateUser = async (uid,usermodel) => {
    const founduser = await Model.findOne({
        _id: uid
    });
    founduser.nickname = usermodel.nickname;
    founduser.password = usermodel.password;
    founduser.name = usermodel.name;
    founduser.lastname = usermodel.lastname;
    founduser.birthdate = usermodel.birthdate;
    const newuser = await founduser.save();
    return newuser;
}

const deleteUser = async (useruid) => {
    const uid = { _id: useruid };
    return await Model.remove(uid);;
}

module.exports = {
    add: addUser,
    getall: getUsers,
    delete: deleteUser,
    update: updateUser
}