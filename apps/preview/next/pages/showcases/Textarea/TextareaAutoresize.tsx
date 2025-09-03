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
        <SfTextarea ref={textareaRef} className="w-full h-max-[500px] block" size="sm" aria-label="Label size sm" />
      </label>
      <p className="typography-hint-xs text-neutral-500 mt-0.5">Do not include personal or financial information.</p>
    </>
  );
}

// #endregion source
TextareaAutoresize.getLayout = ShowcasePageLayout;
