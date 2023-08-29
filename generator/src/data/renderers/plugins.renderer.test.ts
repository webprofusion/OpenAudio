import {describe, expect, it} from 'vitest';
import {pluginsRenderer} from './plugins.renderer';

describe('pluginsRenderer', () => {
  it('works', () => {
    const result = pluginsRenderer([
      {
        name: 'Plugin A',
        url: 'https://example.com/plugin-a',
        description: 'Plugin A description',
        type: 'Instrument',
        frameworks: ['JUCE'],
      },
      {
        name: 'Plugin B',
        url: 'https://example.com/plugin-b',
        description: 'Plugin B description',
        type: 'Effect',
        frameworks: [],
      },
      {
        name: 'Plugin C',
        url: 'https://example.com/plugin-c',
        description: 'Plugin C description',
        type: 'Effect',
        frameworks: ['DPF', 'JUCE'],
      },
    ]);
    expect(result).toMatchInlineSnapshot(`
      "| Plugin | Description | Type | Framework |
      | --- | --- | --- | --- |
      | [Plugin A](https://example.com/plugin-a) | Plugin A description | Instrument | JUCE |
      | [Plugin B](https://example.com/plugin-b) | Plugin B description | Effect | N/A |
      | [Plugin C](https://example.com/plugin-c) | Plugin C description | Effect | DPF, JUCE |"
    `);
  });
});
