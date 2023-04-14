import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfIconShoppingCart, SfIconFavorite, SfIconPerson, SfIconMenu, SfButton } from '@storefront-ui/react';
import brandLogo from '@assets/vsf_logo_white.svg';
import brandLogoSign from '@assets/vsf_logo_sign_white.svg';

export default function TopNavFilled() {
  const actionItems = [
    {
      icon: <SfIconShoppingCart />,
      label: '',
      ariaLabel: 'Cart',
      role: 'button',
    },
    {
      icon: <SfIconFavorite />,
      label: '',
      ariaLabel: 'Wishlist',
      role: 'button',
    },
    {
      label: 'Log in',
      icon: <SfIconPerson />,
      ariaLabel: 'Log in',
      role: 'login',
    },
  ];

  return (
    <div className="w-full h-full bg-neutral-50">
      <header className="flex justify-center w-full text-white border-0 bg-primary-700 h-14 md:h-20 border-neutral-200">
        <div className="flex items-center flex-row flex-nowrap justify-start h-full max-w-[1536px] w-full px-4 md:px-10">
          <a href="/" aria-label="SF Homepage" className="inline-block text-white">
            <picture>
              <source srcSet={brandLogo.src} media="(min-width: 767px)" />
              <img src={brandLogoSign.src} alt="Sf Logo" className="w-8 h-8 mr-4 md:w-[12.5rem] md:h-[1.75rem]" />
            </picture>
          </a>
          <SfButton
            className="block !px-2 mr-auto text-white bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white font-body"
            type="button"
            slotPrefix={<SfIconMenu />}
            variant="tertiary"
          >
            <span className="hidden md:inline-flex">Categories</span>
          </SfButton>
          <nav className="flex flex-row flex-nowrap">
            {actionItems.map((actionItem) => (
              <SfButton
                className="mr-2 -ml-0.5 text-white bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
                key={actionItem.ariaLabel}
                aria-label={actionItem.ariaLabel}
                variant="tertiary"
                slotPrefix={actionItem.icon}
                square
              >
                {actionItem.role === 'login' && <p className="hidden md:inline-flex">{actionItem.label}</p>}
              </SfButton>
            ))}
          </nav>
        </div>
      </header>
    </div>
  );
}

// #endregion source
TopNavFilled.getLayout = ShowcasePageLayout;
