const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    profileimage: {
        type: String,
        default:""
    },
    location: {
        type: String,
        default:""
    },
    likes: {
        type: Number,
        default: 0
    },
    backgroundimage: {
        type: String,
        default:""
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean,
        default: false
    },
    premuim: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

module.exports = mongoose.model('users', usersSchema);
