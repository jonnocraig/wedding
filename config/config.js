
module.exports = {
    development: {
        root: require('path').normalize(__dirname + '/..'),
        app: {
            name: 'Wedding app'
        },
        //db: 'mongodb://jonathan:Rebecca1@ds037067.mongolab.com:37067/heroku_app14752188',        
        db: 'mongodb://localhost/rebecca-and-jonathan',
        facebook: {
            clientID: "449644665126088",
            clientSecret: "a01de93aefb198c90e7779b93d59107b",
            callbackURL: "http://localhost:3000/auth/facebook/callback"
        },
        twitter: {
            clientID: "CONSUMER_KEY",
            clientSecret: "CONSUMER_SECRET",
            callbackURL: "http://localhost:3000/auth/twitter/callback"
        },
        github: {
            clientID: 'APP_ID',
            clientSecret: 'APP_SECRET',
            callbackURL: 'http://localhost:3000/auth/github/callback'
        },
        google: {
            clientID: "APP_ID",
            clientSecret: "APP_SECRET",
            callbackURL: "http://localhost:3000/auth/google/callback"
        }
    },
    test: {

    },
    production: {
        root: require('path').normalize(__dirname + '/..'),
        app: {
            name: 'Rebecca and Jonathan  1 June 2013'
        },
        db: process.env.MONGOLAB_URI,        
        //mongodb://localhost/rebecca-and-jonathan',
        facebook: {
            clientID: "FACEBOOK_KEY",
            clientSecret: "APP_SECRET1",
            callbackURL: "http://localhost:3000/auth/facebook/callback"
        },
        twitter: {
            clientID: "CONSUMER_KEY",
            clientSecret: "CONSUMER_SECRET",
            callbackURL: "http://localhost:3000/auth/twitter/callback"
        },
        github: {
            clientID: 'APP_ID',
            clientSecret: 'APP_SECRET',
            callbackURL: 'http://localhost:3000/auth/github/callback'
        },
        google: {
            clientID: "APP_ID",
            clientSecret: "APP_SECRET",
            callbackURL: "http://localhost:3000/auth/google/callback"
        }
    }
};
