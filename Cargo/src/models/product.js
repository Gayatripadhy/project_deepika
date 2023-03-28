const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const productSchema = new Schema({
    PName : {
        type:String,
        required:true,
    },
    
    PWeight : {
        type:String,
        required:true
    },
    lfrom : {
        type:String,
        required:true
    },
    lto : {
        type:String,
        required:true
    },
    price : {
        type:Number,
        required:true
    },
    email : {
        type:String,
        required:true
    }
});

// Compile model from schema
const productModel = mongoose.model("productsModel", productSchema);
module.exports = productModel