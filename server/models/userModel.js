import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username : {
        type: String, 
        required : [true, 'Please enter a name'],
        unique: true
    },
    email: {
        type: String, 
        required : [true, 'Please enter an email'],
        unique: true
    },
    password : {
        type: String, 
        required : [true, 'Please enter a oassword'],
    },
    isAdmin: {
        type: Boolean, 
        default: false, 
        required: true
    }
}, {
    timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User;