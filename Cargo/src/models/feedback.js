const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const afeedbackSchema = new Schema({
    name : {
        type:String,
        required:true,
    },
   
    email : {
        type:String,
        required:true,
    },
 
  
    feedback : {
        type:String,
        required:true
    },


});

// Compile model from schema
const feedbackModel = mongoose.model("feedbacksModel", afeedbackSchema);
module.exports = feedbackModel
