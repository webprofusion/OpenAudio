import {describe, expect, it} from 'vitest';
import {appsRenderer} from './apps.renderer';

describe('appsRenderer', () => {
  it('works', () => {
    const result = appsRenderer([
      {
        name: 'App A',
        url: 'https://example.com/app-a',
        description: 'App with GitHub repository',
        repository: {
          type: 'GitHub',
          user: 'sample',
          repo: 'app-a',
        },
      },
      {
        name: 'App B',
        url: 'https://example.com/app-b',
        description: 'App with SourceForge repository',
        repository: {
          type: 'SourceForge',
          project: 'app-b',
        },
      },
      {
        name: 'App C',
        url: 'https://example.com/app-c',
        description: 'App with Assembla repository',
        repository: {
          type: 'Assembla',
          space: 'app-c',
        },
      },
      {
        name: 'App D',
        description: 'App without URL',
        repository: {
          type: 'SourceForge',
          project: 'app-d',
        },
      },
    ]);
    expect(result).toMatchInlineSnapshot(`
      "| Software | Source | Description |
      | --- | --- | --- |
      | [App A](https://example.com/app-a) | [sample/app-a](https://github.com/sample/app-a) | App with GitHub repository |
      | [App B](https://example.com/app-b) | [SourceForge → app-b](https://sourceforge.net/projects/app-b) | App with SourceForge repository |
      | [App C](https://example.com/app-c) | [Assembla → app-c](https://app.assembla.com/spaces/app-c/git/source) | App with Assembla repository |
      | App D | [SourceForge → app-d](https://sourceforge.net/projects/app-d) | App without URL |"
    `);
  });
});
