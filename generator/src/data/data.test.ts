import {describe, expect} from 'vitest';
import {
  zApps,
  zCollections,
  zLibraries,
  zPlugins,
  zResources,
  zSamples,
} from './types';

import _apps from '../../../data/apps.json';
import _collections from '../../../data/collections.json';
import _libraries from '../../../data/libraries.json';
import _plugins from '../../../data/plugins.json';
import _resources from '../../../data/resources.json';
import _samples from '../../../data/samples.json';

// Item order is not checked here: the generator sorts the data files by name.
describe('data', () => {
  describe('apps', (they) => {
    they('match the schema', () => {
      expect(() => zApps.parse(_apps)).not.toThrow();
    });
  });

  describe('collections', (they) => {
    they('match the schema', () => {
      expect(() => zCollections.parse(_collections)).not.toThrow();
    });
  });

  describe('libraries', (they) => {
    they('match the schema', () => {
      expect(() => zLibraries.parse(_libraries)).not.toThrow();
    });
  });

  describe('plugins', (they) => {
    they('match the schema', () => {
      expect(() => zPlugins.parse(_plugins)).not.toThrow();
    });
  });

  describe('resources', (they) => {
    they('match the schema', () => {
      expect(() => zResources.parse(_resources)).not.toThrow();
    });
  });

  describe('samples', (they) => {
    they('match the schema', () => {
      expect(() => zSamples.parse(_samples)).not.toThrow();
    });
  });
});
