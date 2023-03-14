/* eslint-disable jsx-a11y/label-has-associated-control */
import { VsfInput } from '@storefront-ui/react';
import classNames from 'classnames';
import { ChangeEvent } from 'react';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  let value = '';
  const characterLimit = 25;
  const label = 'Label';
  const placeholder = 'placeholder';
  const disabled = false;
  const readonly = false;
  const invalid = false;
  const helpText = 'Help text';
  const required = false;
  const requiredText = 'Required';
  const errorText = 'Error';

  function onChange(event: ChangeEvent<HTMLInputElement>) {
    value = event?.target.value;
  }
  const isAboveLimit = characterLimit ? value.length > characterLimit : false;
  const charsCount = characterLimit ? characterLimit - value.length : null;

  const getCharacterLimitClass = () => (isAboveLimit ? 'text-negative-700 font-medium' : 'text-neutral-500');

  return (
    <>
      <label>
        <span
          className={classNames('text-sm font-medium', {
            'cursor-not-allowed text-disabled-500': disabled,
          })}
        >
          {label}
        </span>
        <VsfInput
          size="base"
          value={value}
          invalid={false}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readonly}
          onChange={onChange}
          wrapperClassName={classNames({
            'peer !bg-disabled-100 !ring-disabled-300 !ring-1 !text-disabled-500': disabled || readonly,
          })}
        />
      </label>
      <div className="flex justify-between">
        <div>
          {invalid && !disabled && <p className="text-sm text-negative-700 font-medium mt-0.5">{errorText}</p>}
          {helpText && (
            <p className={classNames('text-xs mt-0.5', disabled ? 'text-disabled-500' : 'text-neutral-500')}>
              {helpText}
            </p>
          )}
          {requiredText && required ? (
            <p className="mt-1 text-sm font-normal text-neutral-500 before:content-['*']">{requiredText}</p>
          ) : null}
        </div>
        {characterLimit && !readonly ? (
          <p className={classNames('text-xs mt-0.5', disabled ? 'text-disabled-500' : getCharacterLimitClass())}>
            {charsCount}
          </p>
        ) : null}
      </div>
    </>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
