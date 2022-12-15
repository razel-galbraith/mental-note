const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getDiary()
    .then((results) => {
      res.json(results)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// get an individual entry via ID
router.get('/:id', (req, res) => {
  const id = req.params.id
  db.getEntry(id)
    .then((entry) => {
      res.json(entry)
    })
    .catch(console.error)
})

router.post('/', (req, res) => {
  const entry = req.body
  db.addEntry(entry)
    .then(() => {
      return db.getDiary()
    })
    .then((diary) => {
      res.json(diary)
    })
    .catch(console.error)
})

router.patch('/:id', (req, res) => {
  const id = req.params.id
  const entry = req.body
  db.updateEntry(id, entry)
    .then(() => {
      return db.getDiary(id)
    })
    .then((entry) => {
      res.json(entry)
    })
    .catch(console.error)
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  // const post = req.body
  db.deleteEntry(id)
    .then(() => {
      res.sendStatus(200)
    })
    // .then((entry) => {
    //   res.json(entry)
    // })
    .catch(console.error)
})

module.exports = router
