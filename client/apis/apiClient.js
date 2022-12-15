import request from 'superagent'

export function getGreeting() {
  return request.get('/greeting').then((res) => res.body.greeting)
}

export function getDiary() {
  return request.get(`/api/v1/diary`).then((res) => res.body)
}

export function getMeme() {
  return request
    .get(`https://meme-api.herokuapp.com/gimme/wholesomememes`)
    .then((res) => res.body)
}
