const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel")

let CreatingToken =  async function  (req, res){
    let userName = req.body.emailId;
    let password = req.body.password;
    let user = await userModel.findOne({ emailId: userName, password: password });
    if(user.isDelete == true){
    
      res.send("sorry you have deleted your account , please create new account ")
    } else{
    let token = jwt.sign
(
  {
    userId: user._id.toString(),
    batch: "thorium",
    organisation: "FunctionUp",
  },
  "functionup-plutonium-very-very-secret-key"
);
res.setHeader("x-auth-token", token);
res.send({ status: true, token: token });
}
};
//tokenverifyed*******************************************************************************************************************************************

let TokenVerifyed  = async function(req, res, next){
let token = req.headers["x-Auth-token"];
if (!token) token = req.headers["x-auth-token"];
  //If no token is present in the request header return error. This means the user is not logged in.
if (!token) return res.send({ status: false, msg: "token must be present" });

let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
if (!decodedToken){
  return res.send({ status: false, msg: "token is invalid" });
}else{
    next()
}
}

module.exports.CreatingToken = CreatingToken
module.exports.TokenVerifyed = TokenVerifyed