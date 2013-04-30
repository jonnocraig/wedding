
var async = require('async');

module.exports = function (app, passport, auth) {

    // user routes
    var users = require('../app/controllers/users');

    app.get('/login', users.login);
    app.get('/secretSignup', users.signup);
    app.get('/logout', users.logout);

    var defaultRoutes = require('../app/controllers/defaultRoutes');
    
    app.get('/info', auth.requiresLogin, defaultRoutes.info);

    app.get('/gallery', auth.requiresLogin, defaultRoutes.gallery);

    app.get('/video', auth.requiresLogin, defaultRoutes.video);

    app.get('/invitation', auth.requiresLogin, defaultRoutes.invitation);

    app.get('/accommodation', auth.requiresLogin, defaultRoutes.accommodation);

    app.get('/registry', auth.requiresLogin, defaultRoutes.registry);

    app.get('/rsvp', auth.requiresLogin, defaultRoutes.rsvp);

    app.post('/rsvp/result', auth.requiresLogin, defaultRoutes.rsvpResult);

    app.get('/thankyou', auth.requiresLogin, defaultRoutes.thankyou);

    app.get('/contact', auth.requiresLogin, defaultRoutes.contact);
             
    app.post('/users', users.create);
    app.post('/users/session', passport.authenticate('local', {failureRedirect: '/login', failureFlash: 'Invalid email or password.'}), users.session);
    // app.get('/users/:userId', users.show);
    // app.get('/auth/facebook', passport.authenticate('facebook', { scope: [ 'email', 'user_about_me'], failureRedirect: '/login' }), users.signin);
    // app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), users.authCallback);
    // app.get('/auth/github', passport.authenticate('github', { failureRedirect: '/login' }), users.signin);
    // app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login' }), users.authCallback);
    // app.get('/auth/twitter', passport.authenticate('twitter', { failureRedirect: '/login' }), users.signin);
    // app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/login' }), users.authCallback);
    // app.get('/auth/google', passport.authenticate('google', { failureRedirect: '/login', scope: 'https://www.google.com/m8/feeds' }), users.signin);
    // app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login', scope: 'https://www.google.com/m8/feeds' }), users.authCallback);

    // app.param('userId', users.user);

    // article routes
    // var articles = require('../app/controllers/articles');

    // app.get('/articles', articles.index);
    // app.get('/articles/new', auth.requiresLogin, articles.newArticle);
    // app.post('/articles', auth.requiresLogin, articles.create);
    // app.get('/articles/:id', articles.show);
    // app.get('/articles/:id/edit', auth.requiresLogin, auth.article.hasAuthorization, articles.edit);
    // app.put('/articles/:id', auth.requiresLogin, auth.article.hasAuthorization, articles.update);
    // app.del('/articles/:id', auth.requiresLogin, auth.article.hasAuthorization, articles.destroy);

    //app.param('id', articles.article);

    // home route
    app.get('/', auth.requiresLogin, defaultRoutes.info);

    // comment routes
    // var comments = require('../app/controllers/comments');
    // app.post('/articles/:id/comments', auth.requiresLogin, comments.create);

    // tag routes
    // var tags = require('../app/controllers/tags');
    // app.get('/tags/:tag', tags.index);

};
