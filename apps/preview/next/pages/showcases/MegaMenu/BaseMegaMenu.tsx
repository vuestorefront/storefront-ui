import { ShowcasePageLayout } from '../../showcases';
// #region source
import {
  SfIconShoppingCart,
  SfIconFavorite,
  SfIconPerson,
  SfIconExpandMore,
  SfIconClose,
  SfButton,
  SfDrawer,
  SfListItem,
  useDisclosure,
  useTrapFocus,
} from '@storefront-ui/react';
import { useRef } from 'react';
import { useClickAway } from 'react-use';
import { CSSTransition } from 'react-transition-group';
import brandLogo from '@assets/vsf_logo_white.svg';
import brandLogoSign from '@assets/vsf_logo_sign_white.svg';
import watch from '@assets/watch.png';

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
    icon: <SfIconPerson />,
    label: 'Log in',
    ariaLabel: 'Log in',
    role: 'login',
  },
];

const bannerDetails = {
  image: watch,
  title: 'New in designer watches',
};

const categoriesContent = [
  {
    heading: 'Women',
    items: [
      {
        title: "All Women's",
        link: '/',
      },
      {
        title: 'Clothing',
        link: '/',
      },
      {
        title: 'Shoes',
        link: '/',
      },
      {
        title: 'Accessories',
        link: '/',
      },
      {
        title: 'Wearables',
        link: '/',
      },
      {
        title: 'Food & Drinks',
        link: '/',
      },
    ],
  },
  {
    heading: 'Men',
    items: [
      {
        title: 'All Men’s',
        link: '/',
      },
      {
        title: 'Clothing',
        link: '/',
      },
      {
        title: 'Shoes',
        link: '/',
      },
      {
        title: 'Accessories',
        link: '/',
      },
      {
        title: 'Wearables',
        link: '/',
      },
      {
        title: 'Food & Drinks',
        link: '/',
      },
    ],
  },
  {
    heading: 'Kids',
    items: [
      {
        title: 'All Kids',
        link: '/',
      },
      {
        title: 'Clothing',
        link: '/',
      },
      {
        title: 'Shoes',
        link: '/',
      },
      {
        title: 'Accessories',
        link: '/',
      },
      {
        title: 'Wearables',
        link: '/',
      },
      {
        title: 'Food & Drinks',
        link: '/',
      },
    ],
  },
];

export default function BaseMegaMenu() {
  const { close, toggle, isOpen } = useDisclosure({ initialValue: false });
  const drawerRef = useRef(null);
  const menuRef = useRef(null);
  useTrapFocus(drawerRef, { activeState: isOpen, arrowKeysOn: true });
  useClickAway(menuRef, () => {
    close();
  });

  return (
    <div className="w-full h-full">
      {isOpen && <div className="fixed inset-0 bg-neutral-500 bg-opacity-50 transition-opacity" />}
      <header
        ref={menuRef}
        className="flex justify-center w-full border-0 bg-primary-700 border-neutral-200 h-14 md:relative md:h-20 md:z-10"
      >
        <div className="flex items-center flex-nowrap justify-start h-full max-w-[1536px] w-full px-4 md:px-10">
          <a
            href="/"
            aria-label="SF Homepage"
            className="inline-block mr-2 text-white md:mr-10 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
          >
            <picture>
              <source srcSet={brandLogo.src} media="(min-width: 1024px)" />
              <img src={brandLogoSign.src} alt="Sf Logo" className="w-8 h-8 lg:w-[12.5rem] lg:h-[1.75rem]" />
            </picture>
          </a>
          <nav className="flex justify-between w-full flex-nowrap" aria-label="SF Navigation">
            <ul>
              <li role="none">
                <SfButton
                  className="block mr-auto text-white bg-transparent font-body hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={isOpen}
                  slotSuffix={<SfIconExpandMore />}
                  variant="tertiary"
                  onClick={toggle}
                >
                  <span className="hidden md:inline-flex">Browse products</span>
                </SfButton>
                <CSSTransition
                  in={isOpen}
                  timeout={500}
                  unmountOnExit
                  classNames={{
                    enter: '-translate-x-full md:opacity-0 md:translate-x-0',
                    enterActive: 'translate-x-0 md:opacity-100 transition duration-500 ease-in-out',
                    exitActive: '-translate-x-full md:opacity-0 md:translate-x-0 transition duration-500 ease-in-out',
                  }}
                >
                  <SfDrawer
                    ref={drawerRef}
                    open
                    disableClickAway
                    placement="top"
                    className="grid grid-cols-1 md:gap-x-6 md:grid-cols-4 bg-white max-w-xs shadow-lg p-0 !fixed max-h-screen overflow-y-auto md:!absolute md:!top-[5rem] md:max-w-full md:p-6"
                  >
                    <div className="flex items-center justify-between px-4 py-2 bg-primary-700 md:hidden">
                      <div className="flex items-center font-medium text-white typography-text-lg">Browse products</div>
                      <SfButton
                        square
                        variant="tertiary"
                        aria-label="Close navigation menu"
                        onClick={close}
                        className="text-white"
                      >
                        <SfIconClose />
                      </SfButton>
                    </div>
                    {categoriesContent.map(({ heading, items }) => (
                      <div key={heading} className="[&:nth-child(2)]:pt-0 pt-6 md:pt-0">
                        <h2
                          role="presentation"
                          className="typography-text-base font-medium text-neutral-900 whitespace-nowrap p-4 md:py-1.5"
                        >
                          {heading}
                        </h2>
                        <hr className="mb-3.5" />
                        <ul>
                          {items.map((item) => (
                            <li key={item.title}>
                              <SfListItem
                                as="a"
                                size="sm"
                                role="none"
                                href={item.link}
                                className="typography-text-base md:typography-text-sm py-4 md:py-1.5"
                              >
                                {item.title}
                              </SfListItem>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <div className="flex flex-col items-center justify-center overflow-hidden md:rounded-md bg-neutral-100 border-neutral-300 grow">
                      <img src={bannerDetails.image.src} alt={bannerDetails.title} className="object-contain" />
                      <p className="px-4 mt-4 mb-4 font-medium text-center typography-text-base">
                        {bannerDetails.title}
                      </p>
                    </div>
                    <SfButton
                      square
                      size="sm"
                      variant="tertiary"
                      aria-label="Close navigation menu"
                      onClick={close}
                      className="hidden md:block md:absolute md:right-0 hover:bg-white active:bg-white"
                    >
                      <SfIconClose className="text-neutral-500" />
                    </SfButton>
                  </SfDrawer>
                </CSSTransition>
              </li>
            </ul>
            <div className="flex flex-nowrap">
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
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

// #endregion source
BaseMegaMenu.getLayout = ShowcasePageLayout;
