const PORT = 3003

const express = require('express')
const bodyParser = require('body-parser')

const server = express()

const allowCors = require('./cors')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(PORT, () => console.log('Backend is on port. ' + PORT))

module.exports = server
