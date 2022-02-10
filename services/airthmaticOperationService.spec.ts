import { sum, multiplyNumbers } from './airthmaticOperationService';

describe('Arithmatic Operation service', () => {
  it('sum operation', () => {
    const numbers = [1, 2, 3, 4];
    expect(sum(...numbers)).toBe(10);
  });

  it('sum operation - no param', () => {
    expect(sum()).toBe(0);
  });

  it('multiply operation', () => {
    const numbers = [1, 2, 3, 4];
    expect(multiplyNumbers(...numbers)).toBe(24);
  });

  it('multiply operation - no param', () => {
    expect(multiplyNumbers()).toBe(0);
  });
});
