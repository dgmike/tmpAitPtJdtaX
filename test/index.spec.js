import assert from 'assert';
import supertest from 'supertest';
import pkg from '../index.js';

describe('app', () => {
  it('must create app', () => {
    assert.ok(pkg.app);
  })
  it('must be a server', async () => {
    const server = pkg.app.listen();
    assert.ok(server.close());
  });
  it('must respond to GET /', async () => {
    const server = pkg.app.listen();
    const request = supertest(server);
    await request.get('/')
      .expect(200)
      .expect({ ok: true });
    server.close();
  });
})
