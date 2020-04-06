var User = require('../models/users');
var InterviewQuestion = require('../models/interviewQuestions');

function createQuestion(req, res) {
    const question = new InterviewQuestion(req.body);

    User.findById(req.user._id, function(err, user) {
        user.questions.push(question);
        user.save(function(err) {
            if (err) {
                console.log(err);
                return res.json({err})
            };
            res.json({msg: 'Question created'});
        });
    });
};

function readQuestions(req, res) {
    User.findById(req.user._id, function(err, user) {
        
    })
}

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

module.exports = [
    createQuestion,
    updateQuestion,
    deleteQuestion
]