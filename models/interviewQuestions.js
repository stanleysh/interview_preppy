const mongoose = require('mongoose');

const interviewQuestionSchema = new mongoose.schema({
    title: {type: String, require: true},
    question: {type: String, requie: true},
    
})