import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfButton, SfIconAdd, SfIconRemove } from '@storefront-ui/react';
import { useId } from 'react';

export default function OutOfStockDemo() {
  const inputId = useId();
  const min = 1;
  const max = 10;
  return (
    <div className="inline-flex flex-col items-center">
      <div className="flex rounded-md border border-disabled-200 bg-disabled-100">
        <SfButton
          variant="tertiary"
          type="button"
          square
          disabled
          aria-controls={inputId}
          aria-label="Decrease value"
          className="!bg-neutral-100"
        >
          <SfIconRemove />
        </SfButton>
        <input
          id={inputId}
          type="number"
          role="spinbutton"
          disabled
          className="appearance-none mx-2 w-8 text-center bg-transparent font-medium [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:display-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:display-none [&::-webkit-outer-spin-button]:m-0 [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none disabled:placeholder-disabled-900 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
          min={min}
          max={max}
        />

        <SfButton variant="tertiary" type="button" square disabled aria-controls={inputId} aria-label="Increase value">
          <SfIconAdd />
        </SfButton>
      </div>
      <p className="text-negative-700 font-medium text-xs mt-2">Out of stock</p>
    </div>
  );
}

// #endregion source
OutOfStockDemo.getLayout = ShowcasePageLayout;
