import {describe, expect, it} from 'vitest';
import {renderRepository} from './renderRepository';

describe('renderRepository', () => {
  it('works correctly for GitHub', () => {
    const result = renderRepository({
      type: 'GitHub',
      user: 'example',
      repo: 'repository',
    });
    expect(result).toMatchInlineSnapshot(
      '"[example/repository](https://github.com/example/repository)"',
    );
  });

  it('works correctly for SourceForge', () => {
    const result = renderRepository({
      type: 'SourceForge',
      project: 'repository',
    });
    expect(result).toMatchInlineSnapshot(
      '"[SourceForge → repository](https://sourceforge.net/projects/repository)"',
    );
  });

  it('works correctly for Assembla', () => {
    const result = renderRepository({
      type: 'Assembla',
      space: 'repository',
    });
    expect(result).toMatchInlineSnapshot(
      '"[Assembla → repository](https://app.assembla.com/spaces/repository/git/source)"',
    );
  });
});
