/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import { ShowcasePageLayout } from '../../showcases';
// #region source
import { SfButton } from '@storefront-ui/react';
import ProductCard from './ProductCard';

const cardDetails = [
  {
    url: '#',
    image: 'http://localhost:3100/@assets/card-3.png',
    title: 'Sip Sustainably: The Rise of Boxed Water',
    description:
      'Boxed water is a sustainable alternative to traditional plastic bottles, made from renewable resources.',
    buttonLabel: 'Read more',
  },
  {
    url: '#',
    image: 'http://localhost:3100/@assets/card-2.png',
    title: 'Ride the Future: Exploring the Benefits of e-Bikes',
    description:
      'Eco-friendly, efficient, and fun modes of transportation that provide a range of benefits for riders and the environment.',
    buttonLabel: 'Read more',
  },
  {
    url: '#',
    image: 'http://localhost:3100/@assets/card-1.png',
    title: 'Unleash the Ultimate Listening Experience',
    description:
      'Audiophile headphones offer unmatched sound quality and clarity, making them the go-to choice for music enthusiasts.',
    buttonLabel: 'Read more',
  },
];

export default function ProductCardUsage() {
  return (
    <div className="flex flex-wrap gap-4 lg:gap-6 lg:flex-nowrap">
      {cardDetails.map((card) => (
        <ProductCard key={card.title} {...card} />
      ))}
    </div>
  );
}
// #endregion source
ProductCardUsage.getLayout = ShowcasePageLayout;
