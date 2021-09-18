import User from '../models/userModel.js';
import bcrypt from 'bcrypt';

export const userSignUp = async (req, res) => {
    const { username, email, password} = req.body;

    try {
        if(!username, !email,!password) return res.status(400).json({msg: "Please fill in all fields"});

        const user = await User.findOne({email});

        if(user) return console.log('This email already exists');

        const newUser = await User.create({ username, email, password});

        res.json({status: 'success', newUser, msg: 'Register success'});

    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}

export const userSignIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        
        if(!email || !password) return res.status(400).json({msg: 'Please enter your email and password'});

        const user = await User.findOne({email}).select("+password");

        if(!user) return res.status(400).json({msg: "User doesn't exist"});

        const matchPassword = await bcrypt.compare(password, user.password);

        if(!matchPassword) return res.status(400).json({msg: 'Password is incorrect'});

        res.json({status: 'success', user});
    } catch (error) {
        return res.status(500).json({msg: error.message});
    }
}