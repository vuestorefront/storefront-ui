'use client';
import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import type { MouseEvent } from 'react';
import type { SfAccordionItemProps } from '@storefront-ui/react';

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
          'list-none [&::-webkit-details-marker]:hidden cursor-pointer focus-visible:outline focus-visible:outline-offset focus-visible:outline focus-visible:rounded-sm',
        )}
      >
        {summary}
      </summary>
      {children}
    </details>
  );
});

export default SfAccordionItem;
