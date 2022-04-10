export const sum = (...a: number[]) =>
  a.length ? a.reduce((acc, val) => acc + val, 0) : null;

export const substract = (...a: number[]) =>
  a.length ? a.reduce((acc, val) => acc - val, 0) : null;

export const divide = (...a: number[]) =>
  a.length ? a.reduce((acc, val) => acc / val, 1) : null;

export const multiplyNumbers = (...a: number[]) =>
  a.length ? a.reduce((acc, val) => acc * val, 1) : null;
