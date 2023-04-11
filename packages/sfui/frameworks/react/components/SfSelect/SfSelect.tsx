import { ChangeEventHandler, FocusEventHandler, KeyboardEventHandler, MouseEventHandler, useState } from 'react';
import classNames from 'classnames';
import { SfSelectSize, SfIconExpandMore } from '@storefront-ui/react';

import type { SfSelectProps } from './types';

export default function SfSelect(props: SfSelectProps) {
  const {
    size = SfSelectSize.base,
    children,
    invalid,
    wrapperClassName,
    slotChevron,
    required,
    disabled,
    className,
    placeholder,
    onBlur,
    onChange,
    onClick,
    onKeyDown,
    ...attributes
  } = props;

  const [chevronRotated, setChevronRotated] = useState(false);

  const blurHandler: FocusEventHandler<HTMLSelectElement> = (event) => {
    setChevronRotated(false);
    return onBlur ? onBlur(event) : undefined;
  };

  const changedValue: ChangeEventHandler<HTMLSelectElement> = (event) => {
    setChevronRotated(false);
    return onChange ? onChange(event) : undefined;
  };

  const clickHandler: MouseEventHandler<HTMLSelectElement> = (event) => {
    setChevronRotated(true);
    return onClick ? onClick(event) : undefined;
  };

  const keydownHandler: KeyboardEventHandler<HTMLSelectElement> = (event) => {
    if (event.code === 'Space') {
      setChevronRotated(true);
    }

    return onKeyDown ? onKeyDown(event) : undefined;
  };

  return (
    <div className={classNames('relative flex flex-col', wrapperClassName)} data-testid="select">
      <select
        required={required}
        disabled={disabled}
        className={classNames(
          'appearance-none disabled:cursor-not-allowed cursor-pointer pl-4 pr-3.5 text-neutral-900 focus:outline-primary-700 bg-transparent rounded-md ring-1 ring-inset ring-neutral-300 hover:ring-primary-700 active:ring-2 active:ring-primary-700 disabled:bg-disabled-100 disabled:text-disabled-900 disabled:ring-disabled-200',
          {
            'py-1.5': size === SfSelectSize.sm,
            'py-2': size === SfSelectSize.base,
            'py-3 text-base': size === SfSelectSize.lg,
            '!ring-negative-600 ring-2': invalid && !disabled,
          },
          className,
        )}
        data-testid="select-input"
        onBlur={blurHandler}
        onChange={changedValue}
        onClick={clickHandler}
        onKeyDown={keydownHandler}
        {...attributes}
      >
        {placeholder && (
          <option
            value=""
            className={classNames('bg-neutral-300 text-sm', {
              'text-base': size === SfSelectSize.lg,
            })}
            data-testid="select-placeholder"
          >
            {placeholder}
          </option>
        )}
        {children}
      </select>
      {slotChevron || (
        <SfIconExpandMore
          className={classNames(
            'box-border absolute -translate-y-1 pointer-events-none top-1/3 right-4 transition easy-in-out duration-0.5',
            disabled ? 'text-disabled-500' : 'text-neutral-500',
            { 'rotate-180': chevronRotated },
          )}
        />
      )}
    </div>
  );
}
