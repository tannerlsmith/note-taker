// the const can't be changed/ redefined
// added security
const express = require('express')
const app = express()
const htmlroutes = require('./routes/htmlroutes')

app.use(express.json())

// building middleware to use in the app
app.use(express.urlencoded({
    extended: true
}))

app.use(express.static('public'))
app.use(htmlroutes)

const port = 3001
app.listen(port, ()=>{
    console.log('listening on port: ' + port)
})