import VsfNavbarBottom, { VsfNavbarBottomItem } from '@sfui/sfui/frameworks/react/components/VsfNavbarBottom';
import {
  VsfIconHome,
  VsfIconBasket,
  VsfIconSearch,
  VsfIconMenu,
  VsfIconFavoritesOutline,
} from '@sfui/sfui/frameworks/react/components/VsfIcons';
import Controls, { prepareControls } from '../../components/utils/Controls';
import { ExamplePageLayout } from '../examples';

function Example() {
  const { state, controls } = prepareControls(
    [
      {
        title: 'Filled',
        type: 'boolean',
        modelName: 'filledModel',
        propType: 'boolean',
      },
      {
        title: 'Absolute',
        type: 'boolean',
        modelName: 'absoluteModel',
        propType: 'boolean',
      },
      {
        title: 'Hide labels',
        type: 'boolean',
        modelName: 'hideLabelsModel',
        propType: 'boolean',
      },
      {
        title: 'Badge',
        type: 'text',
        modelName: 'badgeModel',
        propType: 'text',
      },
      {
        title: 'Dot Badge',
        type: 'boolean',
        modelName: 'dotBadgeModel',
        propType: 'boolean',
      },
    ],
    {
      hideLabelsModel: false,
      filledModel: false,
      absoluteModel: false,
      activeModel: 'Home',
      badgeModel: '',
      dotBadgeModel: false,
    },
  );
  function onClickHandler(itemLabel: string) {
    state.set({ ...state.get, activeModel: itemLabel });
  }
  const items = [
    {
      label: 'Home',
      icon: VsfIconHome,
    },
    {
      label: 'Products',
      icon: VsfIconMenu,
    },
    {
      label: 'Search',
      icon: VsfIconSearch,
    },
    {
      label: 'Cart',
      icon: VsfIconBasket,
    },
    {
      label: 'Wishlist',
      icon: VsfIconFavoritesOutline,
    },
  ];
  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfNavbarBottom
          hideLabels={state.get.hideLabelsModel}
          absolute={state.get.absoluteModel}
          filled={state.get.filledModel}
        >
          {items.map((item) => (
            <VsfNavbarBottomItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              active={state.get.activeModel === item.label}
              onClick={() => onClickHandler(item.label)}
              badge={state.get.badgeModel}
              dotBadge={state.get.dotBadgeModel}
            />
          ))}
        </VsfNavbarBottom>
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
