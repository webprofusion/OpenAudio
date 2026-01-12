import {renderLink} from '../../../utils/markdown/renderLink';
import {type Repository} from '../../types';

export const renderRepository = (repository: Repository) => {
  switch (repository.type) {
    case 'Assembla':
      return renderLink(
        `Assembla → ${repository.space}`,
        `https://app.assembla.com/spaces/${repository.space}/git/source`,
      );
    case 'Bitbucket':
      return renderLink(
        `${repository.workspace}/${repository.repo}`,
        `https://bitbucket.org/${repository.workspace}/${repository.repo}`,
      );
    case 'Codeberg':
      return renderLink(
        `${repository.user}/${repository.repo}`,
        `https://codeberg.org/${repository.user}/${repository.repo}`,
      );
    case 'GitHub':
      return renderLink(
        `${repository.user}/${repository.repo}`,
        `https://github.com/${repository.user}/${repository.repo}`,
      );
    case 'GitLab':
      return renderLink(
        `${repository.user}/${repository.repo}`,
        `https://gitlab.com/${repository.user}/${repository.repo}`,
      );
    case 'SourceForge':
      return renderLink(
        `SourceForge → ${repository.project}`,
        `https://sourceforge.net/projects/${repository.project}`,
      );
    case 'SourceHut':
      return renderLink(
        `~${repository.user}/${repository.repo}`,
        `https://sr.ht/~${repository.user}/${repository.repo}`,
      );
  }
};
