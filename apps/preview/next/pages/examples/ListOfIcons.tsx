import { useState, createElement, useState, createElement } from 'react';
import { VsfIconSizeEnum } from '@sfui/sfui/frameworks/react/components/VsfIcons/types';
import * as AllVsfIcons from '@sfui/sfui/frameworks/react/components/VsfIcons';
import useSWR from 'swr';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';

const fetcher = (url: string) => fetch(url).then((res) => res.json());
function Example() {
  const [copied, setCopied] = useState('');
  const { data: componentsNames = [] } = useSWR<string[]>('/api/getIcons', fetcher);

  const copyToClipboard = (componentName: string) => {
    navigator.clipboard.writeText(componentName);
    setCopied(componentName);
    setTimeout(() => {
      setCopied('');
    }, 1000);
  };

  const { state, controls } = prepareControls<{ size: VsfIconSizeEnum; colorExample: string }>(
    [
      {
        type: 'select',
        modelName: 'size',
        propDefaultValue: 'VsfIconSize.base',
        propType: 'VsfIconSize',
        options: Object.keys(VsfIconSizeEnum),
      },
      {
        type: 'select',
        modelName: 'colorExample',
        description: 'Its not a prop just example that by setting color on parent, icons changes its color',
        options: ['black', 'red', 'blue', 'green'],
      },
    ],
    {
      size: VsfIconSizeEnum.base,
      colorExample: 'black',
    },
  );
  return (
    <div className="e-page">
      <div className="e-page-component--icons">
        {componentsNames.map((componentName) => (
          <div
            key={componentName}
            className="inline-block border cursor-pointer"
            data-tooltip={componentName}
            onClick={() => copyToClipboard(componentName)}
            style={{ color: state.get.colorModel }}
          >
            {createElement((AllVsfIcons as Record<string, any>)[componentName], { size: state.get.sizeModel })}
          </div>
        ))}

        {copied && <div className="mt-5">Component name ({copied}) has been copied to clipboard</div>}
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
