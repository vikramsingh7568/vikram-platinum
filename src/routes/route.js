const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
//creating author
router.post("/createAuthor", BookController.createAuthor)

//creating book
router.post("/createBook", BookController.createBook)

//1 getting books data
router.get("/getBooksData", BookController.getBooksData)
//2nd
router.get("/findauthor", BookController.findauthor)

//3rd
router.get("/findBooks", BookController.findBooks)


// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )



// router.post("/updateBooks", BookController.updateBooks)
// router.post("/deleteBooks", BookController.deleteBooks)

//MOMENT JS
//const moment = require('moment');
//router.get("/dateManipulations", function (req, res) {
    
    // const today = moment();
    // let x= today.add(10, "days")

    // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
    // console.log(validOrNot)
    
//     const dateA = moment('01-01-1900', 'DD-MM-YYYY');
//     const dateB = moment('01-01-2000', 'DD-MM-YYYY');

//     let x= dateB.diff(dateA, "days")
//     console.log(x)

//     res.send({ msg: "all good"})
 //})

module.exports = router;