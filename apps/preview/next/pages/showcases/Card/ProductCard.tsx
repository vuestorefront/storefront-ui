import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfButton } from '@storefront-ui/react';

interface ProductCardProps {
  url: string;
  title: string;
  buttonLabel: string;
  description?: string;
  image?: string;
}

export default function ProductCard(props: ProductCardProps) {
  const { url, title, description, buttonLabel, image } = props;
  return (
    <div className="flex flex-col min-w-[325px] max-w-[375px] lg:w-[496px] relative border border-neutral-200 rounded-md hover:shadow-xl">
      <a
        className="absolute inset-0 z-1 focus-visible:outline focus-visible:outline-offset focus-visible:rounded-md"
        href={url}
        aria-label={title}
      />
      <img src={image} alt={title} className="object-cover h-auto rounded-t-md aspect-video" />
      <div className="flex flex-col items-start p-4 grow">
        <p className="font-medium typography-text-base">{title}</p>
        <p className="mt-1 mb-4 font-normal typography-text-sm text-neutral-700">{description}</p>
        <SfButton size="sm" variant="tertiary" className="relative mt-auto">
          {buttonLabel}
        </SfButton>
      </div>
    </div>
  );
}

// #endregion source
ProductCard.getLayout = ShowcasePageLayout;
