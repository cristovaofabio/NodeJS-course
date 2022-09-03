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

exports.getSignup = (req, res, next) => {
    res.render('auth/signup', {
        path: '/signup',
        pageTitle: 'Signup',
        isAuthenticated: false,
    });
}

exports.postLogin = (req, res, next) => {
    User.findById('6308bd809796725e508d28c9')
        .then(user => {
            req.session.isLoggedIn = true;
            req.session.user = user;
            req.session.save((err) => {
                console.log(err);
                res.redirect('/');
            });
        })
        .catch(err => console.log(err));
}

exports.postSignup = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const confirmPassword = req.body.confirmPassword;
    User.findOne({ email: email })
        .then(userDoc => {
            if (userDoc) {
                return res.redirect('/signup');
            }
            const user = new User({
                email: email,
                password: password,
                cart: { items: [] }
            });
            return user.save();
        }).then(result => {
            res.redirect('/login');
        })
        .catch(err => {
            console.log(err);
        });
}

exports.postLogout = (req, res, next) => {
    req.session.destroy((err) => {
        console.log(err);
        res.redirect('/');
    });
}