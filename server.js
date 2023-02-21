const express = require('express')
const app = express()

require('dotenv').config()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}))

app.listen(process.env.PORT || 3000) // for setting port number for server

const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DATABASE_URL)

// Routes
const register = require('./routes/index')
// app.use('/register',register)
app.use('/', register)


// Database connect
const db = mongoose.connection

db.on('error', error => console.log(error))
db.once('open', () => console.log('Mongoose connected successfully'))