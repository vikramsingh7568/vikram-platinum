const express = require('express');
const abc = require('../introduction/intro');
// const underScore = require('underscore')
const lodash = require('lodash')
const First = require('../logger/logger');//creating require for welcome function
const { Welcome } = require('../logger/logger');
const Second =require('../introduction/util/helper');//cretinng require for second task
const Third = require('../introduction/validator/formatter')//creating require for third task
const router = express.Router();


router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    First.Welcome()  //we are calling welcome function in route
    Second.printDate() //we are calling date function other two function called inside this function
    Third.AllProgram() //calling our third function
    // let weekend=['sunday','monday']
    // let result = underScore.first(weekend)
    // console.log(result)

    let array =['january','february','march','april','may','june','july','august','september','octomber','november','december']
    let result1 =lodash.chunk(array,3)
    console.log(result1)
    //next 
    let arr2=[3,5,7,9,11,13,15,17,19,21]
    let result2 = lodash.tail(arr2,9)
    console.log(result2)
    //next 
    // let arr3=[1,1,2,2,3]
    // let result3 = lodash.union(arr3)
    // console.log(result3)
    let arr3=[[1,1,2,2,3],[1,2,3,4,4,4,][1,2,23,3,4,3,2],[2,3,3,4],[4,443,34,3]]
    let result3=[]
    result3 = lodash.union(arr3,5)
    console.log(result3)
    //next 
    let arr4 =[["horror","TheShining"],["drama","Titanic"],["thriller","ShutterIsland"],["fantasy","PansLabyrinth"]];
    let result4 = {}
    result4= lodash.fromPairs(arr4,1)
    console.log(result4)
    res.send('My second ever api!')
});

router.get('/cohort-members',function (req,res){ //chort memeber
    let studentss=['rahul','dinesh','vikram']
    res.send(studentss)
})

router.get('/cohort details', function (req,res){

})

router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/student-detail',function(req, res){ //student detail api he 
     let detiasllsl= ["vikram ","raju","prince"]//api is implementation is used to send response for request
     res.send(detiasllsl)//movies wala iske jese krna he
})

router.get('/student-details:name',function(req, res){ //student detail api he 
    let reqParams = req.params
    console.log("This is the request "+JSON.stringify(reqParams))
    
    let studentName = reqParams.name
    console.log("Name of the student is ",studentName)
    //assuming details is firstname +firstname
   // let studentDetails = studentName + " "+ studentName
    //res.send(studentDetails)
    res.send("dummy code")
})

router.get('/student-detailss:name',function(req, res){ //student detail api he 
    res.send(name)
})

//first problem movie wala code he idhar 
router.get('/get-movies',function(req, res){ //student detail api he 
    let movies1= ["shole ","Rang de basanti","dil mange more","tiranga"]//api is implementation is used to send response for request
    res.send(movies1)//movies wala iske jese krna he
})
// second wala problem code idhar he 
router.get('/get-movie/:indexNumber',function(req, res){ //student detail api he 
    
    let movies=['rang de basanti','The shining','Lord of the rings','batman begins']
    let index = req.params.indexNumber;
    console.log(movies[index])
     res.send(movies[index])
})
//Third wala solution 
router.get('/get-moviess/:indexNumber',function(req, res){ //student detail api he 
    
    let moviesName=['rang de basanti','The shining','Lord of the rings','batman begins']
    let index = req.params.indexNumber;

     if(index > moviesName.length){
        return res.send("use a valid index  ")
     }else{
    
     res.send(moviesName[index])
     }
})
//forth wala idhar he
router.get('/get-/films',function(req, res){ //student detail api he    

    let moviesName=[ {"id": 1,"name": "The Shining"}, 
 {"id": 2,"name": "Incendies"}, 
 {"id": 3,"name": "Rang de Basanti"},
  {"id": 4,"name": "Finding Nemo"}]
    res.send(moviesName)
})
//all set program perfect chal raha he done 

//fifth program 

router.get('/get-/films/:indexNumber',function(req, res){ //student detail api he    

    let moviesName=[ {"id": 1,"name": "The Shining"}, 
 {"id": 2,"name": "Incendies"}, 
 {"id": 3,"name": "Rang de Basanti"},
  {"id": 4,"name": "Finding Nemo"}]
    let index = req.params.indexNumber;
     if(index > moviesName.length){
        return res.send("no movie exist with this id ")
     }else{
     res.send(moviesName[index])
     }
})


module.exports = router;
// adding this comment for no reason