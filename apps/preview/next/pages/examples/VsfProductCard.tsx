import classNames from 'classnames';
import VsfProductCard, { VsfProductCardImage } from '@sfui/sfui/frameworks/react/components/VsfProductCard';
import { VsfProductCardSizes } from '@sfui/sfui/frameworks/react/components/VsfProductCard/types';
import type {
  VsfProductCardProps,
  VsfProductCardImageProps,
} from '@sfui/sfui/frameworks/react/components/VsfProductCard/types';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import VsfIconHot from '@sfui/sfui/frameworks/react/components/VsfIcons/VsfIconHot';
import VsfTag from '@sfui/sfui/frameworks/react/components/VsfTag/VsfTag';
import { VsfTagVariants, VsfTagSizes } from '@sfui/sfui/frameworks/react/components/VsfTag/types';
import { VsfIconSizeEnum } from '@sfui/sfui/frameworks/react/components/VsfIconBase/types';
import Controls, { prepareControls } from '../../components/utils/Controls';
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
        options: Object.keys(VsfProductCardSizes),
        propDefaultValue: VsfProductCardSizes.responsive,
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
      size: VsfProductCardSizes.responsive,
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
      badgeText: '-30%',
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

  let badgeSize = '';

  function onAddToCartClick(e?: Event) {
    console.log('Added to cart: ', e);
  }
  function onAddToWishlistClick(e?: Event) {
    console.log('Added to wishlist:', e);
  }
  function onSeeSimilarClick(e?: Event) {
    console.log('See similar clicked:', e);
  }
  function onReviewsClick(e?: Event) {
    console.log('Reviews clicked:', e);
  }
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
    if (!VsfProductCardSizes.default) return;
    if (newWindowWidth < 768) {
      setAddToCartLabel('Add');
      badgeSize = '';
    } else {
      setAddToCartLabel('Add to Cart');
      badgeSize = 'base';
    }
  }, [newWindowWidth]);

  return (
    <div className="e-page">
      <div className="e-page-component">
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
          slotImageTop={
            state.get.vertical &&
            state.get.size === 'default' &&
            badgeSize === 'base' && (
              <VsfTag size={VsfTagSizes.base} strong label={state.get.badgeText} variant={VsfTagVariants.secondary}>
                <VsfIconHot size={VsfIconSizeEnum.sm} ariaLabel={state.get.ariaLabelBadge} />
              </VsfTag>
            )
          }
        />
      </div>
      <div className="e-page-controls">
        <Controls {...{ state, controls }} />
      </div>
    </div>
  );
}

Example.getLayout = ExamplePageLayout;
export default Example;
