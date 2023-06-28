/* eslint-disable jsx-a11y/label-has-associated-control */

import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfTextarea } from '@storefront-ui/react';
import { attach } from '@frsource/autoresize-textarea';
import { useRef } from 'react';

export default function TextareaAutoresize() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  attach(textareaRef.current);
  return (
    <div className="flex flex-col gap-y-5">
      <SfTextarea ref={textareaRef} size="sm" aria-label="Label size sm" />
    </div>
  );
}

// #endregion source
TextareaAutoresize.getLayout = ShowcasePageLayout;
