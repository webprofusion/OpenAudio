import {describe, expect, it} from 'vitest';
import {collectionsRenderer} from './collections.renderer';

describe('collectionsRenderer', () => {
  it('works', () => {
    const result = collectionsRenderer([
      {
        name: 'Collection A',
        url: 'https://example.com/collection-a',
        description: 'Collection A description',
      },
      {
        name: 'Collection B',
        url: 'https://example.com/collection-b',
        description: 'Collection B description',
      },
    ]);
    expect(result).toMatchInlineSnapshot(`
      "* [Collection A](https://example.com/collection-a) — Collection A description
      * [Collection B](https://example.com/collection-b) — Collection B description"
    `);
  });
});
