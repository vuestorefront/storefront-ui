import classNames from 'classnames';
import { VsfProductCard, VsfProductCardImage } from '@storefront-ui/react/components/VsfProductCard';
import { VsfProductCardSize } from '@storefront-ui/react/components/VsfProductCard/types';
import type {
  VsfProductCardProps,
  VsfProductCardImageProps,
} from '@storefront-ui/react/components/VsfProductCard/types';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { VsfButtonProps } from '@storefront-ui/react/components/VsfButton/types';
import { prepareControls } from '../../components/utils/Controls';
import ComponentExample from '../../components/utils/ComponentExample';
import { ExamplePageLayout } from '../examples';
import productImage from '../fixture/product-card.webp';

function Example() {
  enum LinkTagTypes {
    a = 'a',
    NextLink = 'NextLink',
  }
  type ControlTypes = VsfProductCardProps & {
    linkTag: LinkTagTypes;
  };
  const { state, controls } = prepareControls<ControlTypes & VsfProductCardImageProps>(
    [
      {
        type: 'text',
        propType: 'string',
        modelName: 'imageSrc',
      },
      {
        type: 'json',
        propType: 'object',
        modelName: 'imageAttr',
      },
      {
        type: 'text',
        propType: 'string',
        modelName: 'title',
      },
      {
        type: 'text',
        propType: 'string',
        modelName: 'ratingValue',
      },
      {
        type: 'text',
        propType: 'string',
        modelName: 'maxRatingValue',
      },
      {
        type: 'text',
        propType: 'string',
        modelName: 'reviewsAmount',
      },
      {
        type: 'text',
        propType: 'string',
        modelName: 'price',
      },
      {
        type: 'text',
        propType: 'string',
        modelName: 'oldPrice',
      },
      {
        type: 'select',
        modelName: 'size',
        options: Object.keys(VsfProductCardSize),
        propDefaultValue: VsfProductCardSize.responsive,
        propType: 'string',
      },
      {
        type: 'text',
        propType: 'string',
        modelName: 'link',
      },
      {
        type: 'select',
        modelName: 'linkTag',
        options: Object.keys(LinkTagTypes),
        description: "Explicitly set component tag. Added for demonstration purposes. It's not a prop",
      },
      {
        type: 'text',
        propType: 'string',
        modelName: 'description',
      },
      {
        type: 'text',
        propType: 'string',
        modelName: 'inCart',
      },
      {
        type: 'text',
        propType: 'string',
        modelName: 'addToCartLabel',
      },
      {
        type: 'text',
        propType: 'string',
        modelName: 'similarLabel',
      },
      {
        type: 'text',
        propType: 'string',
        modelName: 'badgeText',
      },
      {
        type: 'boolean',
        propType: 'boolean',
        modelName: 'outOfStock',
      },
      {
        type: 'text',
        propType: 'string',
        modelName: 'outOfStockLabel',
      },
      {
        type: 'boolean',
        propType: 'boolean',
        modelName: 'vertical',
        propDefaultValue: true,
      },
      {
        type: 'text',
        propType: 'string',
        modelName: 'ariaLabelAddToWishlist',
      },
      {
        type: 'text',
        propType: 'string',
        modelName: 'ariaLabelBadge',
      },
      {
        type: 'text',
        propType: 'string',
        modelName: 'ariaLabelAddToBasket',
      },
    ],
    {
      imageSrc: productImage.src,
      imageAttr: { alt: 'image', loading: 'lazy' },
      title: 'The standard chunk of Lorem Ipsum',
      price: '$2,345.99',
      oldPrice: '$3,132.99',
      size: VsfProductCardSize.responsive,
      link: '/',
      linkTag: LinkTagTypes.NextLink,
      outOfStock: false,
      outOfStockLabel: 'Out of stock',
      inCart: '',
      description: 'There are many variations of passages of Lorem Ipsum available',
      ratingValue: 3,
      maxRatingValue: 5,
      reviewsAmount: 123,
      addToCartLabel: 'Add',
      similarLabel: 'See similar',
      badgeText: 'Sale',
      vertical: true,
      ariaLabelAddToWishlist: 'Add The standard chunk of Lorem Ipsum to the wishlist',
      ariaLabelBadge: '-30% discount',
      ariaLabelAddToBasket: 'Add The standard chunk of Lorem Ipsum to the basket',
      className: '',
    },
  );
  const [newWindowWidth, setNewWindowWidth] = useState(0);
  const [newAddToCartLabel, setAddToCartLabel] = useState(state.get.addToCartLabel);

  const imageClasses = classNames(
    {
      'vsf-product-card__image--out-of-stock': state.get.outOfStock,
    },
    state.get.className,
  );

  type EventType = VsfButtonProps<HTMLButtonElement>['onClick'];
  const onAddToCartClick: EventType = (e) => {
    console.log('Added to cart: ', e);
  };

  const onAddToWishlistClick: EventType = (e) => {
    console.log('Added to wishlist:', e);
  };

  const onSeeSimilarClick: EventType = (e) => {
    console.log('See similar clicked:', e);
  };

  const onReviewsClick: EventType = (e) => {
    console.log('Reviews clicked:', e);
  };

  const onWindowResize = (): void => {
    setNewWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    onWindowResize();
    window.addEventListener('resize', onWindowResize);

    return () => {
      window.removeEventListener('resize', onWindowResize);
    };
  }, []);

  useEffect(() => {
    if (!VsfProductCardSize.responsive) return;
    if (newWindowWidth < 768) {
      setAddToCartLabel('Add');
    } else {
      setAddToCartLabel('Add to Cart');
    }
  }, [newWindowWidth]);

  return (
    <ComponentExample controls={{ state, controls }}>
      <VsfProductCard
        title={state.get.title}
        link={state.get.link}
        price={state.get.price}
        oldPrice={state.get.oldPrice}
        size={state.get.size}
        outOfStock={state.get.outOfStock}
        outOfStockLabel={state.get.outOfStockLabel}
        inCart={state.get.inCart}
        description={state.get.description}
        ratingValue={state.get.ratingValue}
        maxRatingValue={state.get.maxRatingValue}
        reviewsAmount={state.get.reviewsAmount}
        similarLabel={state.get.similarLabel}
        addToCartLabel={newAddToCartLabel}
        badgeText={state.get.badgeText}
        vertical={state.get.vertical}
        ariaLabelAddToWishlist={state.get.ariaLabelAddToWishlist}
        ariaLabelBadge={state.get.ariaLabelBadge}
        ariaLabelAddToBasket={state.get.ariaLabelAddToBasket}
        onAddToCartClick={onAddToCartClick}
        onAddToWishlistClick={onAddToWishlistClick}
        onSeeSimilarClick={onSeeSimilarClick}
        onReviewsClick={onReviewsClick}
        slotImage={
          state.get.linkTag === LinkTagTypes.NextLink
            ? state.get.imageSrc && (
                <Link href={state.get.link}>
                  <a>
                    <VsfProductCardImage
                      className={imageClasses}
                      imageSrc={state.get.imageSrc}
                      vertical={state.get.vertical}
                      size={state.get.size}
                      {...state.get.imageAttr}
                    />
                  </a>
                </Link>
              )
            : state.get.imageSrc && (
                <a href={state.get.link}>
                  <VsfProductCardImage
                    className={imageClasses}
                    imageSrc={state.get.imageSrc}
                    vertical={state.get.vertical}
                    size={state.get.size}
                    {...state.get.imageAttr}
                  />
                </a>
              )
        }
        slotTitle={
          state.get.linkTag === LinkTagTypes.NextLink
            ? state.get.title && (
                <Link href={state.get.link}>
                  <a>
                    <span className="vsf-product-card__details-title" data-testid="product-card-title">
                      {state.get.title}
                    </span>
                  </a>
                </Link>
              )
            : state.get.title && (
                <a href={state.get.link}>
                  <span className="vsf-product-card__details-title" data-testid="product-card-title">
                    {state.get.title}
                  </span>
                </a>
              )
        }
      />
    </ComponentExample>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
