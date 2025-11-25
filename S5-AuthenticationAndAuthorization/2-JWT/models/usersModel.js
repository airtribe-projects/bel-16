const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name: {
        type: "String", 
        required: true, 
        trim: true,
    }, 
    email: {
        type: "String",
        required: true,
        trim: true,
        unique: true, 
    }, 
    password: {
        type: String, 
        required: true
    }, 
    role: {
        type: String, 
        enum: ["admin", "user"],
        default: "user"  
    } 
});

module.exports = mongoose.model('User', usersSchema);

