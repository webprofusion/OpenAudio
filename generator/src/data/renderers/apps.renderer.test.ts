import {describe, expect, it} from 'vitest';
import {appsRenderer} from './apps.renderer';

describe('appsRenderer', () => {
  it('works', () => {
    const result = appsRenderer([
      {
        name: 'App A',
        url: 'https://example.com/app-a',
        description: 'App A description',
        repository: {
          type: 'GitHub',
          user: 'sample',
          repo: 'app-a',
        },
      },
      {
        name: 'App B',
        url: 'https://example.com/app-b',
        description: 'App B description',
        repository: {
          type: 'SourceForge',
          project: 'app-b',
        },
      },
      {
        name: 'App C',
        description: 'App C description',
        repository: {
          type: 'SourceForge',
          project: 'app-c',
        },
      },
    ]);
    expect(result).toMatchInlineSnapshot(`
      "| Software | Source | Description |
      | --- | --- | --- |
      | [App A](https://example.com/app-a) | [sample/app-a](https://github.com/sample/app-a) | App A description |
      | [App B](https://example.com/app-b) | [SourceForge → app-b](https://sourceforge.net/projects/app-b) | App B description |
      | App C | [SourceForge → app-c](https://sourceforge.net/projects/app-c) | App C description |"
    `);
  });
});
