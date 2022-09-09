import VsfProductCardVertical, { VsfProductCardVerticalSizes } from '../../output/blocks/VsfProductCardVertical/VsfProductCardVertical.lite';
import Controls, { prepareControls } from '../../components/utils/Controls';
import productImage from '../../images/product-card.webp';
import VsfTag from '../../output/blocks/VsfTag/VsfTag';
import VsfIconHot from '../../output/blocks/VsfIcons/VsfIconHot.lite';

export default function VsfProductCardVerticalExample() {
  const { state, controls } = prepareControls(
    [
      {
        title: 'Image',
        type: 'text',
        propType: "string",
        modelName: 'imageModel',
      },
      {
        title: 'Alt',
        type: 'text',
        propType: "string",
        modelName: 'altModel',
      },
      {
        title: 'Label',
        type: 'text',
        propType: "string",
        modelName: 'labelModel',
      },
      {
        title: 'Price',
        type: 'text',
        propType: "string",
        modelName: 'priceModel',
      },
      {
        title: 'Old Price',
        type: 'text',
        propType: "string",
        modelName: 'oldPriceModel',
      },
      {
        title: 'size',
        type: 'select',
        modelName: 'sizeModel',
        options: Object.keys(VsfProductCardVerticalSizes),
        propDefaultValue: VsfProductCardVerticalSizes.base,
        propType: 'string',
      },
      {
        title: 'Link',
        type: 'text',
        propType: "string",
        modelName: 'linkModel',
      },
      {
        title: 'description',
        type: 'text',
        propType: "string",
        modelName: 'descriptionModel',
      },
      {
        title: 'In cart',
        type: 'text',
        propType: "number",
        modelName: 'inCartModel',
      },
      {
        title: 'Add to cart label',
        type: 'text',
        propType: "string",
        modelName: 'addToCartLabelModel',
      },
      {
        title: 'See similar label',
        type: 'text',
        propType: "string",
        modelName: 'seeSimilarLabelModel',
      },
      {
        title: 'Out of stock',
        type: 'boolean',
        propType: "boolean",
        modelName: 'outOfStockModel',
      },
      {
        title: 'With button',
        type: 'boolean',
        propType: "boolean",
        modelName: 'withButtonModel',
      },
    ],
    {
      imageModel: productImage,
      altModel: 'Product image',
      labelModel: 'The standard chunk of Lorem Ipsum',
      priceModel: '$2,345.99',
      oldPriceModel: '$3,132.99',
      sizeModel: 'base',
      linkModel: '/',
      outOfStockModel: false,
      inCartModel: 0,
      descriptionModel: 'There are many variations of passages of Lorem Ipsum available',
      ratingValueModel: 0,
      maxRatingValueModel: 5,
      reviewsModel: 0,
      withButtonModel: true,
      addToCartLabelModel: 'Add',
      seeSimilarLabelModel: 'See similar',
    },
  );
  function handleAddToCart() {
    console.log('Added to cart!')
  };
  function handleAddToWishlist() {
    console.log('Added to wishlist!')
  };
  function handleSeeSimilar() {
    console.log('See similar clicked!')
  };
  return (
    <div className="e-page">
      <div className="e-page-component">
        <VsfProductCardVertical 
          image={state.get.imageModel}
          alt={state.get.altModel}
          label={state.get.labelModel}
          price={state.get.priceModel}
          oldPrice={state.get.oldPriceModel}
          size={state.get.sizeModel}
          link={state.get.linkModel}
          outOfStock={state.get.outOfStockModel}
          inCart={state.get.inCartModel}
          description={state.get.descriptionModel}
          ratingValue={state.get.ratingValueModel}
          maxRatingValue={state.get.maxRatingValueModel}
          reviews={state.get.reviewsModel}
          withButton={state.get.withButtonModel}
          seeSimilar={state.get.seeSimilarLabelModel}
          addToCartLabel={state.get.addToCartLabelModel}
          handleAddToCart={handleAddToCart}
          handleAddToWishlist={handleAddToWishlist}
          handleSeeSimilar={handleSeeSimilar}
          slotBadge={<VsfTag
            badge={true}
            size={state.get.sizeModel === 'lg' || state.get.sizeModel === 'base' ? 'base' : 'sm'}
            variant='info'
          >
            <VsfIconHot
              size={state.get.sizeModel === 'lg' || state.get.sizeModel === 'base' ? 'base' : 'xs'}
            />
            <span>
              -30%
            </span>
          </VsfTag>}
        />
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}
