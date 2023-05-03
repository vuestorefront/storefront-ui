import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfButton, SfRating, SfCounter, SfLink, SfIconShoppingCart, SfIconFavorite } from '@storefront-ui/react';
import productImage from '@assets/sneakers.png';

export default function ProductCardVertical() {
  const product = {
    title: 'Athletic mens walking sneakers',
    ratings: 4,
    reviews: ['some reviews', 'some reviews', 'some reviews'],
    shortDescription: 'Lightweight • Non slip • Flexible outsole • Easy to wear on and off',
    price: '2345,99',
    currency_code: '$',
    image: productImage,
  }

  return (
    <article className="border border-neutral-200 rounded-md hover:shadow-lg max-w-[300px]">
      <div className="relative">
        <SfLink href="#">
          <img
            src={product.image.src}
            alt={product.title}
            className="object-cover h-auto rounded-md aspect-square"
            width={300}
            height={300}
          />
        </SfLink>
        <SfButton
          type="button"
          variant="tertiary"
          size="sm"
          square
          className="absolute bottom-0 right-0 mr-2 mb-2 bg-white border border-neutral-200 !rounded-full"
          aria-label="Add to wishlist"
        >
          <SfIconFavorite size="sm" />
        </SfButton>
      </div>
      <div className="p-4 border-t border-neutral-200">
        <SfLink href="#" variant="secondary" className="no-underline">
          {product.title}
        </SfLink>
        <div className="flex items-center pt-1">
          <SfRating size="xs" value={product.ratings} max={5} />

          <SfLink href="#" variant="secondary" className="pl-1 no-underline">
            <SfCounter size="xs">{product.reviews.length}</SfCounter>
          </SfLink>
        </div>
        <p className="block py-2 font-normal typography-text-sm text-neutral-700">
          {product.shortDescription}
        </p>
        <span className="block pb-2 font-bold typography-text-lg">{product.currency_code}{product.price}</span>
        <SfButton type="button" size="sm" slotPrefix={<SfIconShoppingCart size="sm" />}>
          Add to cart
        </SfButton>
      </div>
    </div>
  );
}

// #endregion source
ProductCardVertical.getLayout = ShowcasePageLayout;
