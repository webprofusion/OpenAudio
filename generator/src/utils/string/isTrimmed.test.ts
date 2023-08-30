import {describe, expect, it} from 'vitest';
import {isTrimmed} from './isTrimmed';

describe('isTrimmed', () => {
  it('returns true when string is trimmed', () => {
    expect(isTrimmed('')).toBe(true);
    expect(isTrimmed('xxx')).toBe(true);
  });

  it('returns false otherwise', () => {
    expect(isTrimmed(' ')).toBe(false);
    expect(isTrimmed(' xxx')).toBe(false);
    expect(isTrimmed('1 ')).toBe(false);
  });
});
