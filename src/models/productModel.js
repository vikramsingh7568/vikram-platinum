const mongoose = require('mongoose');

const productSchema = new mongoose.Schema( {
   
    name: String,
	category: String,
	price: {
        type : Number, //mandatory property
        required : true
    }
    }, { timestamps: true });
  
module.exports = mongoose.model('productDocument', productSchema) 
