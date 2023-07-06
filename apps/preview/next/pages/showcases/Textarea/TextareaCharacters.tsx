/* eslint-disable jsx-a11y/label-has-associated-control */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfTextarea } from '@storefront-ui/react';
import classNames from 'classnames';
import { ChangeEvent, useState } from 'react';

export default function TextareaWithLimit() {
  const characterLimit = 25;
  const disabled = false;
  const readonly = false;
  const invalid = false;
  const helpText = 'Help text';
  const errorText = 'Error';

  const [value, setValue] = useState('');

  function onChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setValue(event?.target.value);
  }
  const isAboveLimit = characterLimit ? value.length > characterLimit : false;
  const charsCount = characterLimit ? characterLimit - value.length : null;

  const getCharacterLimitClass = () => (isAboveLimit ? 'text-negative-700 font-medium' : 'text-neutral-500');

  return (
    <>
      <label>
        <span className="text-sm font-medium">Description</span>
        <SfTextarea
          value={value}
          placeholder="Write something about yourself..."
          invalid={invalid}
          disabled={disabled}
          onChange={onChange}
          className="w-full mt-0.5"
        />
      </label>
      <div className="flex justify-between mt-0.5">
        <div>
          {invalid && !disabled && (
            <p className="typography-text-sm text-negative-700 font-medium mt-0.5">{errorText}</p>
          )}
          {helpText && (
            <p className={classNames('typography-text-xs', disabled ? 'text-disabled-500' : 'text-neutral-500')}>
              {helpText}
            </p>
          )}
        </div>
        {characterLimit && !readonly ? (
          <p className={classNames('typography-text-xs', disabled ? 'text-disabled-500' : getCharacterLimitClass())}>
            {charsCount}
          </p>
        ) : null}
      </div>
    </>
  );
}

// #endregion source
TextareaWithLimit.getLayout = ShowcasePageLayout;
