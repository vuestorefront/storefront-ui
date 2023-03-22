import { ShowcasePageLayout } from '../../showcases';
// #region source
import { VsfButton, VsfIconAdd, VsfIconRemove } from '@storefront-ui/react';
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
      <div className="flex">
        <VsfButton
          type="button"
          variant="tertiary"
          square
          className="border-l border-y border-neutral-300 rounded-r-none"
          disabled={value <= min}
          aria-controls={inputId}
          aria-label="Decrease value"
          onClick={() => dec()}
        >
          <VsfIconRemove />
        </VsfButton>
        <input
          id={inputId}
          type="number"
          role="spinbutton"
          className="appearance-none px-2 border-y border-neutral-300 text-center [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
          min={min}
          max={max}
          value={value}
          onChange={handleOnChange}
        />
        <VsfButton
          type="button"
          variant="tertiary"
          square
          className="border-r border-y border-neutral-300 rounded-l-none"
          disabled={value >= max}
          aria-controls={inputId}
          aria-label="Increase value"
          onClick={() => inc()}
        >
          <VsfIconAdd />
        </VsfButton>
      </div>
      <p className="text-xs mt-2 text-neutral-500">
        <strong className="text-neutral-900">{max}</strong> in stock
      </p>
    </div>
  );
}

// #endregion source
QuantitySelector.getLayout = ShowcasePageLayout;
