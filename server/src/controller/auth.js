const User = require("../model/user.model");
const Blacklist = require("../model/blacklist.model");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");

const token_secret = process.env.TOKEN_KEY;

//Helper functions
const createUser = async (data) => {
 
  let hash = await argon2.hash(data.password);
  let user = await User.create({ ...data, password: hash });
  if (!user) {
    return false;
  } 
 else {
  return true
 }
};

const findUser = async (data) => {
  let user = await User.findOne({ ...data });
  if (user) {
    return user;
  } else {
    return false;
  }
};

const validateUser = async (data) => {
  let { email, password } = data;
  try {
    let user = await findUser({ email });
    
    if (user) {
      if (await argon2.verify(user.password, password)) {
        return user;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
};





// Route Callback functions
const getUser = async (req, res) => {
  res.send("Hello server started ");
};

// 1. Signup callback
const signupUser = async (req, res) => {
  let data = req.body;
  let already_exist = await User.findOne({ email: data.email });
  if (already_exist) {
    return res.send({status:false,message:"user already registered"});
  }

  let user = await createUser({ ...data });
  if (user) {
    return res.send({ status: true,user:data, message: "user created successfully" });
  } else {
    return res.send({ status: false, message: "wrong details" });
  }
};

// 2. Login callback
const loginUser = async (req, res) => {
  let { email, password } = req.body;
  let user = await validateUser({ email, password });

  if (user) {
    let token = jwt.sign(
      { id:user._id,email: user.email, name: user.name, role: user.role },
      token_secret,
      {
        expiresIn: "7 days",
      }
    );

     res.status(200).cookie("token", token,{httpOnly:false,sameSite:"None",secure:true})
     .send({ status: true, token, });
  } else {
    return res.send({ status: false, message: "something went wrong" });
  }
};





module.exports = {
  getUser,
  signupUser,
  loginUser,
};
