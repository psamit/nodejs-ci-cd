import express from 'express';

export const createServer = async (): Promise<express.Application> => {
  const app = express();

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.disable('x-powered-by');

  app.get('/health', (_req, res) => {
    res.send('UP');
  });

  app.get('/', (_req, res) => {
    res.send('sample application');
  });

  return app;
};
