import { ShowcasePageLayout } from '../../showcases';
// #region source
import {
  SfIconShoppingCart,
  SfIconFavorite,
  SfIconPerson,
  SfIconMenu,
  SfButton,
  SfDrawer,
  SfListItem,
} from '@storefront-ui/react';
import { useState } from 'react';
import classNames from 'classnames';
import brandLogo from '@assets/vsf_logo.svg';
import brandLogoSign from '@assets/vsf_logo_sign.svg';
import smartwatch from '@assets/smartwatch-2.png';

export default function OpenOnClick() {
  const [open, setOpen] = useState(false);
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
    image: smartwatch,
    title: 'Hot Deals. No sweat.',
    subtitle: 'Special offer',
    description: 'Stay connected. Stay ahead and stay stylish.',
    buttonText: 'Browse offers.',
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
      <header className="flex justify-center w-full bg-white border-b h-14 md:h-20 border-neutral-200">
        <div className="flex items-center flex-row flex-nowrap justify-start h-full max-w-[1536px] w-full px-4 md:px-10">
          <a href="/" aria-label="SF Homepage" className="inline-block text-primary-700">
            <img src={brandLogo.src} alt="Sf Logo" className="hidden lg:block mr-10 w-[12.5rem] h-[1.75rem]" />
            <img src={brandLogoSign.src} alt="Sf Logo" className="block w-8 h-8 mr-4 md:w-10 md:h-10 lg:hidden" />
          </a>
          <nav className="flex flex-row flex-nowrap">
            <ul>
              <li>
                <SfButton
                  className="block !px-2 mr-auto"
                  type="button"
                  slotPrefix={<SfIconMenu />}
                  variant="tertiary"
                  onClick={() => setOpen(true)}
                >
                  <span className="hidden md:inline-flex">Categories</span>
                </SfButton>
                <SfDrawer
                  open={open}
                  onClose={() => setOpen(false)}
                  placement="top"
                  className="flex flex-col gap-6 lg:flex-row bg-white shadow-lg p-8"
                >
                  <div className="flex flex-col gap-6 flex-1 lg:flex-row">
                    {categoriesContent.map(({ heading, items }) => (
                      <section>
                        <p className="typography-text-xs font-bold text-neutral-900 tracking-widest mb-3.5 px-4">
                          {heading}
                        </p>
                        <ul>
                          {items.map((item) => (
                            <SfListItem size="sm">
                              <a href={item.link}>{item.title}</a>
                            </SfListItem>
                          ))}
                        </ul>
                      </section>
                    ))}
                  </div>
                  <div className="flex bg-neutral-100 rounded-md border-neutral-300 justify-between overflow-hidden grow">
                    <img
                      src={bannerDetails.image.src}
                      alt={bannerDetails.title}
                      className="w-1/2 self-end object-contain"
                    />
                    <div className="flex flex-col justify-center items-start p-6 lg:p-10 max-w-1/2">
                      <p className="uppercase typography-text-xs block font-bold tracking-widest">
                        {bannerDetails.subtitle}
                      </p>
                      <h2 className="mb-4 mt-2 font-bold typography-headline-3">{bannerDetails.title}</h2>
                      <p className="typography-text-base hidden lg:block mb-4">{bannerDetails.description}</p>
                      <SfButton className="hidden lg:inline-flex">{bannerDetails.buttonText}</SfButton>
                    </div>
                  </div>
                </SfDrawer>
              </li>
            </ul>
            {actionItems.map((actionItem) => (
              <SfButton
                className={classNames(
                  'mr-2 -ml-0.5 text-primary-700 hover:bg-primary-100 active:bg-primary-200 hover:text-primary-600 active:text-primary-700',
                  actionItem.label === 'Log in' ? 'lg:hidden' : null,
                )}
                key={actionItem.ariaLabel}
                aria-label={actionItem.ariaLabel}
                variant="tertiary"
                slotPrefix={actionItem.icon}
                square
              />
            ))}
            <SfButton
              className="hidden lg:inline-flex mr-2 -ml-0.5 text-primary-700 hover:bg-primary-100 active:bg-primary-200 hover:text-primary-600 active:text-primary-700"
              key={actionItems[2].ariaLabel}
              aria-label={actionItems[2].ariaLabel}
              variant="tertiary"
              slotPrefix={actionItems[2].icon}
            >
              Log In
            </SfButton>
          </nav>
        </div>
      </header>
    </div>
  );
}

// #endregion source
OpenOnClick.getLayout = ShowcasePageLayout;
