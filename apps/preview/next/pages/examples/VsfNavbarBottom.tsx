import { VsfNavbarBottom, VsfNavbarBottomItem } from '@storefront-ui/react/components/VsfNavbarBottom';
import { VsfBadge } from '@storefront-ui/react/components/VsfBadge';
import {
  VsfIconHome,
  VsfIconBasket,
  VsfIconSearch,
  VsfIconMenu,
  VsfIconFavoritesOutline,
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
    ],
    {
      hideLabels: false,
      filled: false,
      absolute: false,
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
    },
    {
      label: 'Cart',
      icon: (
        <VsfBadge
          bordered
          value={10}
          className={state.get.filled ? 'bg-white text-gray-900' : 'bg-secondary-600 text-white'}
        >
          <VsfIconBasket />
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
          <VsfIconFavoritesOutline />
        </VsfBadge>
      ),
    },
  ];
  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfNavbarBottom hideLabels={state.get.hideLabels} absolute={state.get.absolute} filled={state.get.filled}>
        {items.map((item) => (
          <VsfNavbarBottomItem
            key={item.label}
            slotIcon={item.icon}
            label={item.label}
            active={state.get.active === item.label}
            onClick={() => onClickHandler(item.label)}
          />
        ))}
      </VsfNavbarBottom>
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
