import { component$, useComputed$, useSignal } from '@builder.io/qwik';
import { SfInput } from '@storefront-ui/qwik';

export default component$(() => {
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

  const valueSignal = useSignal('');
  const isAboveLimitSignal = useComputed$(() => (characterLimit ? valueSignal.value.length > characterLimit : false));
  const charsCountSignal = useComputed$(() => (characterLimit ? characterLimit - valueSignal.value.length : null));
  const getCharacterLimitClassSignal = useComputed$(() =>
    isAboveLimitSignal.value ? 'text-negative-700 font-medium' : 'text-neutral-500',
  );

  return (
    <>
      <label>
        <span class={`text-sm font-medium ${disabled ? 'cursor-not-allowed text-disabled-500' : ''}`}>{label}</span>
        <SfInput
          size="base"
          invalid={false}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readonly}
          wrapperClass={`${
            disabled || readonly ? 'peer !bg-disabled-100 !ring-disabled-300 !ring-1 !text-disabled-500' : ''
          }`}
          value={valueSignal.value}
          onChange$={(event) => {
            valueSignal.value = event.target.value;
          }}
        />
      </label>
      <div class="flex justify-between">
        <div>
          {invalid && !disabled && <p class="text-sm text-negative-700 font-medium mt-0.5">{errorText}</p>}
          {helpText && (
            <p class={`text-xs mt-0.5 ${disabled ? 'text-disabled-500' : 'text-neutral-500'}`}>{helpText}</p>
          )}
          {requiredText && required ? (
            <p class="mt-1 text-sm font-normal text-neutral-500 before:content-['*']">{requiredText}</p>
          ) : null}
        </div>
        {characterLimit && !readonly ? (
          <p class={`text-xs mt-0.5 ${disabled ? 'text-disabled-500' : getCharacterLimitClassSignal.value}`}>
            {charsCountSignal.value}
          </p>
        ) : null}
      </div>
    </>
  );
});
