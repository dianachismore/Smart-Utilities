const mongoose = require('mongoose');

const user = {
    fullname: '',
    email: '',
    password: '',
    apartment: ''
};

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required:true,
    },
    email: {
        type: String,
        required:true,
        unique: true,
    },
    password: {
        type: String,
        required:true,
    },
    phoneNumber: {
        type: String,
        required:true,
    }
});

userSchema.statics.isThisEmailUnique = async function(email) {
    if(!email) throw new Error('Please introduce an email address');
    try{
        const user = await this.findOne({email});
        if(user) return false;
        return true;
    } catch(error) {
        console.log('error caught while verifying the uniqueness of the email address:', error.message);
        return false;
    }

}

module.exports = mongoose.model('User', userSchema);