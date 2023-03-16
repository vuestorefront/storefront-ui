import { VsfButton, VsfRating, VsfCounter, VsfLink, VsfIconShoppingCart, VsfIconFavorite } from '@storefront-ui/react';
import card from '@assets/card.png';
import Image from 'next/image';
import { ShowcasePageLayout } from '../../showcases';

export function Showcase() {
  return (
    <div className="border border-neutral-200 rounded-md hover:shadow-lg max-w-[300px]">
      <div className="relative">
        <VsfLink href="#">
          <Image
            src={card.src}
            alt="Great product"
            className="object-cover h-auto rounded-md aspect-square"
            width={300}
            height={300}
          />
        </VsfLink>
        <VsfButton
          type="button"
          variant="tertiary"
          size="sm"
          square
          className="absolute bottom-0 right-0 mr-2 mb-2 bg-white border border-neutral-200 !rounded-full"
          aria-label="Add to wishlist"
        >
          <VsfIconFavorite size="sm" />
        </VsfButton>
      </div>
      <div className="p-4 border-t border-neutral-200">
        <VsfLink href="#" variant="secondary" className="no-underline">
          The standard chunk of Lorem Ipsum
        </VsfLink>
        <div className="flex items-center pt-1">
          <VsfRating size="xs" value={5} max={5} />

          <VsfLink href="#" variant="secondary" className="pl-1 no-underline">
            <VsfCounter>{123}</VsfCounter>
          </VsfLink>
        </div>
        <p className="block py-2 font-normal typography-text-sm text-neutral-700">
          There are many variations of passages of Lorem Ipsum available
        </p>
        <span className="block pb-2 font-bold typography-text-lg">$2345,99</span>
        <VsfButton type="button" size="sm" slotPrefix={<VsfIconShoppingCart size="sm" />}>
          Add to cart
        </VsfButton>
      </div>
    </div>
  );
}

Showcase.getLayout = ShowcasePageLayout;
export default Showcase;
