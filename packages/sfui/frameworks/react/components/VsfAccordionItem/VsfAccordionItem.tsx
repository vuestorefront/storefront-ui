import type { VsfAccordionItemProps } from './types';
import VsfIconTriangleUp from '../VsfIcons/VsfIconTriangleUp';

export default function VsfAccordionItem({
  open = false,
  title,
  chevronLeft = false,
  slotPrefix,
  slotSuffix,
  children,
  ...attributes
}: VsfAccordionItemProps): JSX.Element {
  return (
    // TODO: handler for open, its common practice to have feedback when prop like that changes
    <details className="vsf-accordion-item" open={open} {...attributes}>
      <summary className={`${chevronLeft && 'vsf-accordion-item__header--right'} vsf-accordion-item__header`}>
        {slotPrefix || (
          <span className={`${chevronLeft && 'vsf-accordion-item__title--right'} vsf-accordion-item__title`}>
            {title}
          </span>
        )}
        {slotSuffix || <VsfIconTriangleUp className="vsf-accordion-item__icon" />}
      </summary>
      <div className="vsf-accordion-item__content">{children}</div>
    </details>
  );
}
