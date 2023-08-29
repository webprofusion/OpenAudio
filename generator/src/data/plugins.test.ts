import {describe, expect} from 'vitest';
import {isSortedCaseInsensitive} from '../utils/array/isSortedCaseInsensitive';
import {plugins} from './plugins';

describe('plugins', (they) => {
  they('are sorted by name', () => {
    const names = plugins.map((plugin) => plugin.name);
    expect(isSortedCaseInsensitive(names)).toBe(true);
  });
});
