const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const orderSchema = new mongoose.Schema( {
 
    userId: {
        type : ObjectId,
        ref : 'userDocument'
    },
	productId: {
        type : ObjectId,
        ref : 'productDocument'
    },
	amount: Number,
	date: String,
    isFreeAppUser:{
        type : Boolean,
        default : false
    }
	
}, { timestamps: true });

module.exports = mongoose.model('orderDocument', orderSchema)
