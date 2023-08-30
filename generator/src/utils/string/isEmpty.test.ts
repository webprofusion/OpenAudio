import {describe, expect, it} from 'vitest';
import {isEmpty} from './isEmpty';

describe('isEmpty', () => {
  it('returns true when string is empty', () => {
    expect(isEmpty('')).toBe(true);
  });

  it('returns false otherwise', () => {
    expect(isEmpty(' ')).toBe(false);
    expect(isEmpty('x')).toBe(false);
    expect(isEmpty('1')).toBe(false);
  });
});
