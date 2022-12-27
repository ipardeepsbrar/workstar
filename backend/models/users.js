const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    firstName : {type: String, required: true},
    lastName : {type: String, required: true},
    email : {type: String, required: true},
    password : {type: String, required: true},
    telephone : {type: Number},
    address : {type: String}
});

UserSchema.pre('save', async function(){
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt)
});

UserSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(password, this.password);
}

UserSchema.methods.createJwt = async function (){
    const token = await jwt.sign({name:this.firstName + ' ' + this.lastName, userId: this._id}, process.env.JWT_SECRET, {expiresIn:'10d'});
    return token
}

module.exports = mongoose.model('Users', UserSchema);