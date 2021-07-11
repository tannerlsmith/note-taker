const router = require('express').Router();
const fs = require('fs');
const { v1: uuidv1 } = require('uuid');

// 


router.get('/api/notes', (req, res) =>{
    console.log('in the get route')
    fs.readFile('./db/db.json', (err, data) =>{
        if (err) throw err;
        res.send(data)
    })
})

router.post('/api/notes', (req, res) => {
    // for new notes
    const newNote = request.body;

    // for newNote id
    console.log('\n\nPOST request - New Note : ' + JSON.stringify(newnote));
    newNote.id = uuidv1();
    let data = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

    // Writes new note
    data.push(newNote);
    fs.writeFileSync('./db.db.json', JSON.stringify(data));
    console.log("\nSuccessfully added new note to 'db.json' file");
    response.json(data);


})

module.exports = router



