const request = require('supertest');
const app = require('../../src/index');

describe('Web Service Tests', () => {
  it('should return the top 5 countries with highest population density', async () => {
    const response = await request(app).get('/miprimerapractica');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body).toHaveLength(5);
  });

  it('should handle invalid routes', async () => {
    const response = await request(app).get('/invalidroute');
    expect(response.status).toBe(404);
  });

});
