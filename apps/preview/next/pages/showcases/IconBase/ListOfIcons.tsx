import { useState, createElement } from 'react';
import * as AllVsfIcons from '@storefront-ui/react/components/VsfIcons';
import useSWR from 'swr';
import { ShowcasePageLayout } from '../../showcases';

const fetcher = (url: string) => fetch(url).then((res) => res.json());
function Showcase() {
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

  return (
    <>
      {componentsNames.map((componentName) => (
        <button
          type="button"
          key={componentName}
          className="inline-block border cursor-pointer"
          data-tooltip={componentName}
          onClick={() => {
            copyToClipboard(componentName);
          }}
        >
          {createElement((AllVsfIcons as Record<string, any>)[componentName])}
        </button>
      ))}

      {copied && <p className="mt-1 text-sm">&quot;{copied}&quot; has been copied to clipboard</p>}
    </>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
