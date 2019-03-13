const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyparser = require('body-parser')

app.use(bodyparser.json())

// require('./backend/db-connection')(mongoose)

require('./backend/routes')(app)

const server = app.listen(3000, (err)=>{
    console.log("Server run on", server.address().port)
})