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
      <div className="flex rounded-md bg-neutral-100 relative after:content-['-'] after:text-disabled-900 after:absolute after:flex after:justify-center after:items-center after:w-full after:h-full">
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
          className="appearance-none px-2 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-inner-spin-button]:display-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-outer-spin-button]:display-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
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
