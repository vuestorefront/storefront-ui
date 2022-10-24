import classNames from 'classnames';
import type { VsfAccordionItemProps } from './types';
import VsfIconTriangleUp from '../VsfIcons/VsfIconTriangleUp';

export default function VsfAccordionItem({
  open,
  title,
  chevronLeft,
  slotPrefix,
  slotSuffix,
  children,
  className,
  ...attributes
}: VsfAccordionItemProps): JSX.Element {
  const classes = classNames([className, 'vsf-accordion-item']);
  return (
    <details className={classes} open={open} {...attributes} data-testid="accordion-item">
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
