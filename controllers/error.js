exports.pageNotFound = (req, res, next) => {
    res.status(404).render('404', { 
        pageTitle: 'Error', 
        path: '/404',
        isAuthenticated: req.session.isLoggedIn
    });
}