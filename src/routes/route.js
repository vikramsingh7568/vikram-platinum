const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
// Assignment-1
router.get("/getByDistrictId", CowinController.getByDistrictId)

//Assignment-2
router.get("/LondonWeather", CowinController.LondonWeather)
// question 2 of Assigmnet 2 
router.get("/WeatherTemperture", CowinController.WeatherTemperture)
// quesiton 3 of Assignment 2 
router.get("/SortedTempertureCities", CowinController.SortedTempertureCities)
// Assignment - 3
router.post("/memeCreation", CowinController.memeCreation)
module.exports = router;