// the const can't be changed/ redefined
// added security
const express = require('express')
const app = express()
const htmlroutes = require('./routes/htmlroutes')
const apiRoutes = require('./routes/apiRoutes')
const PORT = process.env.PORT || 3001;

app.use(express.json())

// building middleware to use in the app
app.use(express.urlencoded({
    extended: true
}))

// Needs to be in order to return things in order
app.use(express.static('public'))
app.use(apiRoutes)
app.use(htmlroutes)

// const port = 3001
// app.listen(port, ()=>{
//     console.log('listening on port: ' + port)
// })



// Heroku deploy?
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});