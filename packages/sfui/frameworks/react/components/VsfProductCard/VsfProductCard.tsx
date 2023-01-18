import classNames from 'classnames';
import VsfRating from '../VsfRating/VsfRating';
import VsfTag from '../VsfTag/VsfTag';
import VsfButton from '../VsfButton/VsfButton';
import VsfCounter from '../VsfCounter/VsfCounter';
import VsfIconFavoritesOutline from '../VsfIcons/VsfIconFavoritesOutline';
import VsfIconBasket from '../VsfIcons/VsfIconBasket';
import VsfIconAddedToBasket from '../VsfIcons/VsfIconAddedToBasket';
import VsfIconHot from '../VsfIcons/VsfIconHot';
import { VsfTagVariant, VsfTagSize } from '../VsfTag/types';
import { VsfIconSize } from '../VsfIconBase/types';
import { VsfButtonSize, VsfButtonVariant } from '../VsfButton/types';
import { VsfRatingSize, VsfRatingVariant } from '../VsfRating/types';
import { VsfProductCardSize } from './types';
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
  size = VsfProductCardSize.responsive,
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
      'vsf-product-card--sm': size === VsfProductCardSize.sm,
      'vsf-product-card--base': size === VsfProductCardSize.base,
      'vsf-product-card--responsive': size === VsfProductCardSize.responsive,
      'vsf-product-card--horizontal-base': size === VsfProductCardSize.base && !vertical,
      'vsf-product-card--horizontal-sm': size === VsfProductCardSize.sm && !vertical,
      'vsf-product-card--horizontal-responsive': size === VsfProductCardSize.responsive && !vertical,
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
                size={VsfTagSize.sm}
                strong
                label={badgeText}
                variant={VsfTagVariant.secondary}
                data-testid="product-card-badge"
              >
                <VsfIconHot size={VsfIconSize.xs} ariaLabel={ariaLabelBadge} />
              </VsfTag>
            ))}
        </div>

        <div className="vsf-product-card__image-bottom">
          {slotImageBottom || (
            <>
              {vertical && (outOfStock || inCart) ? (
                <VsfTag
                  size={VsfTagSize.sm}
                  variant={outOfStock ? VsfTagVariant.negative : VsfTagVariant.primary}
                  label={outOfStock ? outOfStockLabel : inCart}
                  data-testid="product-card-in-cart"
                >
                  {!outOfStock ? <VsfIconAddedToBasket size={VsfIconSize.xs} /> : null}
                </VsfTag>
              ) : null}

              <VsfButton
                variant={VsfButtonVariant.secondary}
                size={VsfButtonSize.sm}
                className="vsf-product-card__image-bottom-button"
                onClick={onAddToWishlistClick}
                data-testid="product-card-add-to-wishlist"
                slotPrefix={<VsfIconFavoritesOutline size={VsfIconSize.sm} ariaLabel={ariaLabelAddToWishlist} />}
              />
            </>
          )}
        </div>
      </div>

      <div className="vsf-product-card__details">
        {!vertical && (outOfStock || inCart) ? (
          <VsfTag
            size={VsfTagSize.sm}
            variant={outOfStock ? VsfTagVariant.negative : VsfTagVariant.primary}
            label={outOfStock ? outOfStockLabel : inCart}
            className="vsf-product-card__details-in-cart"
          >
            {!outOfStock ? <VsfIconAddedToBasket size={VsfIconSize.xs} /> : null}
          </VsfTag>
        ) : null}
        {slotTitle ||
          (title && (
            <a href={link}>
              <span className="vsf-product-card__details-title" data-testid="product-card-title">
                {title}
              </span>
            </a>
          ))}

        {slotRating || (
          <div className="vsf-product-card__details-rating">
            {maxRatingValue && (
              <VsfRating
                size={VsfRatingSize.xs}
                variant={VsfRatingVariant.base}
                value={ratingValue}
                max={maxRatingValue}
                data-testid="product-card-rating"
              />
            )}
            {reviewsAmount && (
              <VsfButton
                variant={VsfButtonVariant.tertiary}
                onClick={onReviewsClick}
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
              onClick={onAddToCartClick}
              className={addToCartClasses}
              size={VsfButtonSize.sm}
              data-testid="product-card-add-to-cart"
            >
              <VsfIconBasket size={VsfIconSize.sm} ariaLabel={ariaLabelAddToBasket} />
              <span className="ml-2">{addToCartLabel}</span>
            </VsfButton>
          ) : (
            <VsfButton
              onClick={onSeeSimilarClick}
              variant={VsfButtonVariant.secondary}
              className={addToCartClasses}
              size={VsfButtonSize.sm}
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
