import { ShowcasePageLayout } from '../../showcases';
// #region source
import { useState, useMemo } from 'react';
import { useScrollable } from '@storefront-ui/react';
import classNames from 'classnames';

const snap = true;

export default function ModalDemo() {
  const [activeIndex, setActiveIndex] = useState(4);
  const sliderOptions = useMemo(() => ({ drag: true, activeIndex }), [activeIndex]);
  const { getContainerProps, state } = useScrollable(sliderOptions);
  console.log(activeIndex, state);
  return (
    <div
      {...getContainerProps()}
      className={classNames('scrollbar-hide w-full overflow-x-auto flex gap-4 motion-safe:scroll-smooth', {
        'snap-x snap-mandatory': snap,
      })}
    >
      {Array.from({ length: 10 }, (_, i) => (
        <div
          key={i}
          className={classNames('w-36 h-36 shrink-0 bg-neutral-100 border border-negative-300 border-dashed', {
            'snap-center': snap,
          })}
        />
      ))}
    </div>
  );
}

// #endregion source
ModalDemo.getLayout = ShowcasePageLayout;
