import {
  VsfIconShoppingCart,
  VsfIconFavorite,
  VsfIconPerson,
  VsfIconMenu,
  VsfIconVuestorefront,
  VsfButton,
} from '@storefront-ui/react';
import classNames from 'classnames';
import brandLogo from '@assets/vsf_logo_white.svg';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  const actionItems = [
    {
      icon: <VsfIconShoppingCart />,
      ariaLabel: 'Cart',
    },
    {
      icon: <VsfIconFavorite />,
      ariaLabel: 'Wishlist',
    },
    {
      label: 'Log in',
      icon: <VsfIconPerson />,
      ariaLabel: 'Log in',
    },
  ];

  return (
    <div className="w-full h-full bg-neutral-50">
      <header className="flex justify-center w-full text-white border-0 bg-primary-700 h-14 md:h-20 border-neutral-200">
        <div className="flex items-center flex-row flex-nowrap justify-between h-full max-w-[1536px] w-full px-4 md:px-10">
          <a href="/" aria-label="VSF Homepage" className="inline-block h-8 text-white md:h-10 lg:h-7">
            <img src={brandLogo.src} alt="Vsf Logo" className="hidden lg:block w-[12.5rem] h-[1.75rem]" />
            <VsfIconVuestorefront size="xl" className="hidden md:block lg:hidden" />
            <VsfIconVuestorefront size="lg" className="block md:hidden" />
          </a>
          <VsfButton
            className="block text-white bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white font-body"
            type="button"
            slotPrefix={<VsfIconMenu />}
            variant="tertiary"
          >
            Menu
          </VsfButton>
          <nav className="flex flex-row flex-nowrap">
            {actionItems.map((actionItem) => (
              <VsfButton
                className={classNames(
                  'mr-2 -ml-0.5 text-white bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white',
                  actionItem.label === 'Log in' ? 'lg:hidden' : null,
                )}
                key={actionItem.ariaLabel}
                aria-label={actionItem.ariaLabel}
                variant="tertiary"
                slotPrefix={actionItem.icon}
                square
              />
            ))}
            <VsfButton
              className="hidden lg:inline-flex mr-2 -ml-0.5 text-white bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
              key={actionItems[2].ariaLabel}
              aria-label={actionItems[2].ariaLabel}
              variant="tertiary"
              slotPrefix={actionItems[2].icon}
            >
              Log In
            </VsfButton>
          </nav>
        </div>
      </header>
    </div>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
