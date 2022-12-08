import VsfNavbarTop from '@sfui/sfui/frameworks/react/components/VsfNavbarTop/VsfNavbarTop';
import VsfNavbarTopActionGroup from '@sfui/sfui/frameworks/react/components/VsfNavbarTop/VsfNavbarTopActionGroup';
import VsfNavbarTopAction from '@sfui/sfui/frameworks/react/components/VsfNavbarTop/VsfNavbarTopAction';
import VsfSpacer from '@sfui/sfui/frameworks/react/components/VsfNavbarTop/VsfSpacer';
import VsfSearch from '@sfui/sfui/frameworks/react/components/VsfSearch';
import VsfBadge from '@sfui/sfui/frameworks/react/components/VsfBadge';
import {
  VsfIconBasket,
  VsfIconFavoritesOutline,
  VsfIconPerson,
  VsfIconMenu,
  VsfIconLogo,
  VsfIconLogoSmall,
} from '@sfui/sfui/frameworks/react/components/VsfIcons';
import Link from 'next/link';
import { VsfIconSizeEnum } from '@sfui/sfui/frameworks/react/components/VsfIconBase/types';
import classNames from 'classnames';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';

// eslint-disable-next-line react/require-default-props
function VsfLogo() {
  return (
    <>
      <VsfIconLogo viewBox="0 0 205 28" class="!hidden large:!block !w-[12.5rem] !h-[1.75rem]" />
      <VsfIconLogoSmall size={VsfIconSizeEnum.xl} viewBox="0 0 40 40" class="!hidden medium:!block large:!hidden" />
      <VsfIconLogoSmall size={VsfIconSizeEnum.lg} viewBox="0 0 40 40" class="block medium:!hidden" />
    </>
  );
}
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
    <div className="e-page">
      <div className="e-page-component">
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
                size={VsfIconSizeEnum.xl}
                viewBox="0 0 40 40"
                className="!hidden medium:!block large:!hidden"
              />
              <VsfIconLogoSmall size={VsfIconSizeEnum.lg} viewBox="0 0 40 40" className="block medium:!hidden" />
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
                <VsfNavbarTopAction key={actionItem.ariaLabel} icon>
                  <VsfBadge dot value={1} className={state.get.filled ? 'bg-white' : 'bg-secondary-500'}>
                    {actionItem.icon}
                  </VsfBadge>
                </VsfNavbarTopAction>
              ) : (
                <VsfNavbarTopAction key={actionItem.ariaLabel} icon>
                  {actionItem.icon}
                </VsfNavbarTopAction>
              ),
            )}
          </VsfNavbarTopActionGroup>
        </VsfNavbarTop>
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
