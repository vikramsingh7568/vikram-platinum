const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController = require("../controllers/publisherController")
//middlewarecontroller
const commonMW = require("../middlewares/commonMiddlewares.js")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
// 1 authorSchema 
router.post("/createAuthor", authorController.createAuthor  )
router.get("/getAuthorsData", authorController.getAuthorsData)

// 2 publisherSchema
router.post("/createPublisher", publisherController.createPublisher)
router.get("/getPublishersData", publisherController.getPublishersData)

// 3 booksSchema
router.post("/createBook", bookController.createBook  )
router.get("/getBooksData", bookController.getBooksData)
router.put("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

//********************************************************************************************************* */
//middleware
router.get("/middlerware",commonMW.authenticData,commonMW.mid2,authorController.middlerware)
 

module.exports = router;