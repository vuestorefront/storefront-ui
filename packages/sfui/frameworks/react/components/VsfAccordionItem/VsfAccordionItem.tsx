import classNames from 'classnames';
import type { VsfAccordionItemProps } from './types';
import VsfIconExpandLess from '../VsfIcons/VsfIconExpandLess';
import { VsfAccordionItemSize } from './types';

export default function VsfAccordionItem({
  open,
  title,
  size = VsfAccordionItemSize.base,
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
      <summary
        className={classNames('vsf-accordion-item__header', { 'vsf-accordion-item__header--right': chevronLeft })}
      >
        {slotPrefix || (
          <span
            className={classNames({
              'vsf-accordion-item__title--right': chevronLeft,
              [`vsf-accordion-item__title vsf-accordion-item__header--${size}`]: true,
            })}
            data-testid="accordion-item-title"
          >
            {title}
          </span>
        )}
        {slotSuffix || <VsfIconExpandLess className="vsf-accordion-item__icon" />}
      </summary>
      <div className="vsf-accordion-item__content" data-testid="accordion-item-content">
        {children}
      </div>
    </details>
  );
}
