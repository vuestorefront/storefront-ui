import { ShowcasePageLayout } from '../../showcases';
// #region source
import { useState } from 'react';
import classNames from 'classnames';
import { SfScrollable } from '@storefront-ui/react';

export default function ScrollableMoveByOne() {
  const itemsLength = 20;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <SfScrollable
      wrapperClassName="min-w-0"
      className="items-center w-full snap-x snap-mandatory"
      activeIndex={activeIndex}
      prevDisabled={activeIndex === 0}
      nextDisabled={activeIndex === itemsLength - 1}
      isActiveIndexCentered
      onPrev={({ preventDefault }) => {
        preventDefault();
        setActiveIndex((currentValue) => currentValue - 1);
      }}
      onNext={({ preventDefault }) => {
        preventDefault();
        setActiveIndex((currentValue) => currentValue + 1);
      }}
    >
      {Array.from({ length: itemsLength }, (_, i) => (
        <div
          key={i}
          className={classNames(
            'flex items-center justify-center text-gray-500 border w-36 h-36 shrink-0 border-negative-300 snap-start snap-always',
            i === activeIndex ? 'border-solid bg-neutral-200' : 'border-dashed bg-neutral-100',
          )}
        >
          {i + 1}
        </div>
      ))}
    </SfScrollable>
  );
}
// #endregion source

ScrollableMoveByOne.getLayout = ShowcasePageLayout;
