import {renderLink} from '../../../utils/markdown/renderLink';
import {type Repository} from '../../types';

export const renderRepository = (repository: Repository) => {
  switch (repository.type) {
    case 'GitHub':
      return renderLink(
        `${repository.user}/${repository.repo}`,
        `https://github.com/${repository.user}/${repository.repo}`,
      );
    case 'SourceForge':
      return renderLink(
        `SourceForge → ${repository.project}`,
        `https://sourceforge.net/projects/${repository.project}`,
      );
    case 'Assembla':
      return renderLink(
        `Assembla → ${repository.space}`,
        `https://app.assembla.com/spaces/${repository.space}/git/source`,
      );
    default:
      return '';
  }
};
