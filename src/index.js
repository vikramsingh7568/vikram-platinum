const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
var router = express.Router()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh8769811-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

// app.use (
//     function (req, res, next) {
//         console.log ("inside GLOBAL MW");
//         next();
//   }
//   );
const moment =require('moment')
const time = moment();
// app.use(
//     function (req,res,next){
//         console.log("global chal raha middle ware index file me ")
//         console.log(time.format('YYYY,MM,DD'))
//         console.log(time.format('h:mm:ss'))
//         //console.log(req.socket.remoteAddress)
//         console.log(req.ip)
//         console.log(req.originalUrl)
//        next()
//     } 
//  )

app.use(

    function mid4(req, res, next) {
        console.log("Hi I am a middleware named Mid4")
        next()
    }
)



//  router.all('/basicRoute',function(req,res){
//     console.log("basicRouter page called")
//     res.end();
// })

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
