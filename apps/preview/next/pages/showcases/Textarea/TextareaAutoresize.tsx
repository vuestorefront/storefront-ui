/* eslint-disable jsx-a11y/label-has-associated-control */

import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfTextarea } from '@storefront-ui/react';
import { attach } from '@frsource/autoresize-textarea';
import { useEffect, useRef } from 'react';

export default function TextareaAutoresize() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(
    () => {
      attach(textareaRef.current);
    }, []
  )
  return (
    <>
      <label>
        <span className="text-sm font-medium">Description</span>
        <SfTextarea ref={textareaRef} className="w-full" size="sm" aria-label="Label size sm" />
      </label>
      <div className="flex justify-between">
        <div>
          <p className="text-xs text-disabled-500 mt-0.5">Do not include personal or financial information.</p>
        </div>
      </div>
    </>
  );
}

// #endregion source
TextareaAutoresize.getLayout = ShowcasePageLayout;
