import {renderLink} from '../../utils/markdown/renderLink';
import {renderTable} from '../../utils/markdown/renderTable';
import type {AudioApp} from '../types';
import {renderRepository} from './utils/renderRepository';

export const appsRenderer = (apps: AudioApp[]) => {
  const head = ['Software', 'Source', 'Description'];
  const body = apps.map((app) => [
    app.url ? renderLink(app.name, app.url) : app.name,
    renderRepository(app.repository),
    app.description,
  ]);
  return renderTable(head, body);
};
