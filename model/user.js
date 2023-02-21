const mongoose = require('mongoose')
const userSchema = new mongoose.Schema ({
    name : {
        type : String,
        required : true
    },
    phoneNumber : {
        type : Number,
        required : true
    },
    emailID : {
        type : String,
        required : true
    },
    dateCreated : {
        type : Date,
        required : false,
        default : Date.now
    }
})

module.exports = mongoose.model('User',userSchema)