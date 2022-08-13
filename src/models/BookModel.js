const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema( {
    BookName:{
        type: String,
        unique: true,
        required: true
    },
    AuthorName: {
        type : String,
        required: true
    },
    Category:{
        type : String,
        required: true,
        enum: ["ScienceFiction", "English","maths"]
    },
    Year:Number,
        
}, { timestamps: true });

module.exports = mongoose.model('Book', BookSchema) //users

