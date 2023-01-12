import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { useWindowSize } from 'react-use';
import type { VsfTabsProps } from './types';
import VsfSlider from '../VsfSlider/VsfSlider';
import VsfDivider from '../VsfDivider/VsfDivider';
import { VsfSliderNavigation } from '../VsfSlider/types';
import TabsContext from '../../shared/tabsContext';

export default function VsfTabs(props: VsfTabsProps): JSX.Element {
  const { active, children, className, ...attributes } = props;

  const tabs = useRef<HTMLDivElement>(null);
  const showArrows = useRef(false);
  const [tabsWidth] = useState((): number | undefined => tabs.current?.offsetWidth);
  const { width: windowWidth } = useWindowSize();

  useEffect(() => {
    if (!tabsWidth) return;
    if (windowWidth < tabsWidth) {
      showArrows.current = true;
    }
  }, [windowWidth, tabsWidth]);
  return (
    <>
      <TabsContext.Provider value={props}>
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
      </TabsContext.Provider>
      <VsfDivider />
    </>
  );
}
