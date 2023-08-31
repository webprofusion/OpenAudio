import {describe, expect} from 'vitest';
import {isSortedCaseInsensitive} from '../utils/array/isSortedCaseInsensitive';
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

const apps = zApps.parse(_apps);
const collections = zCollections.parse(_collections);
const libraries = zLibraries.parse(_libraries);
const plugins = zPlugins.parse(_plugins);
const resources = zResources.parse(_resources);
const samples = zSamples.parse(_samples);

describe('data', () => {
  describe('apps', (they) => {
    they('are sorted by name', () => {
      expectAllNamesSorted(apps);
    });
  });

  describe('collections', (they) => {
    they('are sorted by name', () => {
      expectAllNamesSorted(collections);
    });
  });

  describe('libraries', (they) => {
    they('are sorted by name', () => {
      expectAllNamesSorted(libraries);
    });
  });

  describe('plugins', (they) => {
    they('are sorted by name', () => {
      expectAllNamesSorted(plugins);
    });
  });

  describe('resources', (they) => {
    they('are sorted by name', () => {
      expectAllNamesSorted(resources);
    });
  });

  describe('samples', (they) => {
    they('are sorted by name', () => {
      expectAllNamesSorted(samples);
    });
  });
});

const expectAllNamesSorted = (array: Array<{name: string}>) => {
  const names = array.map(({name}) => name);
  expect(isSortedCaseInsensitive(names)).toBe(true);
};
