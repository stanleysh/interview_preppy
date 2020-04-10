const User = require('../models/users');
const InterviewQuestion = require('../models/interviewQuestions');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;
const defaultQuestions = require('../src/Data/questionData');


module.exports = {
  signup,
  login,
  index,
  userLookup,
  getQuestions
};

async function signup(req, res) {
  const user = new User(req.body);
  const token = createJWT(user);
  defaultQuestions.forEach(question => {
    var newQuestion = new InterviewQuestion(question)
    newQuestion.user = user._id;
    newQuestion.save();
  })
  try {
    await user.save();
    res.json({ token });
  } catch (err) {
    res.status(400).json(err);
  }
}

async function login(req, res) {
  try {
    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status(401).json({err: 'bad credentials'});
    user.comparePassword(req.body.pw, (err, isMatch) => {
      if (isMatch) {
        const token = createJWT(user);
        res.json({token});
      } else {
        return res.status(401).json({err: 'bad credentials'});
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

async function index(req, res) {
  const users = await User.find({});
  res.json(users);
}

async function userLookup(req, res) {
  const user = await User.findById(req.params.id);
  res.json(user);
}

function getQuestions(req, res) {
  User.findById(req.params.id)
  .populate('questions')
  .exec((err, user) => {
    if(err) {
      console.log("index error: " + err);
      res.sendStatus(500);
    }
    res.json(user);
  });
};


function createJWT(user) {
  return jwt.sign(
    {user},
    SECRET,
    {expiresIn: '24h'}
  );
}