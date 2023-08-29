import {describe, expect} from 'vitest';
import {isSortedCaseInsensitive} from '../utils/array/isSortedCaseInsensitive';
import {apps} from './apps';

describe('apps', (they) => {
  they('are sorted by name', () => {
    const names = apps.map((app) => app.name);
    expect(isSortedCaseInsensitive(names)).toBe(true);
  });
});
