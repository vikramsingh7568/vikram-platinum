const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type : String,
        required : true
    }, 
    authorName : String,
    year: {
        type: Number,
        default: 2021
    },
    tags: [String],      
    price: {
        indianPrice: Number,
        europeanPrice: Number,
    },
    totalPages : Number,
    stockAvailable : Boolean,
    summary : mongoose.Schema.Types.Mixed //this data can bbe array or string anyting 
    //mixed is used to send all types of data into single key 
    //{
        // "ch1":"Awesome intro to node js",
        // "ch2":"intro to node js ",

    //}
}, { timestamps: true });


module.exports = mongoose.model('Books', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
