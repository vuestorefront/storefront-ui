import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfIconShoppingCart, SfIconFavorite, SfIconPerson, SfIconExpandMore, SfButton } from '@storefront-ui/react';
import brandLogo from '@assets/vsf_logo.svg';
import brandLogoSign from '@assets/vsf_logo_sign.svg';

export default function TopNav() {
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
      <header className="flex justify-center w-full bg-white border-b h-14 md:h-20 border-neutral-200">
        <div className="flex items-center flex-row flex-nowrap justify-start h-full max-w-[1536px] w-full px-4 md:px-10">
          <a
            href="/"
            aria-label="SF Homepage"
            className="inline-block mr-2 md:mr-10 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
          >
            <picture>
              <source srcSet={brandLogo.src} media="(min-width: 1024px)" />
              <img src={brandLogoSign.src} alt="Sf Logo" className="w-8 h-8 lg:w-[12.5rem] lg:h-[1.75rem]" />
            </picture>
          </a>
          <SfButton className="block mr-auto" type="button" slotSuffix={<SfIconExpandMore />} variant="tertiary">
            <span className="hidden md:inline-flex">Browse products</span>
          </SfButton>
          <nav className="flex flex-row flex-nowrap">
            {actionItems.map((actionItem) => (
              <SfButton
                className="mr-2 -ml-0.5 text-primary-700 hover:bg-primary-100 active:bg-primary-200 hover:text-primary-600 active:text-primary-700"
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
TopNav.getLayout = ShowcasePageLayout;
