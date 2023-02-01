import { useState, createElement } from 'react';
import { VsfIconSize } from '@storefront-ui/react/components/VsfIcons/types';
import * as AllVsfIcons from '@storefront-ui/react/components/VsfIcons';
import useSWR from 'swr';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

const fetcher = (url: string) => fetch(url).then((res) => res.json());
function Example() {
  const [copied, setCopied] = useState('');
  const { data: componentsNames = [] } = useSWR<string[]>(
    `${process.env.DOCS_EXAMPLES_REACT_PATH || ''}/api/getIcons`,
    fetcher,
  );

  const copyToClipboard = (componentName: string) => {
    navigator.clipboard.writeText(componentName);
    setCopied(componentName);
    setTimeout(() => {
      setCopied('');
    }, 1000);
  };

  const { state, controls } = prepareControls<{ size: VsfIconSize; colorExample: string }>(
    [
      {
        type: 'select',
        modelName: 'size',
        propDefaultValue: 'VsfIconSize.base',
        propType: 'VsfIconSize',
        options: Object.keys(VsfIconSize),
      },
      {
        type: 'select',
        modelName: 'colorExample',
        description: 'Its not a prop just example that by setting color on parent, icons changes its color',
        options: ['black', 'red', 'blue', 'green'],
      },
    ],
    {
      size: VsfIconSize.base,
      colorExample: 'black',
    },
  );
  return (
    <ComponentExample className="e-page--icons" controls={{ state, controls }}>
      {componentsNames.map((componentName) => (
        <button
          type="button"
          key={componentName}
          className="inline-block border cursor-pointer"
          data-tooltip={componentName}
          onClick={() => {
            copyToClipboard(componentName);
          }}
          style={{ color: state.get.colorExample }}
        >
          {createElement((AllVsfIcons as Record<string, any>)[componentName], { size: state.get.size })}
        </button>
      ))}

      {copied && <div className="mt-5">Component name ({copied}) has been copied to clipboard</div>}
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
