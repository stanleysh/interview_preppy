const express = require('express');
const router = express.Router();
const questionsCtrl = require('../../controllers/questions');

router.use(require('../../config/auth'));
// router.get('/user._id', checkAuth, questionsCtrl);
router.get('/all', questionsCtrl.showAll);
router.get('/', checkAuth, questionsCtrl.questions)

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;
