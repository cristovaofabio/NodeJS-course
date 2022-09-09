const express = require('express');
const { check, body } = require('express-validator');

const authController = require('../controllers/auth');

const router = express.Router();

router.get('/login', authController.getLogin);
router.get('/signup', authController.getSignup);
router.get('/reset', authController.getReset);
router.get('/reset/:token', authController.getNewPassword);

router.post('/login', authController.postLogin);
router.post('/signup',
    [
        check('email').isEmail().withMessage('Please enter with a valid email.'),
        body('password', 'Invalid password! Insert only numbers and text and at least 6 characters').isLength({ min: 6 }).isAlphanumeric()
    ],
    authController.postSignup);
router.post('/logout', authController.postLogout);
router.post('/reset', authController.postReset);
router.post('/new-password', authController.postNewPassword);

module.exports = router;
