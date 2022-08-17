const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

// 1 creating book api
router.post("/createBook", BookController.createBook  )

//router.get("/getBooksData", BookController.getBooksData)

// 2 bookList : gives all the books- their bookName and authorName only
router.get("/bookList", BookController.bookList)

// 3 getBooksInYear: takes year as input in post request and gives list of 
//all books published that year
router.post("/getBooksInYear", BookController.getBooksInYear)

// 4 getParticularBooks api
router.post("/getParticularBooks", BookController.getParticularBooks)

// 5 getXINRBooks api 
router.get("/getXINRBooks", BookController.getXINRBooks)
//module.exports = router;

// 6 getRandomBooks api
router.post("/getRandomBooks", BookController.getRandomBooks)
module.exports = router;