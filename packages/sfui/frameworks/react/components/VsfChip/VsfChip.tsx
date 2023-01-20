import classNames from 'classnames';
import { VsfChipProps, VsfChipSize } from './types';
import VsfIconClose from '../VsfIcons/VsfIconClose';
import { VsfIconSize } from '../VsfIconBase/types';

export default function VsfChip({
  onSelected,
  value,
  label,
  selected = false,
  disabled = false,
  deletable = false,
  size = VsfChipSize.base,
  slotPrefix,
  className = '',
  ...attributes
}: VsfChipProps): JSX.Element {
  const getIconSize = (): VsfIconSize => {
    switch (size) {
      case VsfChipSize.sm:
        return VsfIconSize.sm;
      default:
        return VsfIconSize.base;
    }
  };

  return (
    <label
      className={classNames([
        'vsf-chip',
        `vsf-chip--size-${size}`,
        { 'vsf-chip--hidden': deletable && !selected, className },
      ])}
      {...attributes}
      data-testid="chip"
    >
      <input
        className="peer vsf-chip__input"
        type="checkbox"
        disabled={disabled}
        onChange={onSelected}
        value={value}
        checked={!disabled && (deletable || selected)}
        data-testid="chip-input"
      />
      <span className="vsf-chip__peer-wrapper">
        {slotPrefix && <span className="vsf-chip__prefix">{slotPrefix}</span>}
        {label && <span className="vsf-chip__label">{label}</span>}
        {deletable && !disabled && <VsfIconClose size={getIconSize()} className="vsf-chip__close-icon" />}
      </span>
    </label>
  );
}
