import { CodePreviewCheckObject } from '../support/pageObject/CodePreview.PageObject';

const codePreview = () => new CodePreviewCheckObject();

describe('code and source preview check', () => {
  it('vue blocks and components', () => {
    codePreview().vueComponentsSourceCheck();
    codePreview().vueBlocksAndComponentsCodeCheck();
  });

  it('react blocks and components', () => {
    codePreview().reactComponentsSourceCheck();
    codePreview().reactComponentsCodeCheck();
    codePreview().reactBlocksCodeCheck();
  });
});
