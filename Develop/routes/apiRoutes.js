const router = require('express').Router();
const fs = require('fs');
const { nanoid } = require('nanoid')
var ID = nanoid();

router.get('/api/notes', (req, res) =>{
    console.log('in the get route')
    fs.readFile('./db/db.json', (err, data) =>{
        if (err) throw err;
        res.send(data)
    })
})

router.post('/api/notes', (req, res) => {
    console.log('in the post route')
    fs.readFile('./db/db.json', (err, data) =>{
        if (err) throw err;
        res.send(data)
    })
    // Already have data, need to add more stuff to data.
    // have to re-write db.json
    // writefile
    
    // Am I writing this in the correct spot?
    fs.writeFile('./db/db.json' ({ body }, data)

    )
    




})

module.exports = router