import {renderLink} from '../../utils/markdown/renderLink';
import {renderTable} from '../../utils/markdown/renderTable';
import type {AudioApp} from '../types';

export const appsRenderer = (apps: AudioApp[]) => {
  const head = ['Software', 'Source', 'Description'];
  const body = apps.map((app) => [
    app.url ? renderLink(app.name, app.url) : app.name,
    app.repository.type === 'GitHub'
      ? renderLink(
          `${app.repository.user}/${app.repository.repo}`,
          `https://github.com/${app.repository.user}/${app.repository.repo}`,
        )
      : renderLink(
          `SourceForge → ${app.repository.project}`,
          `https://sourceforge.net/projects/${app.repository.project}`,
        ),
    app.description,
  ]);
  return renderTable(head, body);
};
