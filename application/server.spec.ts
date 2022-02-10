import { start } from './server';

const createServerMockFn = jest.fn();

jest.mock('./express', () => ({
  createServer: () => createServerMockFn()
}));

describe('Server', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('it should start the server', async () => {
    createServerMockFn.mockImplementation(() => Promise.resolve());
    await start();
    expect(createServerMockFn).toHaveBeenCalled();
    // expect(global.console.info).toHaveBeenCalled();
  });
  it('it should catch errors', async () => {
    const errorMessage = 'some error';
    createServerMockFn.mockImplementation(() => Promise.reject(errorMessage));
    await start();
    expect(createServerMockFn).toHaveBeenCalled();
    expect(global.console.log).toHaveBeenCalledWith(errorMessage);
  });
});
