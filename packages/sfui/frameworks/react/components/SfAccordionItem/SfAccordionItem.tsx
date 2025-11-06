'use client';
import { forwardRef } from 'react';
import { twMerge, type SfAccordionItemProps } from '@storefront-ui/react';
import type { MouseEvent } from 'react';

const SfAccordionItem = forwardRef<HTMLDetailsElement, SfAccordionItemProps>((props, ref) => {
  const { open, onToggle, children, summary, summaryClassName, summaryAttrs, ...attributes } = props;

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    onToggle?.(!open);
  };

  return (
    <details ref={ref} open={open} data-testid="accordion-item" {...attributes}>
      <summary
        {...summaryAttrs}
        onClick={handleClick}
        className={twMerge(
          summaryClassName,
          'list-none [&::-webkit-details-marker]:hidden cursor-pointer focus-visible:outline focus-visible:outline-offset focus-visible:outline focus-visible:rounded-xs',
        )}
      >
        {summary}
      </summary>
      {children}
    </details>
  );
});

export default SfAccordionItem;
