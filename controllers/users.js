const User = require('../models/users');
const InterviewQuestion = require('../models/interviewQuestions');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;
const defaultQuestions = require('../src/Data/questionData');


module.exports = {
  signup,
  login,
  readInfo
};

async function signup(req, res) {
  const user = new User(req.body);
  defaultQuestions.forEach(question => {
    var newQuestion = new InterviewQuestion(question)
    user.questions.push(newQuestion);
  })
  try {
    await user.save();
    const id = user._id;
    const token = createJWT(user);
    res.json({id})
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

function index(req, res) {
  const user = User.findById(req.user_id);
  const name = user.name;
  res.json({name})
}


function createJWT(user) {
  return jwt.sign(
    {user},
    SECRET,
    {expiresIn: '24h'}
  );
}