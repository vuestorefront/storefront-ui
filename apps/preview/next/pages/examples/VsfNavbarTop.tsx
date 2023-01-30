import {
  VsfSpacer,
  VsfNavbarTopAction,
  VsfNavbarTopActionGroup,
  VsfNavbarTop,
} from '@storefront-ui/react/components/VsfNavbarTop';
import { VsfSearch } from '@storefront-ui/react/components/VsfSearch';
import { VsfBadge } from '@storefront-ui/react/components/VsfBadge';
import {
  VsfIconBasket,
  VsfIconFavoritesOutline,
  VsfIconPerson,
  VsfIconMenu,
  VsfIconLogo,
  VsfIconLogoSmall,
} from '@storefront-ui/react/components/VsfIcons';
import Link from 'next/link';
import { VsfIconSize } from '@storefront-ui/react/components/VsfIconBase/types';
import classNames from 'classnames';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        type: 'boolean',
        modelName: 'filled',
        propType: 'boolean',
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
      filled: false,
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
      icon: <VsfIconBasket />,
      ariaLabel: 'Cart',
    },
    {
      icon: <VsfIconFavoritesOutline />,
      ariaLabel: 'Wishlist',
    },
    {
      label: 'Log in',
      icon: <VsfIconPerson />,
      ariaLabel: 'Log in',
    },
  ];

  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfNavbarTop filled={state.get.filled}>
        <Link href="/">
          <a
            aria-label="VSF Homepage"
            className={classNames(
              'inline-block h-8 text-white md:h-10 lg:h-7',
              state.get.filled ? 'text-white' : 'text-brand',
            )}
          >
            <VsfIconLogo viewBox="0 0 205 28" className="!hidden large:!block !w-[12.5rem] !h-[1.75rem]" />
            <VsfIconLogoSmall
              size={VsfIconSize.xl}
              viewBox="0 0 40 40"
              className="!hidden medium:!block large:!hidden"
            />
            <VsfIconLogoSmall size={VsfIconSize.lg} viewBox="0 0 40 40" className="block medium:!hidden" />
          </a>
        </Link>
        <VsfNavbarTopActionGroup className="hidden lg:block">
          {state.get.menuItems.map((menuItem) => (
            <Link href={menuItem.link} key={menuItem.label}>
              <VsfNavbarTopAction tag="a">{menuItem.label}</VsfNavbarTopAction>
            </Link>
          ))}
        </VsfNavbarTopActionGroup>
        <VsfNavbarTopAction tag="a" slotIcon={<VsfIconMenu />} className="block lg:hidden">
          Menu
        </VsfNavbarTopAction>
        <VsfSpacer className="block md:hidden" />
        <VsfSearch placeholder="Search" className="flex-1 hidden md:block" />
        <VsfNavbarTopActionGroup>
          {actionItems.map((actionItem) =>
            actionItem.label !== 'Log in' ? (
              <VsfNavbarTopAction key={actionItem.ariaLabel} icon ariaLabel={actionItem.ariaLabel}>
                <VsfBadge dot value={1} className={state.get.filled ? 'bg-white' : 'bg-secondary-500'}>
                  {actionItem.icon}
                </VsfBadge>
              </VsfNavbarTopAction>
            ) : (
              <VsfNavbarTopAction key={actionItem.ariaLabel} icon ariaLabel={actionItem.ariaLabel}>
                {actionItem.icon}
              </VsfNavbarTopAction>
            ),
          )}
        </VsfNavbarTopActionGroup>
      </VsfNavbarTop>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
