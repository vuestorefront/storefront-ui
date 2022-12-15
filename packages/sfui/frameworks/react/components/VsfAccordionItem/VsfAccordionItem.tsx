import classNames from 'classnames';
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
  className,
  ...attributes
}: VsfAccordionItemProps): JSX.Element {
  const classes = classNames([className, 'vsf-accordion-item']);
  return (
    <details className={classes} open={open} onToggle={onToggle} {...attributes} data-testid="accordion-item">
      <summary className={`${chevronLeft && 'vsf-accordion-item__header--right'} vsf-accordion-item__header`}>
        {slotPrefix || (
          <span
            className={`${chevronLeft && 'vsf-accordion-item__title--right'} vsf-accordion-item__title`}
            data-testid="accordion-item-title"
          >
            {title}
          </span>
        )}
        {slotSuffix || <VsfIconTriangleUp className="vsf-accordion-item__icon" />}
      </summary>
      <div className="vsf-accordion-item__content" data-testid="accordion-item-content">
        {children}
      </div>
    </details>
  );
}
