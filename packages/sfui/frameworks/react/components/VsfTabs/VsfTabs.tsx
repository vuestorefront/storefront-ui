import { useEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';
import { useWindowSize } from 'react-use';
import { VsfTabsProps, VsfTabsContext } from './types';
import VsfSlider from '../VsfSlider/VsfSlider';
import VsfDivider from '../VsfDivider/VsfDivider';
import { VsfSliderNavigation } from '../VsfSlider/types';

export default function VsfTabs(props: VsfTabsProps): JSX.Element {
  const { active, children, className, ...attributes } = props;

  const tabs = useRef<HTMLDivElement>(null);
  const showArrows = useRef(false);
  const [tabsWidth] = useState((): number | undefined => tabs.current?.offsetWidth);
  const { width: windowWidth } = useWindowSize();
  const contextValue = useMemo(() => ({ props }), [props]);

  useEffect(() => {
    if (!tabsWidth) return;
    if (windowWidth < tabsWidth) {
      showArrows.current = true;
    }
  }, [windowWidth, tabsWidth]);
  return (
    <>
      <VsfTabsContext.Provider value={contextValue}>
        {/* TODO: When VsfSlider is refactored pass showArrow value to the component to show arrows when needed */}
        <VsfSlider
          ref={tabs}
          className={classNames('vsf-tabs', className)}
          draggable={{ sensitivity: 3 }}
          scrollSnap
          navigation={VsfSliderNavigation.floating}
          {...attributes}
          data-testid="tabs"
          role="tablist"
        >
          {children}
        </VsfSlider>
      </VsfTabsContext.Provider>
      <VsfDivider />
    </>
  );
}
