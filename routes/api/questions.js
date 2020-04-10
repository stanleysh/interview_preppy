const express = require('express');
const router = express.Router();
const questionsCtrl = require('../../controllers/questions');

router.use(require('../../config/auth'));
router.get('/all', questionsCtrl.showAll);
router.get('/', checkAuth, questionsCtrl.showUserQuestions)
router.get('/single', checkAuth, questionsCtrl.getOneQuestion)
router.post('/new', checkAuth, questionsCtrl.createQuestion)
router.put('/:q_id', checkAuth, questionsCtrl.updateQuestion)
router.delete('/:q_id', checkAuth, questionsCtrl.deleteQuestion)

function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({msg: 'Not Authorized'});
}

module.exports = router;
