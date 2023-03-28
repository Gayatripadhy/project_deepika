const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const locationSchema = new Schema({
   locate: {
        type:String,
        required:true,
    },
    
    
});

// Compile model from schema
const locationModel = mongoose.model("locationsModel", locationSchema);
module.exports = locationModel