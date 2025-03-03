const mongoose = require('mongoose')
const express = require('express')
require('dotenv').config()
const cors = require('cors')
const bodyparser = require('body-parser')
const route  = require('./Routes/UserRotes.js')


const app = express()

const PORT = process.env.PORT || 5050
app.use(express.json())
app.use('/crud', route)
app.listen(PORT, () => {
    console.log(`Port is Running on ${PORT}`)
})

const mongo_con = process.env.MONGO_CONNCTION

mongoose.connect(mongo_con)
    .then(() => {
        console.log("Mongodb is Connected...")
    }).catch((err) => {
        console.log("Mongodb Connection Errror", err)
    })
