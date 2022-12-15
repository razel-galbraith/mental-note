import nock from 'nock'

import { getFriend } from './diary'

describe('getFriend', () => {
  test.skip('gets a random quote from the api', () => {
    const scope = nock('https://api.goprogram.ai/inspiration')
      .get('/')
      .reply(200, {
        quote:
          'Spend more of your time on what gives you energy and less of your time on what takes it away.',
      })
    screen.debug
    return getFriend().then((friend) => {
      expect(friend.quote).toContain(
        'Spend more of your time on what gives you energy and less of your time on what takes it away.'
      )
      expect(scope.isDone()).toBe(true)
    })
  })
})
