const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const AuthController = require("../middleware/auth")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createusers", userController.createUser  )

router.post("/loginUser", userController.loginUser, AuthController.CreatingToken)

//The userId is sent by front end
router.get("/getusers/:userId",AuthController.TokenVerifyed,  userController.getUserData)

router.put("/updateusers/:userId", userController.updateUser)
 
router.put("/deleteUser/:userId", userController.deleteUser)
module.exports = router;