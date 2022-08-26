import { VsfIconSize } from '../../output/blocks/VsfIconBase/VsfIconBase.lite';
import Controls, { prepareControls } from '../../components/utils/Controls';
import fs from '../../utils/files.server'
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import * as AllVsfIcons from '../../output/blocks/VsfIcons/react';
import { useState } from 'react';

export async function loader() {
  const filenames = fs.readdirSync('./app/output/blocks/VsfIcons/')
    .reduce((prev, current) => {
      if (current.endsWith('.lite.tsx')) {
        const currentArray = current.split('.') as never[];
        return prev.concat(currentArray[0])
      }
      return prev;
    }, []);

  return json(filenames);
}

export default function VsfIconExample() {
  const componentsNames = useLoaderData();
  const [copied, setCopied] = useState('');

  const copyToClipboard = (componentName: string) => {
    navigator.clipboard.writeText(componentName);
    setCopied(componentName);
    setTimeout(() => {
      setCopied('');
    }, 1000);
  }

  const { state, controls } = prepareControls(
    [
      {
        title: 'size',
        type: 'select',
        modelName: 'sizeModel',
        propDefaultValue: 'VsfIconSize.base',
        propType: 'VsfIconSize',
        options: Object.keys(VsfIconSize)
      },
      {
        title: 'color',
        type: 'select',
        modelName: 'colorModel',
        description: 'Its not a prop just example that by setting color on parent, icons changes its color',
        options: ['black', 'red', 'blue', 'green']
      },
    ],
    {
      sizeModel: VsfIconSize.base,
      colorModel: 'black',
    },
  );
  return (
    <div className="e-page">
      <div className="e-page-component--icons">
        {componentsNames.map(componentName => <div
          key={componentName}
          className="inline-block border cursor-pointer"
          data-tooltip={componentName}
          onClick={() => copyToClipboard(componentName)}
          style={{ 'color': state.get.colorModel }}
        >{React.createElement(AllVsfIcons[componentName] || 'Dummy', { size: state.get.sizeModel })}</div>)}

        {copied && <div className="mt-5">Component name ({copied}) has been copied to clipboard</div>}

      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}
