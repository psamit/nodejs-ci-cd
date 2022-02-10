export const sum = (...a: number[]) => a.reduce((acc, val) => acc + val, 0);

export const multiplyNumbers = (...a: number[]): number =>
  a.length ? a.reduce((acc, val) => acc * val, 1) : 0;
