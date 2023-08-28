import {renderLink} from '../utils/markdown/renderLink';
import {renderList} from '../utils/markdown/renderList';
import type {Collection} from './collections.types';

export const collectionsRenderer = (collections: Collection[]) =>
  renderList(
    collections.map(
      (collection) =>
        `${renderLink(collection.name, collection.url)} — ${
          collection.description
        }`,
    ),
  );
