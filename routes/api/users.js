const express = require('express');
const router = express.Router();
const User = require('../../models/users');
const usersCtrl = require('../../controllers/users');

/*---------- Public Routes ----------*/
router.post('/signup', usersCtrl.signup);
router.post('/login', usersCtrl.login);
router.get('/:user_id', usersCtrl.index);

/*---------- Protected Routes ----------*/
function checkAuth(req, res, next) {
if (req.user) return next();
    return res.status(401).json({msg: 'Not Authorized'});
}



module.exports = router;