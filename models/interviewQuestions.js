const mongoose = require('mongoose');

const interviewQuestionSchema = new mongoose.schema({
    title: {type: String, require: true},
    question: {type: String, require: true},
    tips: {type: String},
    script: {type: String},
    completed: {type: Boolean, require: true},
    timer: {type: Number} 
}, {
    timeStamps: true
});

module.exports = Mongoose.model("interviewQuestions", interviewQuestionSchema);