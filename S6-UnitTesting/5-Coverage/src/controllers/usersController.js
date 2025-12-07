
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET
const usersModel = require("../models/usersModel");

const registerUser = async (reqUser) => {
    const user = {...reqUser};
    user.password = bcrypt.hashSync(user.password, saltRounds);
    // console.log("The Salt round for bcrypt:", saltRounds);
    const dbUser = await usersModel.create(user);
    return dbUser;
};
 
const loginUser = async (email, password) => {
    
    const body = {
        email: email
    };

    const dbUser = await usersModel.findOne(body);

    if (!dbUser) {
        throw new Error("User not found");
    }



    const isSamePassword = await bcrypt.compare(password, dbUser.password);
    // console.log(password, dbUser.password, isSamePassword);
    if (!isSamePassword) {
        throw new Error("Invalid Password");
    }
    
    const token = jwt.sign({email: dbUser.email, role: dbUser.role}, JWT_SECRET, {expiresIn: "1h"});

    return token;
}


module.exports = {registerUser, loginUser};