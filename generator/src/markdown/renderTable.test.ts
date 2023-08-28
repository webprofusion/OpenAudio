import {describe, expect, it} from 'vitest';
import {renderTable} from './renderTable';

describe('renderTable', () => {
  it('works', () => {
    const result = renderTable(
      ['A', 'B', 'C'],
      [
        ['A1', 'B1', 'C1'],
        ['A2', 'B2', 'C2'],
      ],
    );
    expect(result).toMatchInlineSnapshot(`
      "| A | B | C |
      | --- | --- | --- |
      | A1 | B1 | C1 |
      | A2 | B2 | C2 |"
    `);
  });

  it('throws TypeError if number of columns is not consistent', () => {
    expect(() => {
      renderTable(
        ['A', 'B', 'C'],
        [
          ['A1', 'B1', 'C1'],
          ['A2', 'B2'],
        ],
      );
    }).toThrowErrorMatchingInlineSnapshot(
      `"All rows must have the same number of columns"`,
    );
  });
});
