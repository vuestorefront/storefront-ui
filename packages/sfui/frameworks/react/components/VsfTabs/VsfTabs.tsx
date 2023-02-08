import { useMemo } from 'react';
import classNames from 'classnames';
import { VsfTabsProps, VsfTabsContext } from './types';
import VsfScrollable from '../VsfScrollable/VsfScrollable';
import VsfDivider from '../VsfDivider/VsfDivider';
import { VsfScrollableNavigation } from '../VsfScrollable/types';

export default function VsfTabs(props: VsfTabsProps): JSX.Element {
  const { active, children, className, ...attributes } = props;

  const contextValue = useMemo(() => ({ props }), [props]);

  return (
    <>
      <VsfTabsContext.Provider value={contextValue}>
        <VsfScrollable
          className={classNames('vsf-tabs', className)}
          draggable={{ sensitivity: 3 }}
          scrollSnap
          navigation={VsfScrollableNavigation.floating}
          {...attributes}
          data-testid="tabs"
          role="tablist"
        >
          {children}
        </VsfScrollable>
      </VsfTabsContext.Provider>
      <VsfDivider />
    </>
  );
}
