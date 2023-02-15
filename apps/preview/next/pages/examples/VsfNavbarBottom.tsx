import { VsfNavbarBottom, VsfNavbarBottomItem } from '@storefront-ui/react/components/VsfNavbarBottom';
import { VsfBadge } from '@storefront-ui/react/components/VsfBadge';
import {
  VsfIconHome,
  VsfIconShoppingCart,
  VsfIconSearch,
  VsfIconMenu,
  VsfIconFavorite,
} from '@storefront-ui/react/components/VsfIcons';
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
        type: 'boolean',
        modelName: 'absolute',
        propType: 'boolean',
      },
      {
        type: 'boolean',
        modelName: 'hideLabels',
        propType: 'boolean',
      },
      {
        type: 'text',
        modelName: 'link',
        propType: 'string',
        description:
          'When provided, will render as "anchor" element. Link of VsfNavbarBottomItem for "search" button only, rest shows active state possibility',
      },
    ],
    {
      hideLabels: undefined,
      filled: undefined,
      absolute: undefined,
      link: '',
      active: '',
    },
  );
  function onClickHandler(itemLabel: string) {
    state.set({ ...state.get, active: itemLabel });
  }
  const items = [
    {
      label: 'Home',
      icon: <VsfIconHome />,
    },
    {
      label: 'Products',
      icon: <VsfIconMenu />,
    },
    {
      label: 'Search',
      icon: <VsfIconSearch />,
      link: state.get.link,
    },
    {
      label: 'Cart',
      icon: (
        <VsfBadge
          bordered
          value={10}
          className={state.get.filled ? 'bg-white text-gray-900' : 'bg-secondary-600 text-white'}
        >
          <VsfIconShoppingCart />
        </VsfBadge>
      ),
    },
    {
      label: 'Wishlist',
      icon: (
        <VsfBadge
          bordered
          value={10}
          dot
          className={state.get.filled ? 'bg-white text-gray-900' : 'bg-secondary-600 text-white'}
        >
          <VsfIconFavorite />
        </VsfBadge>
      ),
    },
  ];
  return (
    <ComponentExample controls={{ state, controls }}>
      <div className="relative h-20 m-10 border border-primary-400">
        <p>
          Navbar will render in this container when prop <code>absolute=true</code>
        </p>
        <VsfNavbarBottom hideLabels={state.get.hideLabels} absolute={state.get.absolute} filled={state.get.filled}>
          {items.map((item) => (
            <VsfNavbarBottomItem
              key={item.label}
              slotIcon={item.icon}
              label={item.label}
              link={item?.link}
              active={state.get.active === item.label}
              onClick={() => onClickHandler(item.label)}
            />
          ))}
        </VsfNavbarBottom>
      </div>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
