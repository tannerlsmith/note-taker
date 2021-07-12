// building 2 routes /notes, and * 
const router = require('express').Router();
const path = require('path')

// returns notes.html
router.get('/notes', (req, res) =>{
    // method from req , send file
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

// returns (*) = every other route
router.get('*', (req, res) =>{
    // method from req , send file
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

module.exports = router