const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");


const createUser = async function (abcd, xyz) {
 
  let data = abcd.body;
  let savedData = await userModel.create(data);
  xyz.send({ msg: savedData });
};
// login user *************************************************************************************************************************
const loginUser = async function (req, res,next) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not correct",
    });
    next()
  }
  
// get user data *************************************************************************************************************
const getUserData = async function (req, res) {
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails){
    return res.send({ status: false, msg: "No such user exists" });
    
  }else if(userDetails.isDelete==true){
    return res.send("this user is deleted from our database")
  }else{
  res.send({ status: true, data: userDetails });
  }
  };
//update user ****************************************************************************************************************8
const updateUser = async function (req, res) {
 
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
 
  if (!user) {
    return res.send("No such user exists");
  }
  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData , {new : true});
  res.send({ status: true, data: updatedUser });
};

// delet data ***************************************************************************************************
const deleteUser = async function (req, res) {
    
    let userId = req.params.userId;
    let user = await userModel.findById(userId);
    if (!user) {
      return res.send("No such user exists");
    }
    user.isDelete = true
    let DeletedUser = await userModel.findOneAndUpdate({ _id: userId }, user, {new : true});
    res.send({ res :"user deleted successfully", data: DeletedUser });
    
  };
module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser
