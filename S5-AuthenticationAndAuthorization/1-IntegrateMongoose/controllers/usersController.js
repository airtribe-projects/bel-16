const usersModel = require("../models/usersModel");
const bcrypt = require('bcrypt');
const SALT_ROUND = 5;


const loginUser = async (email, password) => {
    const filterCriteria = {
        email: email
    };
    
    const dbUser = await usersModel.findOne(filterCriteria);

    if (!dbUser) {
        throw new Error("User not found");
    }

    const isSamePassword = bcrypt.compareSync(password, dbUser.password) ;
   
    // console.log(isSamePassword);

    if (!isSamePassword) {
        throw new Error("Username / password not valid");
    }

    return dbUser.id;
}

const registerUser = async (user) => {
    user.password = bcrypt.hashSync(user.password, SALT_ROUND);
    const dbUser = await usersModel.create(user);
    return {id: dbUser._id, email: dbUser.email};
}

module.exports = {
    loginUser,
    registerUser
}