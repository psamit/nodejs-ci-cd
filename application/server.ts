import { createServer } from './express';

const SERVER_PORT = 3000;

export const start = async () => {
  try {
    const application = await createServer();
    application.listen(SERVER_PORT, () => {
      console.info('app listening at ::%s', SERVER_PORT);
    });
  } catch (err) {
    console.log(err);
  }
};

(async () => {
  await start();
})();
