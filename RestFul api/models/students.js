const mongoose = require('mongoose');
const validator = require('validator');
const studentSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobile:Number,
    password:String}, { versionKey: false })  //schema making the database

const Student = mongoose.model('Student',studentSchema);

module.exports = Student;