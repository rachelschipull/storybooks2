const express = require('express')
const router = express.Router()
const {ensureAuth, ensureGuest} = require('../middleware/auth')

// Login/landing page
router.get('/', ensureGuest, (req,res) => {
    res.render('login', {
        layout: 'login',
    })
})

//Dashboard
router.get('/dashboard', ensureAuth, (req,res) => {
    res.render('dashboard', {
        name: req.user.firstName,
    }
    
    )
})

module.exports = router