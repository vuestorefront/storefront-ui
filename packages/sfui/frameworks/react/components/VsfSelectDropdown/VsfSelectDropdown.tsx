import classNames from 'classnames';
import type { VsfSelectDropdownProps } from './types';
import { VsfSelectDropdownSize } from './types';
import { VsfDropdownInternal } from '../VsfDropdownInternal';
import { VsfDropdownMenu } from '../VsfDropdownMenu';
import { VsfIconExpandMore } from '../VsfIcons';
import { VsfListItemMenu } from '../VsfListItemMenu';

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
  onChange,
  ...attributes
}: VsfSelectDropdownProps): JSX.Element {
  return (
    <div
      className={classNames('vsf-select-dropdown', { 'vsf-select-dropdown--disabled': disabled }, className)}
      data-testid="select-dropdown"
    >
      <VsfDropdownInternal
        open={open}
        slotTrigger={
          <label
            className={classNames('vsf-select-dropdown__label', { 'vsf-select-dropdown__label--disabled': disabled })}
          >
            {label}
            <span
              className={classNames(
                'vsf-select-dropdown__trigger',
                `vsf-select-dropdown__trigger--${size}`,
                { 'vsf-select-dropdown__trigger--invalid': invalid },
                { 'vsf-select-dropdown__trigger--required': required && !value },
                { 'vsf-select-dropdown__trigger--disabled': disabled },
              )}
              tabIndex={disabled ? undefined : 0}
            >
              {!value && (
                <span
                  className={classNames('vsf-select-dropdown__placeholder', {
                    'vsf-select-dropdown__placeholder--hidden': !placeholder,
                  })}
                >
                  {placeholder}
                </span>
              )}
              <span>{value}</span>
              <VsfIconExpandMore
                className={classNames('vsf-select-dropdown__chevron', {
                  'vsf-select-dropdown__chevron--up': open && !disabled,
                })}
              />
            </span>
          </label>
        }
        onOpenUpdate={onOpenUpdate}
        className="vsf-select-dropdown-internal"
        triggerClass="vsf-select-dropdown-internal__trigger"
        dropdownClass="vsf-select-dropdown-internal__dropdown"
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
      {invalid && !disabled && (
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
