import { useContext } from 'react';
import classNames from 'classnames';
import { VsfTabsItemProps, VsfTabsContext } from './types';
import VsfButton from '../VsfButton/VsfButton';
import { VsfButtonVariant } from '../VsfButton/index';

export default function VsfTabs({
  children,
  slotPrefix,
  slotSuffix,
  uid,
  disabled,
  className,
  ...attributes
}: VsfTabsItemProps): JSX.Element {
  const tabsContext = useContext(VsfTabsContext);

  if (!tabsContext) throw new Error('VsfTabsItem :: should be always used within <VsfTabs>');

  const { props: TabsProps } = tabsContext;

  return (
    <VsfButton
      className={classNames('vsf-tabs-item', { 'vsf-tabs-item--active': TabsProps.active === uid }, className)}
      size={TabsProps.size}
      variant={VsfButtonVariant.tertiary}
      onClick={() => TabsProps.onChange?.(uid)}
      disabled={disabled}
      {...attributes}
      data-testid="tabs-item"
      role="tab"
      aria-selected={TabsProps.active === uid}
      slotPrefix={slotPrefix}
      slotSuffix={slotSuffix}
    >
      {children}
    </VsfButton>
  );
}
