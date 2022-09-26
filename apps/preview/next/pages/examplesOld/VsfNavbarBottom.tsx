import VsfNavbarBottom, { VsfNavbarBottomVariants } from '~/output/blocks/VsfNavbarBottom/VsfNavbarBottom.lite';
import Controls, { prepareControls } from '../../components/utils/Controls';

export default function VsfNavbarBottomExample() {
    const { state, controls } = prepareControls(
      [
        {
            title: 'Items',
            type: 'json',
            modelName: 'itemsModel',
            propType: '[]',
            propDefaultValue : '[]'
        },
        {
            title: 'Variant',
            type: 'select',
            modelName: 'variantModel',
            options: Object.keys(VsfNavbarBottomVariants),
            propDefaultValue: VsfNavbarBottomVariants.primary,
            propType: 'string'
        },
        {
            title: 'Absolute position',
            type: 'boolean',
            modelName: 'absolutePositionModel',
            propDefaultValue: true,
            propType: 'boolean'
        },
        {
            title: 'With labels',
            type: 'boolean',
            modelName: 'withLabelsModel',
            propDefaultValue: true,
            propType: 'boolean'
        },
        {
          title: 'basketDot',
          type: 'boolean',
          modelName: 'basketDotModel',
          propDefaultValue: true,
          propType: 'boolean'
        },
        {
          title: 'basketCounterValue',
          type: 'text',
          modelName: 'basketCounterValueModel',
          propDefaultValue: true,
          propType: 'number'
        },
        {
          title: 'favouritesDot',
          type: 'boolean',
          modelName: 'favouritesDotModel',
          propDefaultValue: true,
          propType: 'boolean'
        },
        {
          title: 'favouritesCounterValue',
          type: 'text',
          modelName: 'favouritesCounterValueModel',
          propDefaultValue: true,
          propType: 'number'
        },
      ],
      {
        withLabelsModel: true,
        variantModel: 'primary',
        absolutePositionModel: true,
        basketDotModel: false,
        basketCounterValueModel: null,
        favouritesDotModel: false,
        favouritesCounterValueModel: null,
        itemsModel: [
          {
            label: 'Home',
            tag: 'link',
            icon: 'Home',
            link: '/'
          },
          {
            label: 'Products',
            tag: 'link',
            icon: 'Menu',
            link: '/products'
          },
          {
            label: 'Search',
            tag: 'button',
            icon: 'Search',
            link: ''
          },
          {
            label: 'Cart',
            tag: 'button',
            icon: 'Basket',
            link: ''
          },
          {
            label: 'Wishlist',
            tag: 'button',
            icon: 'Favorites',
            link: ''
          }
        ],
      },
    );
    function onClickHandler(item) {
      console.log(`Clicked ${item}`)
    }
  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfNavbarBottom 
          variant={state.get.variantModel} 
          absolutePosition={state.get.absolutePositionModel} 
          items={state.get.itemsModel}
          withLabels={state.get.withLabelsModel}
          basketDot={state.get.basketDotModel}
          basketCounterValue={state.get.basketCounterValueModel}
          favouritesDot={state.get.favouritesDotModel}
          favouritesCounterValue={state.get.favouritesCounterValueModel}
          onClick={onClickHandler}
        />
      </div>
    <div className="e-page-controls">
      <Controls {...{ state, controls }} />
    </div>
  </div>
  );
} 
