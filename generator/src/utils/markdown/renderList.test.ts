import {describe, expect, it} from 'vitest';
import {renderList} from './renderList';

describe('renderList', () => {
  it('works', () => {
    const result = renderList(['Item 1', 'Item 2', 'Item 3']);
    expect(result).toMatchInlineSnapshot(`
      "* Item 1
      * Item 2
      * Item 3"
    `);
  });
});
