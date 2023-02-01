const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    Phone:{
        type:String,
        required:true,
        trim:true
    },
    Otp:{
        type:String,
        required:true,
        trim:true
    },
    Name:{
        type:String,
        required:true,
        trim:true
    },
    Email:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    Gender:{
        type:String,
        required:true,
        enum:['Male','Female','Other'],
    },
    Age:{
        type:Number,
        required:true,
        trim:true
    },
    Education:{
        type:String,
        required:true,
        trim:true
    },
    Occupation:{
        type:String,
        required:true,
        trim:true
    },
    City:{
        type:String,
        required:true,
        trim:true
    },
    Pincode:{
        type:Number,
        required:true,
        trim:true
    },
    Address_Line_1:{
        type:String,
        required:true,
        trim:true
    },
    Address_Line_2:{
        type:String,
        required:true,
        trim:true
    },
    Address_Pincode:{
        type:Number,
        required:true,
        trim:true
    }
    
}, {timestamps:true})

module.exports = mongoose.model("UserDetails", userSchema); //userDetails