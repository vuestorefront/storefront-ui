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
    set(Number(clamp(nextValue, min, max)));
  }
  return (
    <div className="inline-flex flex-col items-center">
      <div className="flex">
        <SfButton
          type="button"
          square
          className="!rounded-full"
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
          className="appearance-none mx-2 text-center [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:display-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:display-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
          min={min}
          max={max}
          value={value}
          onChange={handleOnChange}
        />

        <SfButton
          type="button"
          square
          className="!rounded-full"
          disabled={value >= max}
          aria-controls={inputId}
          aria-label="Increase value"
          onClick={() => inc()}
        >
          <SfIconAdd />
        </SfButton>
      </div>
    </div>
  );
}

// #endregion source
QuantitySelector.getLayout = ShowcasePageLayout;
