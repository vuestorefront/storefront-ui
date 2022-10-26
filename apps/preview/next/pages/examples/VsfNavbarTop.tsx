import VsfNavbarTop from '@sfui/sfui/frameworks/react/components/VsfNavbarTop/VsfNavbarTop';
import VsfNavbarTopItem from '@sfui/sfui/frameworks/react/components/VsfNavbarTop/VsfNavbarTopItem';
import VsfNavbarTopActions from '@sfui/sfui/frameworks/react/components/VsfNavbarTop/VsfNavbarTopActions';
import VsfNavbarTopNavigation from '@sfui/sfui/frameworks/react/components/VsfNavbarTop/VsfNavbarTopNavigation';
import VsfNavbarTopSearch from '@sfui/sfui/frameworks/react/components/VsfNavbarTop/VsfNavbarTopSearch';
import VsfNavbarTopMenu from '@sfui/sfui/frameworks/react/components/VsfNavbarTop/VsfNavbarTopMenu';
import VsfNavbarTopLogo from '@sfui/sfui/frameworks/react/components/VsfNavbarTop/VsfNavbarTopLogo';
import VsfSearch from '@sfui/sfui/frameworks/react/components/VsfSearch';
import VsfBadge from '@sfui/sfui/frameworks/react/components/VsfBadge/VsfBadge';
import {
  VsfIconBasket,
  VsfIconFavoritesOutline,
  VsfIconPerson,
  VsfIconMenu,
  VsfIconLogoSmall,
  VsfIconLogo,
} from '@sfui/sfui/frameworks/react/components/VsfIcons';
import { VsfIconSizeEnum } from '@sfui/sfui/frameworks/react/components/VsfIcons/types';
import VsfNavbarTopListItem from '@sfui/sfui/frameworks/react/components/VsfNavbarTop/VsfNavbarTopListItem';
import Link from 'next/link';
import Controls, { prepareControls } from '../../components/utils/Controls';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'boolean',
        modelName: 'filled',
        propType: 'boolean',
      },
      {
        type: 'text',
        modelName: 'searchPlaceholder',
        propType: 'string',
      },
      {
        type: 'text',
        modelName: 'searchValue',
        propType: 'string',
      },
      {
        type: 'json',
        modelName: 'menuItems',
        propType: 'Array',
        propDefaultValue: '[]',
        description: 'VsfNavbarTopMenuItem prop',
      },
    ],
    {
      filled: true,
      searchPlaceholder: 'Search',
      searchValue: '',
      menuItems: [
        {
          label: 'Men',
          link: '/men',
        },
        {
          label: 'Women',
          link: '/women',
        },
        {
          label: 'Kids',
          link: '/women',
        },
      ],
    },
  );
  const actionItems = [
    {
      icon: (
        <VsfBadge
          bordered
          dot
          value={1}
          className={state.get.filled ? 'bg-white text-gray-900' : 'bg-secondary-600 text-white'}
        >
          <VsfIconBasket />
        </VsfBadge>
      ),
      ariaLabel: 'Cart',
    },
    {
      icon: (
        <VsfBadge
          bordered
          value={1}
          dot
          className={state.get.filled ? 'bg-white text-gray-900' : 'bg-secondary-600 text-white'}
        >
          <VsfIconFavoritesOutline />
        </VsfBadge>
      ),
      ariaLabel: 'Wishlist',
    },
    {
      label: 'Log in',
      icon: <VsfIconPerson />,
      ariaLabel: 'Log in',
    },
  ];
  function onClickHandler(itemLabel: string) {
    // eslint-disable-next-line no-console
    console.log(`${itemLabel} clicked`);
  }
  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfNavbarTop filled={state.get.filled}>
          <VsfNavbarTopLogo>
            <Link href="/">
              <a aria-label="VSF Homepage" className={state.get.filled ? 'text-white' : 'text-green-600'}>
                <VsfIconLogo view-box="0 0 205 28" className="hidden large:block !w-[12.5rem] !h-[1.75rem]" />
                <VsfIconLogoSmall size={VsfIconSizeEnum.xl} view-box="0 0 40 40" className="block large:hidden" />
              </a>
            </Link>
          </VsfNavbarTopLogo>
          <VsfNavbarTopNavigation>
            <div>
              <VsfNavbarTopMenu>
                {state.get.menuItems.map((menuItem) => (
                  <VsfNavbarTopListItem key={menuItem.label}>
                    <VsfNavbarTopItem filled={state.get.filled}>
                      <Link href={menuItem.link}>
                        <a>{menuItem.label}</a>
                      </Link>
                    </VsfNavbarTopItem>
                  </VsfNavbarTopListItem>
                ))}
              </VsfNavbarTopMenu>
              <VsfNavbarTopItem
                className="large:hidden"
                filled={state.get.filled}
                aria-label="menu button"
                onClick={() => onClickHandler('menu')}
              >
                <span className="inline-flex items-center">
                  <span>
                    <VsfIconMenu />
                  </span>
                  <span className="ml-2">Menu</span>
                </span>
              </VsfNavbarTopItem>
            </div>
          </VsfNavbarTopNavigation>
          <VsfNavbarTopSearch>
            <VsfSearch placeholder={state.get.searchPlaceholder} value={state.get.searchValue} />
          </VsfNavbarTopSearch>
          <VsfNavbarTopActions>
            {actionItems.map((actionItem) => (
              <VsfNavbarTopListItem key={actionItem.ariaLabel}>
                <VsfNavbarTopItem
                  filled={state.get.filled}
                  aria-label={actionItem.ariaLabel}
                  onClick={() => onClickHandler(actionItem.ariaLabel)}
                >
                  <span className="flex">
                    <span>{actionItem.icon}</span>
                    {actionItem.label && (
                      <span className="hidden ml-2 large:inline-flex whitespace-nowrap">{actionItem.label}</span>
                    )}
                  </span>
                </VsfNavbarTopItem>
              </VsfNavbarTopListItem>
            ))}
          </VsfNavbarTopActions>
        </VsfNavbarTop>
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}

export default Example;
