const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/StudentDBex'

const app = express()

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const router = require('./routes/student')
app.use('/students',router)

app.listen(9000, () => {
    console.log('Server started')
})