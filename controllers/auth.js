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
    res.setHeader('Set-Cookie', 'loggedIn=true');
    res.redirect('/');
}