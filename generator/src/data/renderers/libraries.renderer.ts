import {renderLink} from '../../utils/markdown/renderLink';
import {renderTable} from '../../utils/markdown/renderTable';
import type {Library} from '../types';
import {renderRepository} from './utils/renderRepository';

export const librariesRenderer = (libraries: Library[]) => {
  const head = ['Library', 'Source', 'Description'];
  const body = libraries.map((library) => [
    library.url ? renderLink(library.name, library.url) : library.name,
    renderRepository(library.repository),
    library.description,
  ]);
  return renderTable(head, body);
};
