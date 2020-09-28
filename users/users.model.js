"use strict";
exports.__esModule = true;
exports.User = void 0;
var mongoose = require("mongoose");
var userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        select: false
    }
});
exports.User = mongoose.model('User', userSchema);
