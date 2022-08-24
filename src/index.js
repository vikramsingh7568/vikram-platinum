const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
// post request me req.body karte he json data milta he 
//is line ke karan milta he bodyparser parser the data in the body 
//put the data in the body 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://vikramsingh7568:AlLbBhXCJYPKmwIK@cluster0.5swhv4u.mongodb.net/New_Collection_populate?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

// global middlw ware har router file ke chalne se pehele cahl jayega
//ek din me jitni api hit hoti uska data rakhne ke liye ham global middle ware chla denge 
app.use(
    function (req,res,next){
        console.log("global chal rahah middlw ware index file me ")
           let date=  Date()
        console.log( date )
        console.log(req.socket.remoteAddress)
       next()
    } 
 )
// globar har bar chalgea
app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
