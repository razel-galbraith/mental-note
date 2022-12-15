import request from 'superagent'

const friendURL = 'https://api.goprogram.ai/inspiration'

export function getFriend() {
  return request.get(`${friendURL}`).then((response) => response.body)
}

export function getDiary() {
  return request.get(`api/v1/diary`).then((res) => res.body)
}

export function getSelectedEntry(selectedEntry) {
  return request
    .get(`/api/v1/diary/${selectedEntry.id}`)
    .then((res) => res.body)
}

// route request: talks to db server
// send post request
export function addNewEntry(entry) {
  return request
    .post('/api/v1/diary')
    .send(entry)
    .then((res) => {
      return res.body
    })
}

// route request: talks to db server
// send post request
export function deleteSelectedEntry(deletedEntry) {
  return (
    request
      .delete(`/api/v1/diary/${deletedEntry.id}`)
      // .send(deletedEntry)
      .then((res) => {
        return res.body
      })
  )
}
