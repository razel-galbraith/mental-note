//-- PUT ALL ON DIARY ROUTE --//

// const express = require('express')

// // eslint-disable-next-line no-unused-vars
// const db = require('../db/db')

// const router = express.Router()

// // put routes here

// // server.use contains /v1/posts
// // router.get('/', (req, res) => {
// //   db.getPosts()
// //     .then((posts) => {
// //       res.json(posts)
// //     })
// //     .catch(console.error)
// // })

// // get an individual post via ID
// router.get('/:id', (req, res) => {
//   const postId = req.params.id
//   db.getPost(postId)
//     .then((post) => {
//       res.json(post)
//     })
//     .catch(console.error)
// })

// router.post('/', (req, res) => {
//   const post = req.body
//   db.addPost(post)
//     .then((postIdArr) => {
//       return db.getPost(postIdArr[0])
//     })
//     .then((post) => {
//       res.json(post)
//     })
//     .catch(console.error)
// })

// router.patch('/:id', (req, res) => {
//   const id = req.params.id
//   const post = req.body
//   db.updatePost(id, post)
//     .then(() => {
//       return db.getPost(id)
//     })
//     .then((post) => {
//       res.json(post)
//     })
//     .catch(console.error)
// })

// router.delete('/:id', (req, res) => {
//   const id = req.params.id
//   // const post = req.body
//   db.deletePost(id)
//     .then(() => {
//       return db.getPost(id)
//     })
//     .then((post) => {
//       res.json(post)
//     })
//     .catch(console.error)
// })

// module.exports = router

// // router.get('/', (req, res) => {
// //   db.getDiary()
// //     .then((results) => {
// //       res.json({ diary: results.map((entry) => entry.name) })
// //     })
// //     .catch((err) => {
// //       console.log(err)
// //       res.status(500).json({ message: 'Something went wrong' })
// //     })
// // })
