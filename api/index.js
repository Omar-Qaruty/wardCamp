const router = require('express').Router()
const authRouter = require('./auth')
const campRoutes = require('./routes/campgrounds')

router.route('/')
    .get((req, res) =>
    {
        res.json({
            "message": "WardCamp API"
        })
    })

module.exports = {
    '/api/': router,
    '/api/auth': authRouter,
    '/api/camps': campRoutes
} 