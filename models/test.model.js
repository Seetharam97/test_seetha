"use strict"

const mongoose = require("mongoose");

const markSchema = new mongoose.Schema({
    name: {type:String, required: true, trim: true},
    roll_no: {type: String, required: true, trim: true, unique: true},
    tamil: {type: Number, required: false, trim: true},
    english: {type: Number, required: false, trim: true},
    maths: {type: Number, required: false, trim: true},
    science: {type: Number, required: false, trim: true},
    social: {type: Number, required: false, trim: true}},
    {
        timestamps: true
    }
);

// export the model
module.exports = mongoose.model("mark", markSchema, "mark");