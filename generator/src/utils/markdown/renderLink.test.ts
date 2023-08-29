import {describe, expect, it} from 'vitest';
import {renderLink} from './renderLink';

describe('renderLink', () => {
  it('works', () => {
    const result = renderLink('Text', 'https://example.com');
    expect(result).toBe('[Text](https://example.com)');
  });
});
