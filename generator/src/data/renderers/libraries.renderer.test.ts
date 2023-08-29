import {describe, expect, it} from 'vitest';
import {librariesRenderer} from './libraries.renderer';

describe('librariesRenderer', () => {
  it('works', () => {
    const result = librariesRenderer([
      {
        name: 'Library A',
        url: 'https://example.com/library-a',
        description: 'Library with GitHub repository',
        repository: {
          type: 'GitHub',
          user: 'sample',
          repo: 'library-a',
        },
      },
      {
        name: 'Library B',
        url: 'https://example.com/library-b',
        description: 'Library with SourceForge repository',
        repository: {
          type: 'SourceForge',
          project: 'library-b',
        },
      },
      {
        name: 'Library C',
        url: 'https://example.com/library-c',
        description: 'Library with Assembla repository',
        repository: {
          type: 'Assembla',
          space: 'library-c',
        },
      },
      {
        name: 'Library D',
        description: 'Library without URL',
        repository: {
          type: 'SourceForge',
          project: 'library-d',
        },
      },
    ]);
    expect(result).toMatchInlineSnapshot(`
      "| Library | Source | Description |
      | --- | --- | --- |
      | [Library A](https://example.com/library-a) | [sample/library-a](https://github.com/sample/library-a) | Library with GitHub repository |
      | [Library B](https://example.com/library-b) | [SourceForge → library-b](https://sourceforge.net/projects/library-b) | Library with SourceForge repository |
      | [Library C](https://example.com/library-c) | [Assembla → library-c](https://app.assembla.com/spaces/library-c/git/source) | Library with Assembla repository |
      | Library D | [SourceForge → library-d](https://sourceforge.net/projects/library-d) | Library without URL |"
    `);
  });
});
