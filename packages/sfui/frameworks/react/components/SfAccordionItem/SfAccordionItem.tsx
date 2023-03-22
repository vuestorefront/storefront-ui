import { forwardRef } from 'react';
import type { MouseEvent } from 'react';
import classNames from 'classnames';
import type { SfAccordionItemProps } from '@storefront-ui/react';

const SfAccordionItem = forwardRef<HTMLDetailsElement, SfAccordionItemProps>((props, ref) => {
  const { open, onToggle, children, summary, summaryClassName, ...attributes } = props;

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault();
    onToggle?.(!open);
  };

  return (
    <details ref={ref} open={open} {...attributes} data-testid="accordion-item">
      <summary
        onClick={handleClick}
        className={classNames(summaryClassName, 'list-none [&::-webkit-details-marker]:hidden cursor-pointer')}
      >
        {summary}
      </summary>
      {children}
    </details>
  );
});

export default SfAccordionItem;
