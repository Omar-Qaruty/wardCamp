const router = require('express').Router()


router.route('/')
    .get((req, res) =>
    {
        res.json({
            "message": "auth"
        })
    })

module.exports = router 