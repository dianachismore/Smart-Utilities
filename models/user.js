const mongoose = require('mongoose');

const user = {
    fullname: '',
    email: '',
    password: '',
    apartment: ''
}

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    phoneNumber: {
        type: String,
        required:true
    }
})

mongoose.model('User', userSchema);