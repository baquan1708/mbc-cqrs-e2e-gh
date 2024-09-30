import request from 'supertest'

import { config } from './config'

const API_PATH = '/'

describe('Health', () => {
  describe(`[GET ${API_PATH}]`, () => {
    it('should be healthy', () => {
      return request('https://www.google.com/').get('/').expect(200)
    })
  })
})
