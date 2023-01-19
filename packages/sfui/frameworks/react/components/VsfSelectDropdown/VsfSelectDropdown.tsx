import classNames from 'classnames';
import type { VsfSelectDropdownProps } from './types';
import { VsfSelectDropdownSize } from './types';
import { VsfInput, VsfInputSize } from '../VsfInput';
import { VsfDropdownInternal } from '../VsfDropdownInternal';
import { VsfDropdownMenu } from '../VsfDropdownMenu';
import { VsfIconChevronDown } from '../VsfIcons';
import { VsfListItemMenu } from '../VsfListItemMenu';

function selectDropdownSize(size: `${VsfSelectDropdownSize}`) {
  switch (size) {
    case VsfSelectDropdownSize.sm:
      return VsfInputSize.sm;

    case VsfSelectDropdownSize.lg:
      return VsfInputSize.lg;

    default:
      return VsfInputSize.base;
  }
}

export default function VsfSelectDropdown({
  options,
  open = false,
  placeholder,
  label,
  loading,
  disabled,
  required,
  errorText,
  helpText,
  size = VsfSelectDropdownSize.base,
  requiredText = '*Required',
  invalid,
  className,
  children,
  value = '',
  onOpenUpdate,
  onItemClick,
  ...attributes
}: VsfSelectDropdownProps): JSX.Element {
  return (
    <div className={classNames('vsf-select-dropdown', { 'vsf-select-dropdown--disabled': disabled }, className)}>
      <VsfDropdownInternal
        open={open}
        slotTrigger={
          <VsfInput
            placeholder={placeholder}
            required={required}
            label={label}
            invalid={invalid}
            disabled={disabled}
            size={selectDropdownSize(size)}
            value={value}
            className="vsf-select-dropdown__input"
            slotSuffix={
              <VsfIconChevronDown
                className={classNames('vsf-select-dropdown__chevron', { 'vsf-combobox__icons-chevron--rotate': open })}
              />
            }
          />
        }
        onOpenUpdate={onOpenUpdate}
        dropdownContentClass="left-0 translate-x-[0] w-full"
        {...attributes}
      >
        {children ||
          (!disabled && (
            <VsfDropdownMenu role="listbox" loading={loading}>
              {options?.map((option: string) => (
                <li key={option} className="vsf-select-dropdown__list-item">
                  <VsfListItemMenu
                    role="option"
                    label={option}
                    aria-selected={value === option}
                    onClick={() => onItemClick(option)}
                  />
                </li>
              ))}
            </VsfDropdownMenu>
          ))}
      </VsfDropdownInternal>
      {invalid && (
        <span className="vsf-select-dropdown__error-text" data-testid="select-dropdown-error-text">
          {errorText}
        </span>
      )}
      {helpText && (
        <span className="vsf-select-dropdown__help-text" data-testid="select-dropdown-help-text">
          {helpText}
        </span>
      )}
      {requiredText && required && (
        <span className="vsf-select-dropdown__required-text" data-testid="select-dropdown-required-text">
          {requiredText}
        </span>
      )}
    </div>
  );
}
