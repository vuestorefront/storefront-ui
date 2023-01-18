import classNames from 'classnames';
import { VsfCounterSize } from '../VsfCounter/types';
import { VsfListItemMenuProps, VsfListItemMenuSize } from './types';
import VsfCounter from '../VsfCounter/VsfCounter';

export default function VsfListItemMenu({
  label,
  counter,
  secondaryText,
  link,
  size = VsfListItemMenuSize.base,
  disabled,
  selected,
  selectedBackground,
  className,
  slotPrefix,
  slotSuffix,
  slotSecondaryText,
  truncate,
  tag,
  children,
  onClick = () => ({}),
  ...attributes
}: VsfListItemMenuProps): JSX.Element {
  //  TODO: Replace with Link component when its done
  const TagComponent = tag || (link ? 'a' : 'button');
  const componentType = TagComponent === 'button' ? 'button' : undefined;
  const componentDisabled = !link ? disabled : undefined;
  const attrs = componentType ? { type: componentType!, ...attributes } : ({ ...attributes } as {});

  return (
    <TagComponent
      className={classNames(
        'vsf-list-item-menu peer',
        `vsf-list-item-menu--size-${size}`,
        {
          'vsf-list-item-menu--selected': selected,
          'vsf-list-item-menu--selected-bg': selected && selectedBackground,
          'vsf-list-item-menu--disabled': disabled,
        },
        className,
      )}
      href={link}
      disabled={componentDisabled}
      onClick={() => onClick(!selected)}
      data-testid="list-item-menu"
      {...attrs}
    >
      {slotPrefix && <div className="vsf-list-item-menu__icon vsf-list-item-menu__icon--prefix">{slotPrefix}</div>}
      <div className="vsf-list-item-menu__content">
        {children || (
          <span className="vsf-list-item-menu__title">
            {label ? (
              <span className="vsf-list-item-menu__label" data-testid="list-item-menu-label">
                {label}
              </span>
            ) : null}
            {counter ? (
              <VsfCounter
                size={VsfCounterSize.xl}
                className="vsf-list-item-menu__counter"
                data-testid="list-item-menu-counter"
              >
                {counter}
              </VsfCounter>
            ) : null}
          </span>
        )}
        {slotSecondaryText ||
          (secondaryText && (
            <p
              className={classNames('vsf-list-item-menu__secondary-text', {
                'vsf-list-item-menu__secondary-text--truncated': truncate,
              })}
              data-testid="list-item-menu-secondary-text"
            >
              {secondaryText}
            </p>
          ))}
      </div>
      {slotSuffix && <div className="vsf-list-item-menu__icon">{slotSuffix}</div>}
    </TagComponent>
  );
}
