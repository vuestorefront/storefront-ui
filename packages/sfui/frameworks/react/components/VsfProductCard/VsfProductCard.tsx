import classNames from 'classnames';
import VsfRating from '../VsfRating/VsfRating';
import VsfTag from '../VsfTag/VsfTag';
import VsfButton from '../VsfButton/VsfButton';
import VsfCounter from '../VsfCounter/VsfCounter';
import VsfIconFavoritesOutline from '../VsfIcons/VsfIconFavoritesOutline';
import VsfIconBasket from '../VsfIcons/VsfIconBasket';
import VsfIconAddedToBasket from '../VsfIcons/VsfIconAddedToBasket';
import VsfIconHot from '../VsfIcons/VsfIconHot';
import { VsfTagVariants, VsfTagSizes } from '../VsfTag/types';
import { VsfIconSizeEnum } from '../VsfIconBase/types';
import { VsfButtonSizes, VsfButtonVariants } from '../VsfButton/types';
import { VsfRatingSizes, VsfRatingVariants } from '../VsfRating/types';
import { VsfProductCardSizes } from './types';
import type { VsfProductCardProps } from './types';
import VsfProductCardImage from './VsfProductCardImage';

export default function VsfProductCard({
  imageSrc,
  imageAttr,
  link,
  ratingValue = 0,
  maxRatingValue = 0,
  reviewsAmount = 0,
  title,
  price,
  oldPrice,
  description,
  outOfStock = false,
  inCart,
  size = VsfProductCardSizes.default,
  addToCartLabel,
  similarLabel,
  outOfStockLabel,
  badgeText,
  vertical = true,
  ariaLabelAddToWishlist,
  ariaLabelBadge,
  ariaLabelAddToBasket,
  slotImageBottom,
  slotImageTop,
  slotRating,
  slotImage,
  slotTitle,
  onAddToCartClick,
  onAddToWishlistClick,
  onSeeSimilarClick,
  onReviewsClick,
  className = '',
  ...attributes
}: VsfProductCardProps) {
  const productCardClasses = classNames(
    'vsf-product-card',
    {
      'vsf-product-card--sm': size === VsfProductCardSizes.sm,
      'vsf-product-card--base': size === VsfProductCardSizes.base,
      'vsf-product-card--default': size === VsfProductCardSizes.default,
      'vsf-product-card--horizontal-base': size === VsfProductCardSizes.base && !vertical,
      'vsf-product-card--horizontal-sm': size === VsfProductCardSizes.sm && !vertical,
      'vsf-product-card--horizontal-default': size === VsfProductCardSizes.default && !vertical,
      'vsf-product-card--horizontal': !vertical,
    },
    className,
  );

  const pricesMainClasses = classNames('vsf-product-card__prices-main', {
    'vsf-product-card__details-prices-main--old-price': oldPrice,
  });

  const addToCartClasses = classNames('vsf-product-card__details-add-to-cart', {
    'vsf-product-card__details-add-to-cart--out-of-stock': outOfStock,
  });

  const addToCart = (event: Event) => {
    event.preventDefault();
    onAddToCartClick?.(event);
  };

  const addToWishlist = (event: Event) => {
    event.preventDefault();
    onAddToWishlistClick?.(event);
  };

  const seeSimilar = (event: Event) => {
    event.preventDefault();
    onSeeSimilarClick?.(event);
  };

  const seeReviews = (event: Event) => {
    event.preventDefault();
    onReviewsClick?.(event);
  };

  return (
    <div className={productCardClasses} {...attributes} data-testid="product-card">
      <div className="relative">
        {slotImage ||
          (imageSrc && (
            <a href={link}>
              <VsfProductCardImage
                imageSrc={imageSrc}
                className={classNames([
                  'vsf-product-card__image',
                  { 'vsf-product-card__image--out-of-stock': outOfStock },
                ])}
                vertical={vertical}
                size={size}
                {...imageAttr}
                data-testid="product-card-image"
              />
            </a>
          ))}
        <div className="vsf-product-card__image-top">
          {slotImageTop ||
            (badgeText && (
              <VsfTag
                size={size === VsfProductCardSizes.base ? VsfTagSizes.base : VsfTagSizes.sm}
                strong
                label={badgeText}
                variant={VsfTagVariants.secondary}
                data-testid="product-card-badge"
              >
                <VsfIconHot
                  size={size === VsfProductCardSizes.base ? VsfIconSizeEnum.sm : VsfIconSizeEnum.xs}
                  ariaLabel={ariaLabelBadge}
                />
              </VsfTag>
            ))}
        </div>

        <div className="vsf-product-card__image-bottom">
          {slotImageBottom || (
            <>
              {vertical && (outOfStock || inCart) ? (
                <VsfTag
                  size={VsfTagSizes.sm}
                  variant={outOfStock ? VsfTagVariants.negative : VsfTagVariants.primary}
                  label={outOfStock ? outOfStockLabel : inCart}
                  data-testid="product-card-in-cart"
                >
                  {!outOfStock ? <VsfIconAddedToBasket size={VsfIconSizeEnum.xs} /> : null}
                </VsfTag>
              ) : null}

              <VsfButton
                variant={VsfButtonVariants.secondary}
                size={VsfButtonSizes.sm}
                className="vsf-product-card__image-bottom-button"
                onClick={(event: Event) => addToWishlist(event)}
                icon
                data-testid="product-card-add-to-wishlist"
              >
                <VsfIconFavoritesOutline size={VsfIconSizeEnum.sm} ariaLabel={ariaLabelAddToWishlist} />
              </VsfButton>
            </>
          )}
        </div>
      </div>

      <div className="vsf-product-card__details">
        {!vertical && (outOfStock || inCart) ? (
          <VsfTag
            size={VsfTagSizes.sm}
            variant={outOfStock ? VsfTagVariants.negative : VsfTagVariants.primary}
            label={outOfStock ? outOfStockLabel : inCart}
            className="vsf-product-card__details-in-cart"
          >
            {!outOfStock ? <VsfIconAddedToBasket size={VsfIconSizeEnum.xs} /> : null}
          </VsfTag>
        ) : null}
        {slotTitle ||
          (title && title && (
            <a href={link}>
              <span className="vsf-product-card__details-title" data-testid="product-card-title">
                {title}
              </span>
            </a>
          ))}

        {slotRating || (
          <div className="vsf-product-card__details-rating">
            <VsfRating
              size={VsfRatingSizes.xs}
              variant={VsfRatingVariants.base}
              value={ratingValue}
              max={maxRatingValue}
              data-testid="product-card-rating"
            />
            {reviewsAmount && (
              <VsfButton
                variant={VsfButtonVariants.tertiary}
                onClick={(event: Event) => seeReviews(event)}
                className="vsf-product-card__details-rating-button"
                data-testid="product-card-reviews"
              >
                <VsfCounter className="vsf-product-card__details-rating-counter">{reviewsAmount}</VsfCounter>
              </VsfButton>
            )}
          </div>
        )}

        {description && (
          <p className="vsf-product-card__details-description" data-testid="product-card-description">
            {description}
          </p>
        )}
        <div className="vsf-product-card__details-wrapper">
          {price && (
            <span className="vsf-product-card__details-prices">
              <span className={pricesMainClasses} data-testid="product-card-price">
                {price}
              </span>

              <span className="vsf-product-card__details-prices--old-price" data-testid="product-card-old-price">
                {oldPrice}
              </span>
            </span>
          )}
          {!outOfStock ? (
            <VsfButton
              onClick={(event: Event) => addToCart(event)}
              className={addToCartClasses}
              size={VsfButtonSizes.sm}
              data-testid="product-card-add-to-cart"
            >
              <VsfIconBasket size={VsfIconSizeEnum.sm} ariaLabel={ariaLabelAddToBasket} />
              <span className="ml-2">{addToCartLabel}</span>
            </VsfButton>
          ) : (
            <VsfButton
              onClick={(event: Event) => seeSimilar(event)}
              variant={VsfButtonVariants.secondary}
              className={addToCartClasses}
              size={VsfButtonSizes.sm}
              data-testid="product-card-see-similar"
            >
              {similarLabel}
            </VsfButton>
          )}
        </div>
      </div>
    </div>
  );
}
