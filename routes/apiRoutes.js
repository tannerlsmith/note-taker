const router = require('express').Router();
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// 


router.get('/api/notes', (req, res) =>{
    console.log('in the get route')
    fs.readFile('./db.db.json', (err, data) =>{
        if (err) throw err;
        res.send(data)
    })
})

router.post('/api/notes', (req, res) => {
    // for new notes
    const newNote = req.body;

    // for newNote id
    console.log('\n\nPOST req - newNote : ' + JSON.stringify(newNote));
    newNote.id = uuidv4();
    let data = JSON.parse(fs.readFileSync('./db.db.json', 'utf8'));

    // Writes new note
    data.push(newNote);
    fs.writeFileSync('./db.db.json', JSON.stringify(data));
    console.log("\nSuccessfully added new note to 'db.json' file");
    res.json(data);

    


})

module.exports = router




