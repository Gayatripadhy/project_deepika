const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const paymentSchema = new Schema({
   name: {
        type:String,
        required:true,
    },
    tid : {
        type:String,
        required:true,
    }
    
    
});

// Compile model from schema
const paymentModel = mongoose.model("paymentsModel", paymentSchema);
module.exports = paymentModel