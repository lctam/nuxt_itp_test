const bodyParser = require('body-parser')
const session = require('express-session')

module.exports = {
    css: [
        'assets/main.css'
    ],
    serverMiddleware: [
        // body-parser middleware
        bodyParser.json(),
        // session middleware
        session({
            secret: 'super-secret-key',
            resave: false,
            saveUninitialized: false,
            cookie: { maxAge: 60000 }
        }),
        // Api middleware
        // We add /api/login & /api/logout routes
        '~/api'
    ]
}