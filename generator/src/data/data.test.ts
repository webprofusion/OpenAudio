import {describe, expect} from 'vitest';
import {isSortedCaseInsensitive} from '../utils/array/isSortedCaseInsensitive';
import data from './data.json';
import {zData} from './types';

const {apps, collections, libraries, plugins, samples, resources} =
  zData.parse(data);

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
