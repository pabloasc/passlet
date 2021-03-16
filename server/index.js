const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config();

const db = require('./db')
const patternRouter = require('./routes/patterns-router')

const app = express()
const apiPort = 3030

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', patternRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
