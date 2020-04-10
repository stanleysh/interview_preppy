var User = require('../models/users');
var InterviewQuestion = require('../models/interviewQuestions');

module.exports = {
    createQuestion,
    updateQuestion,
    deleteQuestion,
    showAll,
    showUserQuestions
}

function createQuestion(req, res) {
    const question = new InterviewQuestion(req.body);
    question.save();
    User.findById(req.user._id, function(err, user) {
        user.questions.push(question);
        console.log(user.questions)
        user.save(function(err) {
            if (err) {
                console.log(err);
                return res.json({err})
            };
            res.json({msg: 'Question created'});
        });
    });
};

// Mainly for development purposes
async function showAll(req, res) {
    const questions = await InterviewQuestion.find({})
    res.json(questions)
}

async function showUserQuestions(req, res) {
    try {
        const questions = await InterviewQuestion.find({'user': req.user._id});
        res.json(questions);
    } catch (err) {
        res.json(err);
    };
};

function updateQuestion(req, res) {
    InterviewQuestion.findById(req.q_id, function(err, question) {
        question(req.body);
        question.save(function(err) {
            if (err) {
                console.log(err)
                return res.json({err});
            };
            res.json({msg: 'Question updated'});
        });
    });
};

function deleteQuestion(req, res) {
    InterviewQuestion.findByIdAndDelete(req.q_id, function(err){
        if (err) {
            console.log(err)
            return res.json({err});
        };
        res.json({msg: 'Question deleted'});
    });
};

