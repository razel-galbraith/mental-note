const express = require('express')
const path = require('path')
const request = require('superagent')

const entryRoutes = require('./routes/diary')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/diary', entryRoutes)
// forcing a route manually, any other route not specified above points back to index.html
// points back to Browser Router
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})

server.get('/api/v1/meme', (req, res) => {
  request
    .get(`https://api.imgflip.com/get_memes`)
    .then((response) => {
      console.log(response.body)
      res.json(response.body)
    })
    .catch((err) => {
      console.log(err)
      res.send('err')
    })
})

module.exports = server
