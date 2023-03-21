import { VsfButton, VsfIconRemove, VsfLink, VsfIconAdd, VsfIconSell, VsfIconDelete } from '@storefront-ui/react';
import card from '@assets/smartwatch.png';
import Image from 'next/image';
import { useCounter } from 'react-use';
import { useId, ChangeEvent } from 'react';
import { clamp } from '@storefront-ui/shared';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
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
    <div className="relative flex border-b-[1px] border-neutral-200 hover:shadow-lg min-w-[320px] max-w-[640px] p-4">
      <div className="relative overflow-hidden rounded-md w-[100px] small:w-[176px]">
        <VsfLink href="#">
          <Image
            className="w-full h-auto border rounded-md border-neutral-200"
            src={card.src}
            alt="alt"
            width={300}
            height={300}
          />
        </VsfLink>
        <div className="absolute top-0 left-0 text-white bg-secondary-600 py-1 pl-1.5 pr-2 text-xs font-medium">
          <VsfIconSell size="xs" className="mr-1" />
          Sale
        </div>
      </div>
      <div className="flex flex-col pl-4 min-w-[180px] flex-1">
        <VsfLink href="#" variant="secondary" className="no-underline typography-text-sm small:typography-text-lg">
          Smartwatch Fitness Tracker
        </VsfLink>
        <div className="my-2 small:mb-0">
          <ul className="text-xs font-normal leading-5 small:typography-text-sm text-neutral-700">
            <li>
              <span className="mr-1">Size:</span>
              <span className="font-medium">6.5</span>
            </li>
            <li>
              <span className="mr-1">Color:</span>
              <span className="font-medium">Red</span>
            </li>
          </ul>
        </div>
        <div className="items-center small:mt-auto small:flex">
          <span className="font-bold small:ml-auto small:order-1 typography-text-sm small:typography-text-lg">
            $2,345.99
          </span>
          <div className="flex items-center justify-between mt-4 small:mt-0">
            <div className="flex mr-auto small:mr-4">
              <VsfButton
                type="button"
                variant="tertiary"
                square
                className="border-l rounded-r-none border-y border-neutral-300"
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
                className="appearance-none px-2 border-y border-neutral-300 rounded-none text-center [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                min={min}
                max={max}
                value={value}
                onChange={handleOnChange}
              />
              <VsfButton
                type="button"
                variant="tertiary"
                square
                className="border-r rounded-l-none border-y border-neutral-300"
                disabled={value >= max}
                aria-controls={inputId}
                aria-label="Increase value"
                onClick={() => inc()}
              >
                <VsfIconAdd />
              </VsfButton>
            </div>
            <button
              aria-label="Remove"
              type="button"
              className="text-neutral-500 text-xs font-light ml-auto flex items-center px-3 py-1.5"
            >
              <VsfIconDelete />
              <span className="hidden ml-1.5 small:block"> Remove </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
