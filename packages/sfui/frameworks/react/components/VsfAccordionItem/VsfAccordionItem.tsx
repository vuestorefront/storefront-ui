import type { VsfAccordionItemProps } from './types';
import VsfIconTriangleUp from '../VsfIcons/VsfIconTriangleUp';

export default function VsfAccordionItem({
  open,
  title,
  chevronLeft,
  slotPrefix,
  slotSuffix,
  onToggle,
  children,
  ...attributes
}: VsfAccordionItemProps): JSX.Element {
  function onToggleHandler(event: React.MouseEvent<HTMLElement>) {
    if (onToggle) {
      event.preventDefault();
      onToggle();
    }
  }
  return (
    <details className="vsf-accordion-item" open={open} {...attributes}>
      <summary
        className={`${chevronLeft && 'vsf-accordion-item__header--right'} vsf-accordion-item__header`}
        onClick={onToggleHandler}
      >
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
