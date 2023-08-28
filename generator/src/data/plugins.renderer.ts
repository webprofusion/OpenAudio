import {renderLink} from '../utils/markdown/renderLink';
import {renderTable} from '../utils/markdown/renderTable';
import type {Plugin} from './types';

export const pluginsRenderer = (plugins: Plugin[]) => {
  const head = ['Plugin', 'Description', 'Type', 'Framework'];
  const body = plugins.map((plugin) => [
    renderLink(plugin.name, plugin.url),
    plugin.description,
    plugin.type,
    plugin.framework ?? 'N/A',
  ]);
  return renderTable(head, body);
};
