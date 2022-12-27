const MyCustomError = require("../models/CustomError");
const Users = require("../models/users");

exports.register = async (req, res, next) => {
  try {
    const user = await Users.create(req.body);
    const token = await user.createJwt();
    res.status(200).json({user, token});
  } catch (error) {
    throw new MyCustomError("Registration failed, please try again", 400);
  }
};

exports.login = async (req, res, next) => {
  const { email, password } = req.body;
  if(!email || !password){
    throw new MyCustomError('Please check your credentials and try again', 400);
  }

  const user = await Users.findOne({email:email});
  if (!user){
    throw new MyCustomError('Incorrect email provided, please try again with correct email', 400)
  }

  const passwordMatched = await user.comparePassword(password);
  if(!passwordMatched){
    throw new MyCustomError('Invalid password entered, please try again', 400);
  }
  const token = await user.createJwt();
  res.status(200).json({ message:'logged in successfully', token });
};
