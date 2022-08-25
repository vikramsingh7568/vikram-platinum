
const mid1= function ( req, res, next) {
    req.falana= "hi there. i am adding something new to the req object"
    console.log("Hi I am a middleware named Mid1")
    //function is a set of code which is used to do a specific tast 
    //we made function to handle the code which we need multiple time in the program
    //defination = write once , use anywhere
    function isPrime(number){
        for(let i=2; i<number; i++)
        if(number%i==0){
            return i
        } else {
            return 1
        }
    }
    let store = isPrime(24)
 console.log("this is returned value ",store)

    next()
}

const mid2= function ( req, res, kaliyaNag) {
    console.log("Hi I am a middleware named Mid2")
    kaliyaNag()
}

const mid3= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid3")
     next()   
}

const mid4= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid4")
    next()
}

function NOFunction(req, res, next){
    console.log("this is checking process")
    res.send("wow its working ")
}


module.exports.NOFunction=NOFunction
module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3
module.exports.mid4= mid4
