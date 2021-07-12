import React from 'react';
import { addons, types } from '@storybook/addons';
import { useParameter } from '@storybook/api';
import { AddonPanel, SyntaxHighlighter } from '@storybook/components';


const ADDON_ID = 'vueStorySource';
const PARAM_KEY = 'docs';
const PANEL_ID = `${ADDON_ID}/panel`;

const SourcePanel = ({ active }) => {
  const docsParams = useParameter(PARAM_KEY, null);
  const source = docsParams && docsParams.source && docsParams.source.code;

  return active && source ?
    React.createElement(
      SyntaxHighlighter,
      {
        language: 'html',
        showLineNumbers: false,
        copyable: true,
        padded: true,
        format: false,
      },
      source
    ) :
    null;
};

addons.register(ADDON_ID, () => {
  const render = ({ active, key }) => React.createElement(
    AddonPanel,
    { active, key },
    React.createElement(SourcePanel, { active })
  );

  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: 'Source',
    render,
    paramKey: PARAM_KEY,
  });
});
