const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")

const BookModel= require("../models/BookModel.js") //bookmodel ka address
const BookController= require("../controllers/BookController")//Book controller ka address

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )
router.get("/getUsersData", UserController.getUsersData)


router.post("/createBook", BookController.createBook  ) //creating controller for book
router.get("/getBooksData", BookController.getBooksData)//creating get to get data of books

module.exports = router;