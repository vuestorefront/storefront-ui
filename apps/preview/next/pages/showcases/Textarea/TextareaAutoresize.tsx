/* eslint-disable jsx-a11y/label-has-associated-control */

import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfTextarea } from '@storefront-ui/react';
import { attach } from '@frsource/autoresize-textarea';
import { useEffect, useRef } from 'react';

export default function TextareaAutoresize() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (textareaRef.current) {
      attach(textareaRef.current);
    }
  }, []);
  return (
    <>
      <label>
        <span className="typography-text-sm font-medium">Description</span>
        <SfTextarea ref={textareaRef} className="w-full h-max-[500px]" size="sm" aria-label="Label size sm" />
      </label>
      <div className="flex justify-between mt-0.5">
        <div>
          <p className="typography-text-xs text-neutral-500">Do not include personal or financial information.</p>
        </div>
      </div>
    </>
  );
}

// #endregion source
TextareaAutoresize.getLayout = ShowcasePageLayout;
