const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const priceSchema = new Schema({
   pais: {
        type:Number,
        required:true,
        default: 5
    },
    
    
});

// Compile model from schema
const priceModel = mongoose.model("pricesModel", priceSchema);
module.exports = priceModel