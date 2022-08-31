const User = require('../models/user');

exports.getLogin = (req, res, next) => {
    let isAuthentication = false;
    let cookieString = req.get('Cookie');
    if (cookieString) {
        let cookieArray = cookieString.split(';');
        cookieArray.forEach((cookie) => {
            if (cookie.includes('loggedIn')) {
                isAuthentication = cookie.split('=')[1] == 'true';
            }
        })
    }
    res.render('auth/login', {
        pageTitle: 'Login',
        path: '/login',
        isAuthenticated: isAuthentication
    });
}

exports.postLogin = (req, res, next) => {
    User.findById('6308bd809796725e508d28c9')
        .then(user => {
            req.session.isLoggedIn = true;
            req.session.user = user;
            res.redirect('/');
        })
        .catch(err => console.log(err));
}