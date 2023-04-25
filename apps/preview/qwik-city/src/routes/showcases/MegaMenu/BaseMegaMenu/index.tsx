import { component$, useSignal } from '@builder.io/qwik';
import {
  SfButton,
  SfDrawer,
  SfIconChevronRight,
  SfIconClose,
  SfIconFavorite,
  SfIconMenu,
  SfIconPerson,
  SfIconShoppingCart,
  SfListItem,
} from '@storefront-ui/qwik';

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
  image: '/images/watch.png',
  title: 'New in designer watches.',
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

//TODO it doesn't work
export default component$(() => {
  const drawerRef = useSignal<Element>();
  const menuRef = useSignal<Element>();
  const isOpenSignal = useSignal(false);

  // TODO these APIs are missing
  // const { close, toggle, isOpen } = useDisclosure({ initialValue: false });
  // useTrapFocus(drawerRef, { activeState: isOpen, arrowKeysOn: true });
  // useClickAway(menuRef, () => {
  //   close();
  // });

  return (
    <div class="w-full h-full">
      {isOpenSignal.value && <div class="fixed inset-0 bg-neutral-500 bg-opacity-50 transition-opacity" />}
      <header
        ref={menuRef}
        class="flex justify-center w-full border-0 bg-primary-700 border-neutral-200 h-14 md:relative md:h-20 md:z-10"
      >
        <div class="flex items-center flex-nowrap justify-start h-full max-w-[1536px] w-full px-4 md:px-10">
          <a href="/" aria-label="SF Homepage" class="inline-block text-white mr-2 lg:mr-10">
            <picture>
              <source srcSet={'/images/vsf_logo_white.svg'} media="(min-width: 767px)" />
              <img
                src={'/images/vsf_logo_sign_white'}
                alt="Sf Logo"
                class="w-8 h-8 mr-4 md:w-[12.5rem] md:h-[1.75rem]"
              />
            </picture>
          </a>
          <nav class="flex w-full justify-between flex-nowrap" aria-label="SF Navigation">
            <ul>
              <li role="none">
                <SfButton
                  class="block !px-2 mr-auto text-white font-body bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={isOpenSignal.value}
                  variant="tertiary"
                  onClick$={() => {
                    isOpenSignal.value = !isOpenSignal.value;
                  }}
                >
                  <div q:slot="suffix">
                    <>
                      <SfIconChevronRight class="hidden rotate-90 md:inline-flex" />
                      <SfIconMenu class="inline-flex md:hidden" />
                    </>
                  </div>
                  <span class="hidden md:inline-flex">Browse products</span>
                </SfButton>
                <transition
                  enter-active-class="transform transition duration-500 ease-in-out"
                  leave-active-class="transform transition duration-500 ease-in-out"
                  enter-from-class="-translate-x-full md:translate-x-0 md:opacity-0"
                  enter-to-class="translate-x-0 md:translate-x-0 md:opacity-100"
                  leave-from-class="translate-x-0 md:opacity-100"
                  leave-to-class="-translate-x-full md:translate-x-0 md:opacity-0"
                >
                  <SfDrawer
                    ref={drawerRef}
                    open
                    disableClickAway
                    placement="top"
                    class="grid grid-cols-1 gap-6 md:grid-cols-4 bg-white max-w-xs shadow-lg p-0 !fixed max-h-screen overflow-y-auto md:!absolute md:!top-[5rem] md:max-w-full md:p-8"
                  >
                    <div class="flex items-center justify-between py-2 px-4 bg-primary-700 md:hidden">
                      <div class="flex items-center typography-text-lg font-medium text-white">Browse products</div>
                      <SfButton
                        square
                        variant="tertiary"
                        aria-label="Close navigation menu"
                        onClick$={() => {
                          isOpenSignal.value = false;
                        }}
                        class="text-white"
                      >
                        <SfIconClose />
                      </SfButton>
                    </div>
                    {categoriesContent.map(({ heading, items }) => (
                      <div key={heading}>
                        <h2
                          role="presentation"
                          class="typography-text-xs font-bold text-neutral-900 tracking-widest whitespace-nowrap px-4 py-2"
                        >
                          {heading}
                        </h2>
                        <hr class="mb-3.5" />
                        <ul>
                          {items.map((item) => (
                            <li key={item.title}>
                              <SfListItem as="a" size="sm" role="none" href={item.link}>
                                {item.title}
                              </SfListItem>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    <div class="flex flex-col items-center justify-center bg-neutral-100 rounded-md border-neutral-300 overflow-hidden grow">
                      <img src={bannerDetails.image} alt={bannerDetails.title} class="object-contain" />
                      <p class="mb-4 mt-4 px-4 text-center typography-text-base font-medium">{bannerDetails.title}</p>
                    </div>
                    <SfButton
                      square
                      size="sm"
                      variant="tertiary"
                      aria-label="Close navigation menu"
                      onClick$={() => {
                        isOpenSignal.value = false;
                      }}
                      class="hidden md:block md:absolute md:right-0 hover:bg-white active:bg-white"
                    >
                      <SfIconClose class="text-neutral-500" />
                    </SfButton>
                  </SfDrawer>
                </transition>
              </li>
            </ul>
            <div class="flex flex-nowrap">
              {actionItems.map((actionItem) => (
                <SfButton
                  class="mr-2 -ml-0.5 text-white bg-transparent hover:bg-primary-800 hover:text-white active:bg-primary-900 active:text-white"
                  key={actionItem.ariaLabel}
                  aria-label={actionItem.ariaLabel}
                  variant="tertiary"
                  square
                >
                  <div q:slot="prefix">{actionItem.icon}</div>
                  {actionItem.role === 'login' && <p class="hidden md:inline-flex">{actionItem.label}</p>}
                </SfButton>
              ))}
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
});
