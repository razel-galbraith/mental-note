import nock from 'nock'

import { getMeme } from './apiClient'

describe('getMeme', () => {
  test.skip('gets a random meme from the api', () => {
    const scope = nock('http://localhost')
      .get('https://meme-api.herokuapp.com/gimme/wholesomememes')
      .reply(200, {
        title: 'Heart Eyes',
      })
    screen.debug
    return getMeme().then((meme) => {
      expect(meme.title).toContain('Heart Eyes')
      expect(scope.isDone()).toBe(true)
    })
  })
})
