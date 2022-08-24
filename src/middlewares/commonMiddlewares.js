
//********************************************************************************************************* */
//middleware 
//this is router bases middle ware
//middleware control the flow of the program
//nextvikram is call back function it passes the control to the next function or next line 
//if the next funtion is missed the it will hand and the page got stuck in the middle 
//middlewate can be used to sperate restriceted or open to use api 

let authenticData = function(req,response,next){
    console.log("i am middle ware")
    let loggedIn = false
    if(loggedIn == true){
        next()
    }
     else{
            response.send("please log in or register to use facebook")
          //  res.send("please log in or register to use facebook")
             }
}
//middlerware

let mid2 = function(req,response,nextvikram){
    console.log("i am middle 2")
     nextvikram()
}

module.exports.authenticData =authenticData
module.exports.mid2 =mid2

