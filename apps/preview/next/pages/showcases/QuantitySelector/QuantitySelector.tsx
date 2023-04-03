import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfButton, SfIconAdd, SfIconRemove } from '@storefront-ui/react';
import { useCounter } from 'react-use';
import { useId, ChangeEvent } from 'react';
import { clamp } from '@storefront-ui/shared';

export default function QuantitySelector() {
  const inputId = useId();
  const min = 1;
  const max = 10;
  const [value, { inc, dec, set }] = useCounter(min);
  function handleOnChange(event: ChangeEvent<HTMLInputElement>) {
    const { value: currentValue } = event.target;
    const nextValue = parseFloat(currentValue);
    set(clamp(nextValue, min, max));
  }
  return (
    <div className="inline-flex flex-col items-center">
      <div className="flex border border-neutral-300 rounded-md">
        <SfButton
          type="button"
          variant="tertiary"
          square
          className="rounded-r-none"
          disabled={value <= min}
          aria-controls={inputId}
          aria-label="Decrease value"
          onClick={() => dec()}
        >
          <SfIconRemove />
        </SfButton>
        <input
          id={inputId}
          type="number"
          role="spinbutton"
          className="appearance-none mx-2 w-8 text-center bg-transparent font-medium [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:display-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:display-none [&::-webkit-outer-spin-button]:m-0 [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none disabled:placeholder-disabled-900 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
          min={min}
          max={max}
          value={value}
          onChange={handleOnChange}
        />
        <SfButton
          type="button"
          variant="tertiary"
          square
          className="rounded-l-none"
          disabled={value >= max}
          aria-controls={inputId}
          aria-label="Increase value"
          onClick={() => inc()}
        >
          <SfIconAdd />
        </SfButton>
      </div>
      <p className="text-xs mt-2 text-neutral-500">
        <strong className="text-neutral-900">{max}</strong> in stock
      </p>
    </div>
  );
}

// #endregion source
QuantitySelector.getLayout = ShowcasePageLayout;
