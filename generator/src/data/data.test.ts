import {describe, expect} from 'vitest';
import {isSortedCaseInsensitive} from '../utils/array/isSortedCaseInsensitive';
import data from './data.json';
import {zData} from './types';

const {apps, collections, libraries, plugins, samples, resources} =
  zData.parse(data);

describe('data', () => {
  describe('apps', (they) => {
    they('are sorted by name', () => {
      const names = apps.map(({name}) => name);
      expect(isSortedCaseInsensitive(names)).toBe(true);
    });
  });

  describe('collections', (they) => {
    they('are sorted by name', () => {
      const names = collections.map(({name}) => name);
      expect(isSortedCaseInsensitive(names)).toBe(true);
    });
  });

  describe('libraries', (they) => {
    they('are sorted by name', () => {
      const names = libraries.map(({name}) => name);
      expect(isSortedCaseInsensitive(names)).toBe(true);
    });
  });

  describe('plugins', (they) => {
    they('are sorted by name', () => {
      const names = plugins.map(({name}) => name);
      expect(isSortedCaseInsensitive(names)).toBe(true);
    });
  });

  describe('resources', (they) => {
    they('are sorted by name', () => {
      const names = resources.map(({name}) => name);
      expect(isSortedCaseInsensitive(names)).toBe(true);
    });
  });

  describe('samples', (they) => {
    they('are sorted by name', () => {
      const names = samples.map(({name}) => name);
      expect(isSortedCaseInsensitive(names)).toBe(true);
    });
  });
});
