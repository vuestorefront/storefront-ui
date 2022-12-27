import { VsfIconClose, VsfIconLogo } from '../VsfIcons';
import VsfSideSheet from '../VsfSideSheet/VsfSideSheet';
import VsfNavbarTop from '../VsfNavbarTop/VsfNavbarTop';
import VsfNavbarTopAction from '../VsfNavbarTop/VsfNavbarTopAction';
import VsfNavbarTopActionGroup from '../VsfNavbarTop/VsfNavbarTopActionGroup';
import type { VsfNavigationSideProps } from './types';

export default function VsfNavigationSide({
  permanent,
  leftSide,
  overlayVisible,
  open,
  logoLink,
  logoAriaLabel,
  closeAriaLabel,
  slotNavigation,
  children,
  slotBanner,
  onOpenChange = () => false,
  ...attributes
}: VsfNavigationSideProps): JSX.Element {
  return (
    <VsfSideSheet
      className="vsf-navigation-side"
      overlayVisible={overlayVisible}
      permanent={permanent}
      leftSide={leftSide}
      open={open}
      onOpenChange={onOpenChange}
      data-testid="navigation-side"
      {...attributes}
    >
      {slotNavigation || (
        <VsfNavbarTop filled className="vsf-navigation-side__navbar">
          {/* TODO: Replace with Link component when ready */}
          <a
            href={logoLink}
            aria-label={logoAriaLabel}
            className="flex items-center text-white mx-0 h-8 md:h-10 lg:h-7"
            data-testid="navigation-side-logo"
          >
            <VsfIconLogo viewBox="0 0 205 28" className="!w-[12.5rem] !h-[1.75rem]" />
          </a>
          <VsfNavbarTopActionGroup>
            <VsfNavbarTopAction
              icon
              aria-label={closeAriaLabel}
              data-testid="navigation-side-close-button"
              onClick={() => {
                onOpenChange(!open);
              }}
            >
              <VsfIconClose />
            </VsfNavbarTopAction>
          </VsfNavbarTopActionGroup>
        </VsfNavbarTop>
      )}
      {children}
      <div className="vsf-navigation-side__banner">{slotBanner}</div>
    </VsfSideSheet>
  );
}
