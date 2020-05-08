var User = require('../models/users');
var InterviewQuestion = require('../models/interviewQuestions');

module.exports = {
    createQuestion,
    updateQuestion,
    deleteQuestion,
    showAll,
    getOneQuestion,
    showUserQuestions
}

function createQuestion(req, res) {
    const question = new InterviewQuestion(req.body);
    question.save();
    User.findById(req.user._id, function(err, user) {
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

async function getOneQuestion(req, res) {
    try {
        const question = await InterviewQuestion.findById(req.params.q_id);
        res.json(question);
    } catch (err) {
        res.json(err)
    }
}

function updateQuestion(req, res) {
    InterviewQuestion.findByIdAndUpdate(req.params.q_id, {$set: req.body}, function(err, question){
        if (err) {
            console.log(err)
            return res.json({err});
        };
        res.json({msg: 'Question updated'});

    });
};

function deleteQuestion(req, res) {
    InterviewQuestion.findByIdAndDelete({_id:req.params.q_id}, function(err){
        if (err) {
            console.log(err)
            return res.json({err});
        };
        res.json({msg: 'Question deleted'});
    });
};