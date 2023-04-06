import { ShowcasePageLayout } from '../../showcases';
// #region source
import { useState } from 'react';
import classNames from 'classnames';
import { SfScrollable, SfButton, SfIconChevronRight, SfIconChevronLeft } from '@storefront-ui/react';

export default function ScrollableMoveByOne() {
  const itemsLength = 20;
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="flex items-center">
      <SfButton
        variant="secondary"
        size="lg"
        square
        disabled={activeIndex === 0}
        className="!rounded-full bg-white mr-4 !ring-gray-200 !text-gray-500"
        slotPrefix={<SfIconChevronLeft />}
        onClick={() => setActiveIndex((currentValue) => currentValue - 1)}
      />
      <SfScrollable
        wrapperClassNames="min-w-0"
        className="items-center w-full"
        activeIndex={activeIndex}
        buttonsPlacement="none"
      >
        {Array.from({ length: itemsLength }, (_, i) => (
          <div
            key={i}
            className={classNames(
              'flex items-center justify-center text-gray-500 border w-36 h-36 shrink-0 border-negative-300',
              i === activeIndex ? 'border-solid bg-neutral-200' : 'border-dashed bg-neutral-100',
            )}
          >
            {i + 1}
          </div>
        ))}
      </SfScrollable>
      <SfButton
        variant="secondary"
        size="lg"
        square
        disabled={activeIndex === itemsLength - 1}
        className="!rounded-full bg-white ml-4 !ring-gray-200 !text-gray-500"
        slotPrefix={<SfIconChevronRight />}
        onClick={() => setActiveIndex((currentValue) => currentValue + 1)}
      />
    </div>
  );
}
// #endregion source

ScrollableMoveByOne.getLayout = ShowcasePageLayout;
