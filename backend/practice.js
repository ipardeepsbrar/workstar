const jwt = require('jsonwebtoken');

const UserSchema = mongoose.Schema({
    name: String,
    age: Number
});

UserSchema.pre('save', async function () {
    const salt = bcrypt.genSalt(10);
    this.name = bcrypt.hash(this.name, salt);
});


UserSchema.methods.createToken = async function(){
    const token = jwt.sign({name: this.name}, 'secret', {expiresIn: '10d'});
    return token;
}