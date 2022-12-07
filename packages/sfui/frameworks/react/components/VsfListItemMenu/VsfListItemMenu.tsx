import classNames from 'classnames';
import { VsfCounterSizes } from '../VsfCounter/types';
import { VsfListItemMenuProps, VsfListItemMenuSizes } from './types';
import VsfCounter from '../VsfCounter/VsfCounter';

export default function VsfListItemMenu({
  label,
  counter,
  secondaryText,
  link,
  size = VsfListItemMenuSizes.base,
  disabled,
  selected,
  className,
  slotPreffix,
  slotSuffix,
  onClick,
}: VsfListItemMenuProps): JSX.Element {
  // TODO: Replace with Link component when its done
  const TagComponent = link ? 'a' : 'button';
  const componentType = !link ? 'button' : undefined;
  const componentDisabled = !link ? disabled : undefined;
  return (
    <TagComponent
      className={classNames(
        'vsf-list-item-menu peer',
        `vsf-list-item-menu--size-${size}`,
        { 'vsf-list-item-menu--selected': selected, 'vsf-list-item-menu--disabled': disabled },
        className,
      )}
      href={link}
      type={componentType}
      disabled={componentDisabled}
      onClick={onClick}
      data-testid="list-item-menu"
    >
      {slotPreffix && <div className="vsf-list-item-menu__icon vsf-list-item-menu__icon--preffix">{slotPreffix}</div>}
      <span className="vsf-list-item-menu__content">
        <span className="vsf-list-item-menu__title">
          {label ? <span className="vsf-list-item-menu__label">{label}</span> : null}
          {counter ? (
            <VsfCounter size={VsfCounterSizes.xl} className="vsf-list-item-menu__counter">
              {counter}
            </VsfCounter>
          ) : null}
        </span>
        {secondaryText ? <span className="vsf-list-item-menu__secondary-text">{secondaryText}</span> : null}
      </span>
      {slotSuffix && <div className="vsf-list-item-menu__icon">{slotSuffix}</div>}
    </TagComponent>
  );
}
