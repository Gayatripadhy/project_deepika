const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const auserSchema = new Schema({
    fname : {
        type:String,
        required:true,
    },
    lname : {
        type:String,
        required:true,
    },

    email : {
        type:String,
        required:true,
    },

    age : {
        type:String,
        required:true,
    },
    pnumber : {
        type:String,
        required:true,
    },
    
    dob : {
        type:String,
        required:true
    },
    
    password : {
        type:String,
        required:true
    },

    confirmpassword : {
        type:String,
        required:true
    },

});

// Compile model from schema
const UserModel = mongoose.model("usersModel", auserSchema);
module.exports = UserModel