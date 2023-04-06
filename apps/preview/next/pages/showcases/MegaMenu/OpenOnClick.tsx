import { ShowcasePageLayout } from '../../showcases';
// #region source
import {
  SfIconShoppingCart,
  SfIconFavorite,
  SfIconPerson,
  SfIconMenu,
  SfIconChevronRight,
  SfIconClose,
  SfButton,
  SfDrawer,
  SfListItem,
} from '@storefront-ui/react';
import { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';
import brandLogo from '@assets/vsf_logo_white.svg';
import brandLogoSign from '@assets/vsf_logo_sign_white.svg';
import sneakers from '@assets/sneakers-2.png';

export default function OpenOnClick() {
  const [open, setOpen] = useState(false);
  const nodeRef = useRef(null);
  const actionItems = [
    {
      icon: <SfIconShoppingCart />,
      ariaLabel: 'Cart',
    },
    {
      icon: <SfIconFavorite />,
      ariaLabel: 'Wishlist',
    },
    {
      label: 'Log in',
      icon: <SfIconPerson />,
      ariaLabel: 'Log in',
    },
  ];

  const bannerDetails = {
    image: sneakers,
    title: 'Hot Deals. No sweat.',
  };

  const categoriesContent = [
    {
      heading: 'Activities',
      items: [
        {
          title: 'Fitness',
          link: '/',
        },
        {
          title: 'Pilates',
          link: '/',
        },
        {
          title: 'Training',
          link: '/',
        },
        {
          title: 'Cardio workout',
          link: '/',
        },
        {
          title: 'Yoga',
          link: '/',
        },
        {
          title: 'All activities',
          link: '/',
        },
      ],
    },
    {
      heading: 'Categories',
      items: [
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
        {
          title: 'All categories',
          link: '/',
        },
      ],
    },
    {
      heading: 'Womens Deals',
      items: [
        {
          title: 'Fitness Gear',
          link: '/',
        },
        {
          title: 'Outlet',
          link: '/',
        },
        {
          title: 'All Womens Deals',
          link: '/',
        },
      ],
    },
  ];

  return (
    <div className="w-full h-full">
      {open && <div className="fixed inset-0 bg-neutral-500 bg-opacity-50 transition-opacity" />}
      <header className="flex justify-center w-full border-0 bg-primary-700 border-neutral-200 h-14 md:relative md:h-20 md:z-10">
        <div className="flex items-center flex-nowrap justify-start h-full max-w-[1536px] w-full px-4 md:px-10">
          <a href="/" aria-label="SF Homepage" className="inline-block text-white mr-2 lg:mr-10">
            <img src={brandLogo.src} alt="Sf Logo" className="hidden lg:block mr-10 w-[12.5rem] h-[1.75rem]" />
            <img src={brandLogoSign.src} alt="Sf Logo" className="hidden w-10 h-10 mr-4 md:block lg:hidden" />
            <img src={brandLogoSign.src} alt="Sf Logo" className="block w-8 h-8 mr-4 min-w-8 md:hidden" />
          </a>
          <nav className="flex w-full justify-between flex-nowrap" aria-label="SF Navigation">
            <ul role="menubar">
              <li role="none">
                <SfButton
                  className="block !px-2 mr-auto text-white font-body bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
                  type="button"
                  role="menuitem"
                  aria-haspopup="true"
                  aria-expanded={open}
                  slotSuffix={
                    <>
                      <SfIconChevronRight className="hidden rotate-90 md:inline-flex" />
                      <SfIconMenu className="inline-flex md:hidden" />
                    </>
                  }
                  variant="tertiary"
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  <span className="hidden md:inline-flex">Categories</span>
                </SfButton>
                <CSSTransition
                  ref={nodeRef}
                  in={open}
                  timeout={500}
                  unmountOnExit
                  classNames={{
                    enter: '-translate-x-full md:translate-y-0 md:translate-x-0',
                    enterActive: 'translate-x-0 md:translate-y-0 transition duration-500 ease-in-out',
                    exitDone: 'translate-x-0',
                    exitActive: '-translate-x-full transition duration-500 ease-in-out',
                  }}
                >
                  <SfDrawer
                    open={open}
                    onClose={() => setOpen(false)}
                    placement="top"
                    className="grid grid-cols-1 gap-6 md:grid-cols-4 bg-white max-w-xs shadow-lg p-0 !fixed md:!absolute md:!top-[5rem] md:max-w-full md:p-8"
                  >
                    <div className="flex items-center justify-between p-4 bg-primary-700 md:hidden">
                      <div className="flex items-center typography-text-lg font-medium text-white">Categories</div>
                      <SfButton
                        square
                        variant="tertiary"
                        aria-label="Close drawer"
                        onClick={() => {
                          setOpen(!open);
                        }}
                        className="text-white"
                      >
                        <SfIconClose />
                      </SfButton>
                    </div>
                    {categoriesContent.map(({ heading, items }) => (
                      <section className="flex-1/4" key={heading}>
                        <h2 className="typography-text-xs font-bold text-neutral-900 tracking-widest whitespace-nowrap px-4 py-2">
                          {heading}
                        </h2>
                        <hr className="mb-3.5" />
                        <ul role="menu">
                          {items.map((item) => (
                            <SfListItem size="sm" role="none" key={item.title}>
                              <a
                                role="menuitem"
                                className="focus-visible:outline focus-visible:outline-offset focus-visible:rounded-sm"
                                href={item.link}
                              >
                                {item.title}
                              </a>
                            </SfListItem>
                          ))}
                        </ul>
                      </section>
                    ))}
                    <div className="flex flex-col items-center justify-center bg-neutral-100 rounded-md border-neutral-300 overflow-hidden grow">
                      <img src={bannerDetails.image.src} alt={bannerDetails.title} className="object-contain" />
                      <p className="mb-4 mt-4 px-4 text-center typography-text-base font-medium">
                        {bannerDetails.title}
                      </p>
                    </div>
                    <SfButton
                      square
                      size="sm"
                      variant="tertiary"
                      aria-label="Close drawer"
                      onClick={() => {
                        setOpen(!open);
                      }}
                      className="hidden md:block md:absolute md:right-0 hover:bg-white active:bg-white"
                    >
                      <SfIconClose className="text-neutral-500" />
                    </SfButton>
                  </SfDrawer>
                </CSSTransition>
              </li>
            </ul>
            <div>
              {actionItems.map((actionItem) => (
                <SfButton
                  className={classNames(
                    'mr-2 -ml-0.5 text-white bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white',
                    actionItem.label === 'Log in' ? 'md:hidden' : null,
                  )}
                  key={actionItem.ariaLabel}
                  aria-label={actionItem.ariaLabel}
                  variant="tertiary"
                  slotPrefix={actionItem.icon}
                  square
                />
              ))}
              <SfButton
                className="hidden md:inline-flex mr-2 -ml-0.5 text-white bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
                key={actionItems[2].ariaLabel}
                aria-label={actionItems[2].ariaLabel}
                variant="tertiary"
                slotPrefix={actionItems[2].icon}
              >
                Log In
              </SfButton>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}

// #endregion source
OpenOnClick.getLayout = ShowcasePageLayout;
