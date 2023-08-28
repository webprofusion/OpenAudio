import {renderLink} from '../markdown/renderLink';
import {renderTable} from '../markdown/renderTable';
import type {Plugin} from './plugins.types';

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
