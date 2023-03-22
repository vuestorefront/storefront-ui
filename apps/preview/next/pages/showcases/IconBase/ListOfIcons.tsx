import { ShowcasePageLayout } from '../../showcases';
// #region source
import { useState, createElement } from 'react';
import * as AllVsfComponents from '@storefront-ui/react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());
export default function IconList() {
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
          {createElement((AllVsfComponents as Record<string, any>)[componentName])}
        </button>
      ))}

      {copied && <p className="mt-1 text-sm">&quot;{copied}&quot; has been copied to clipboard</p>}
    </>
  );
}

// #endregion source
IconList.getLayout = ShowcasePageLayout;
