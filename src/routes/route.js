const express = require('express');
const abc = require('../introduction/intro');
// const underScore = require('underscore')
const lodash = require('lodash')
const First = require('../logger/logger');//creating require for welcome function
const { Welcome } = require('../logger/logger');
const Second =require('../introduction/util/helper');//cretinng require for second task
const Third = require('../introduction/validator/formatter')//creating require for third task
const router = express.Router();
//let  app = express.Router();

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



// adding this comment for no reason**************************************************************

//this is the first problem of 9-8-22
router.get('/missing1', function(req, res){
    let arr =[1,2,3,4,5,6,7,8,9,10,11,13,14,15,16]
    
    function missingNumber(arr){
    for(let i=0; i<arr.length; i++){
        if(i+1 != arr[i]){
           return arr[i]-1
        }
     }    
    }
   let   missing_number = missingNumber(arr)
    // console.log(result)
    //res.send(result.toString())
     res.send('this number is not found ='+missing_number)
})


router.get("/sol2", function (req, res) {

    //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
 //2nd problem solution  9-8-2022
    let arr= [33, 34, 35, 37, 38]
     let len= arr.length
     let total = 0;
     for (var i in arr) {
         total += arr[i];
     }
     let firstDigit= arr[0]
     let lastDigit= arr.pop()
     let consecutiveSum= (len + 1) * (firstDigit+ lastDigit ) / 2
     let missingNumber= consecutiveSum - total
  
    res.send(   'missing number = '+ missingNumber    );
   });

   //10 -8 - 2022 lecrure on node ke notes idhar he ************************************

router.get('/this/testing', function (req,res){
    res.send('this is testing again wer are testing')
})



router.get('/this/testing2', function (req,res){
    res.send('this is testinng 2 wow maja aa gaya sab apne aap hota')
})


router.get('/this/testing3', function (req,res){
    res.send({ a: 6, b: 34, msg: "maja aa gaya wow ye to badi chhi chij he  "  })
})

//post api use krte taki data safe or secure rahe 


router.post('/this-post', function (requ,res){
    let id = requ.body.user //req.body me value aati he 
    let password = requ.body.password
    console.log("this is id      =", id)
    console.log("this is password = ",password)
    console.log(requ.body) //user id pass print krega
    res.send('code successully chal gaya he ')
})

//take input in post request and add it in the aaray and return the aaray
router.post('/test-pos-4', function (req,res){
     let arr = [12,"vikram"] //hamara array he ye 
     let input = req.body.element //eleement me value lenge udharr se postman se
     arr.push(input) //input me aai value ko hamare array me push kar diya
    res.send({ msg: arr, status: true}) //returning data in object form 
    // msg is key arr is value status is key true is value
    // res.send({arr})
})

//assignment solution is here 10-8-22

let players =[
    {
        "name":"manish",
        "dob" :"1/1/1995",
        "gender":"male",
        "city":"jalandhar",
        "sports":[
            "swimming"
        ],
    },
     
    {
        "name":"gopal",
        "dob" :"1/09/1995",
         "gender": "male",
         "city" :"delhi",
         "sports":[
            "soccer"
         ],
    },
      
     {
         "name":"lokesh",
         "dob" :"1/1/1990",
         "gender":"male",
          "city":"mumbai",
          "sports":[
            "soccer"
          ],
          
        },
        
    ]

    router.post('/players', function (req,res){
      //  console.log(req.body)
      let name1   = req.body.name;
      let dob1    = req.body.dob
      let gender1 = req.body.gender
      let city1   = req.body.city
      let sports1  = req.body.sports
    //  console.log(name1)
   //console.log(players[0].name)
    for(let i=0 ; i<players.length; i++){
        if(players[i].name ==name1){
           return res.send("this data already exist")
        }
    }
         players.push(name1)
         players.push(dob1)
         players.push(gender1)
         players.push(city1)
         players.push(sports1)  
        res.send({data : players, status : true})
    
    })


// router.post('/players', function(req, res){

//     let newPlayer = req.body
//     let newPlayersName = newPlayer.name
//    // console.log(newPlayer)
//     let isNameRepeated = false

    // let player condition
    //  for(let i=0; i<players.length; i++){
    //     if(players[i].name == newPlayersName){
    //         isNameRepeated = true;
    //         break;
    //     }
    //  }

//        //undeifned is same as  false 
//             if(isNameRepeated == true){
//                 res.send(' ye aadmi pele se he idhar ')
//             }else
//             {
//                 players.push(newPlayer)
//                 res.send(players)
//             }
            
//     })

    //wer are searching for parmas 
  router.get('/parm:number',function(req, res){
    let number = req.params.number //this print the value which you push in teh url
    let value1 = req.params //this will prit that entered value is object
    res.send("this is working"+number)
  })


//next 2nd question solution*******************************************************

let players1 =[
    {
        "name":"manish",
        "bookingNumber": 1,
        "dob" :"1/1/1995",
        "gender":"male",
        "city":"jalandhar",
        "sports":[
            "swimming"   ],
       
    "sportId": "",
    // "centerId : '',
   "type": "private",
   "slot": '16286598000000',
   "bookedOn":'31/08/2021',
   "bookedFor":'01/09/2021',
    },
     
    
     
    {
        "name":"gopal",
        "bookingNumber": 2,
        "dob" :"1/09/1995",
         "gender": "male",
         "city" :"delhi",
         "sports":[
            "soccer"
         ],
        
         "sportId": "",
         // "centerId : '',
        "type": "private",
        "slot": '16286598000000',
        "bookedOn":'31/08/2021',
        "bookedFor":'01/09/2021',
    },
      
     {
         "name":"lokesh",
         "bookingNumber":3,
         "dob" :"1/1/1990",
         "gender":"male",
          "city":"mumbai",
          "sports":[
            "soccer"
          ],
         
          "sportId": "",
          // "centerId : '',
         "type": "private",
         "slot": '16286598000000',
         "bookedOn":'31/08/2021',
         "bookedFor":'01/09/2021',
          
        },
        
    ]

    let play = [
        {
          "name" :"vikram",
           "bookingNumber":"1",
           "dob" :"1/1/1995",
           "gender":"male",
           "city":"jalandhar",
           "sports":[
               "swimming"   ],
          
       "sportId": "",
    //    "centerId : '',
      "type": "private",
      "slot": '16286598000000',
      "bookedOn":'31/08/2021',
      "bookedFor":'01/09/2021',
        },
          {
            "name":"manish",
            "bookingNumber":"2",
            "dob" :"1/09/1995",
            "gender": "male",
            "city" :"delhi",
            "sports":[
               "soccer"
            ],
           
            "sportId": "",
            // "centerId : '',
           "type": "private",
           "slot": '16286598000000',
           "bookedOn":'31/08/2021',
           "bookedFor":'01/09/2021',
          },
          {
            "name":"rahul",
            "bookingNumber":"3",
            "dob" :"1/1/1990",
            "gender":"male",
             "city":"mumbai",
             "sports":[
               "soccer"
             ],
            
             "sportId": "",
             // "centerId : '',
            "type": "private",
            "slot": '16286598000000',
            "bookedOn":'31/08/2021',
            "bookedFor":'01/09/2021',
          }
         
      ]
      

    router.post('/playerss', function(req, res){

        // let Playername = req.params.Playername
        // let Playerid   = req.params.Playerid

         
         let Playername = req.body.Playername
         let Playerid   = req.body.Playerid
      for(let i=0; i<play.length; i++){
           if(play[i].name == Playername &&  play[i].bookingNumber == Playerid){
            console.log("this person is already exist")
            return res.send("this person is already exist")
            
           }
          
      }
           for(let j=0 ; j<play.length; j++){
            if(play[j].name == Playername && play[j].bookingNumber != Playerid){
                console.log("welcome your id is generated")
                return  res.send("wlcome your id is generated ")     
            }
      }
    
      for(let k=0 ; k<play.length; k++){
        if(play[k].name != Playername  ){
            console.log("sorry this name is not available in our player list")
            return  res.send("sorry this name is not available in our player list ")     
        }
  }
   
})
//Assignment 3rd problem*******************************************************

let persons = [
    {
      name : "PK",
      age : 10,
      votingstatus : false
    },
    {
        name : "Sk",
        age : 20,
        votingstatus : false
    },
    {
        name : "AA",
        age : 70,
        votingstatus : false
    },
    {
        name : "SC",
        age : 5,
        votingstatus : false
    },
    {
        name : "HQ",
        age : 40,
        votingstatus : false
    }
]
router.post("/persons", function(req,res){
     let InputAge=req.query.Age 
    let person=[]
     let flag =false
   for(let i=0; i<persons.length; i++){
      if(persons[i].age >=InputAge && InputAge >=18){
        persons[i].votingstatus=true
         person.push(persons[i])
         flag =true
      }
   }
      if(flag==true){
     res.send({vall :"Eligible for voting", data : person, votingstatus :true})
    }

     for(let i=0; i<persons.length; i++){
        if(persons[i].age <=InputAge && InputAge <=18){
          persons[i].votingstatus=false
           person.push(persons[i])
        }
     }   
        if(flag==false){
       res.send({va:"not eligible for voting", data : person, votingstatus :flag})
    }

})

module.exports = router;