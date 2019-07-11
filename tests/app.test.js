const request = require('supertest');
const app = require('../lib/app');

describe('test for routing color paths json stuff', () => {
  it('root path returns html from index', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual(expect.stringContaining('Doctor Nick'));
      });
  });
  it('colors.html/navy returns color page w/navy', () => {
    return request(app)
      .get('/api/v1/colors/navy')
      .then(res => {
        expect(res.text).toEqual(expect.stringContaining('navy'));
      });
  });
});
