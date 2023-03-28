const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const categorySchema = new Schema({
    category: {
        type:String,
        required:true,
    },
    
    
});

// Compile model from schema
const categoryModel = mongoose.model("categorysModel", categorySchema);
module.exports = categoryModel