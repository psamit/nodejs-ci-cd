import request from 'supertest';
import { createServer } from './express';

describe('express', () => {
  it('it should return health', async () => {
    const application = await createServer();
    const response = await request(application).get('/health');
    expect(response.status).toBe(200);
    expect(response.text).toEqual('UP');
  });

  it('it should root api content', async () => {
    const application = await createServer();
    const response = await request(application).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toEqual('sample application');
  });

  it('it should return 404 for not defined APIs', async () => {
    const application = await createServer();
    const response = await request(application).get('/xyz');
    expect(response.status).toBe(404);
  });
});
