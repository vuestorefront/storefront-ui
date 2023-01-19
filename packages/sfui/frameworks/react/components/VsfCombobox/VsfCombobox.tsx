import classNames from 'classnames';
import { generateId } from '@storefront-ui/shared';
import { VsfInput, VsfInputRole, VsfInputAriaAutocomplete } from '../VsfInput';
import { VsfDropdownInternal } from '../VsfDropdownInternal';
import { VsfDropdownMenu } from '../VsfDropdownMenu';
import type { VsfComboboxProps } from './types';
import { VsfIconCancel, VsfIconChevronDown } from '../VsfIcons';

export default function VsfCombobox({
  size,
  label,
  loading,
  disabled,
  required,
  placeholder,
  errorText,
  helpText,
  requiredText,
  invalid,
  className,
  children,
  value = '',
  onOpenChange = () => false,
  open = false,
  onChange,
  onReset,
  onClick,
  ...attributes
}: VsfComboboxProps) {
  const listboxId = generateId('listbox');
  return (
    <div>
      <VsfDropdownInternal
        open={open}
        dropdownContentClass="w-full"
        onOpenUpdate={onOpenChange}
        slotTrigger={
          <VsfInput
            size={size}
            label={label}
            placeholder={placeholder}
            required={required}
            invalid={invalid}
            disabled={disabled}
            value={value}
            role={VsfInputRole.combobox}
            aria-autocomplete={VsfInputAriaAutocomplete.both}
            aria-controls={listboxId}
            aria-expanded={open}
            data-testid="combobox-input"
            onChange={onChange}
            slotSuffix={
              <div className="vsf-combobox__icons">
                {!disabled && open ? (
                  <button
                    type="button"
                    className="vsf-combobox__icons-cancel"
                    onClick={() => {
                      onReset?.();
                      onOpenChange(false);
                    }}
                  >
                    <VsfIconCancel />
                  </button>
                ) : null}

                <VsfIconChevronDown className={classNames({ 'vsf-combobox__icons-chevron--rotate': open })} />
              </div>
            }
            {...attributes}
          />
        }
      >
        {!disabled ? (
          <VsfDropdownMenu id={listboxId} role="listbox" loading={loading}>
            {children}
          </VsfDropdownMenu>
        ) : null}
      </VsfDropdownInternal>
      {/* TODO: replace with validation component/wrapper in the future --> */}
      <div>
        {invalid ? (
          <p className="vsf-combobox__error-text" data-testid="combobox-error-text">
            {errorText}
          </p>
        ) : null}
        {helpText ? (
          <p className="vsf-combobox__help-text" data-testid="combobox-help-text">
            {helpText}
          </p>
        ) : null}
        {requiredText && required ? (
          <p className="vsf-combobox__required-text" data-testid="combobox-required-text">
            {requiredText}
          </p>
        ) : null}
      </div>
    </div>
  );
}
