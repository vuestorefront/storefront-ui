import { useContext } from 'react';
import classNames from 'classnames';
import { VsfTabsItemProps } from './types';
import VsfButton from '../VsfButton/VsfButton';
import { VsfButtonVariants } from '../VsfButton/index';
import TabsContext from '../../shared/tabsContext';

export default function VsfTabs({
  children,
  slotPrefix,
  slotSuffix,
  uid,
  disabled,
  className,
  ...attributes
}: VsfTabsItemProps): JSX.Element {
  const tabsContext = useContext(TabsContext);
  return (
    <VsfButton
      className={classNames('vsf-tabs-item', { 'vsf-tabs-item--active': tabsContext.active === uid }, className)}
      size={tabsContext.size}
      variant={VsfButtonVariants.tertiary}
      onClick={() => tabsContext.onChange?.(uid)}
      disabled={disabled}
      {...attributes}
      data-testid="tabs-item"
      role="tab"
      aria-selected={tabsContext.active === uid}
      slotPrefix={slotPrefix}
      slotSuffix={slotSuffix}
    >
      {children}
    </VsfButton>
  );
}
