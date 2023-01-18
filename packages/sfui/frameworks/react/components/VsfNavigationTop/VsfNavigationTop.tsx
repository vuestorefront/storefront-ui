import classNames from 'classnames';
import { useRef } from 'react';
import { useClickAway } from 'react-use';
import { VsfButton, VsfButtonVariant } from '../VsfButton';
import { VsfIconClose } from '../VsfIcons';
import { VsfNavigationTopVariant } from './types';
import type { VsfNavigationTopProps } from './types';

export default function VsfNavigationTop({
  open = false,
  onOpenChange = () => false,
  variant = VsfNavigationTopVariant.auto,
  slotButtonClose,
  children,
  className,
  ...attributes
}: VsfNavigationTopProps): JSX.Element {
  const navigationTopRef = useRef(null);

  useClickAway(navigationTopRef, () => {
    onOpenChange(!open);
  });

  return open ? (
    <nav
      className={classNames('vsf-navigation-top', className)}
      ref={navigationTopRef}
      data-testid="navigation-top"
      {...attributes}
    >
      <VsfButton
        variant={VsfButtonVariant.tertiary}
        greyscale
        className="vsf-navigation-top__close"
        data-testid="navigation-top-close-button"
        onClick={() => {
          onOpenChange(!open);
        }}
        slotPrefix={slotButtonClose || <VsfIconClose />}
      />

      <div
        className={classNames(
          'vsf-navigation-top__wrapper',
          variant !== VsfNavigationTopVariant.none && `vsf-navigation-top__wrapper--${variant}`,
        )}
      >
        {children}
      </div>
    </nav>
  ) : (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <></>
  );
}
