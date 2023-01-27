/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React, { ReactNode } from 'react';
import { VsfProductCardSize } from '@storefront-ui/vue/components/VsfProductCard/types';
import { mount, useComponent } from '../../utils/mount';
import VsfProductCardBaseObject from './VsfProductCard.PageObject';

const { vue: VsfProductCardVue, react: VsfProductCardReact } = useComponent('VsfProductCard');

describe('VsfProductCard', () => {
  let onAddToCartClickSpy: Cypress.Agent<sinon.SinonSpy>;
  let onAddToWishlistClickSpy: Cypress.Agent<sinon.SinonSpy>;
  let onSeeSimilarClickSpy: Cypress.Agent<sinon.SinonSpy>;
  let onReviewsClickSpy: Cypress.Agent<sinon.SinonSpy>;
  let imageSrc: string;
  let imageAttr: Record<string, unknown>;
  let link: string;
  let linkTag: string;
  let ratingValue: number;
  let maxRatingValue: number;
  let reviewsAmount: number;
  let title: string;
  let price: string;
  let oldPrice: string;
  let description: string;
  let outOfStock: boolean;
  let outOfStockLabel: string;
  let inCart: string;
  let size: VsfProductCardSize;
  let addToCartLabel: string;
  let similarLabel: string;
  let badgeText: string;
  let vertical: boolean;
  let ariaLabelAddToWishlist: string;
  let ariaLabelBadge: string;
  let ariaLabelAddToBasket: string;
  let slotImageBottom: ReactNode;
  let slotImageTop: ReactNode;
  let slotRating: ReactNode;
  let slotImage: ReactNode;

  const page = () => new VsfProductCardBaseObject('product-card');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: VsfProductCardVue,
        props: {
          imageSrc,
          imageAttr,
          link,
          linkTag,
          ratingValue,
          maxRatingValue,
          reviewsAmount,
          title,
          price,
          oldPrice,
          description,
          outOfStock,
          outOfStockLabel,
          inCart,
          size,
          addToCartLabel,
          similarLabel,
          badgeText,
          vertical,
          ariaLabelAddToWishlist,
          ariaLabelBadge,
          ariaLabelAddToBasket,
          slotImageBottom,
          slotImageTop,
          slotRating,
          slotImage,
          onAddToCart: onAddToCartClickSpy,
          onAddToWishlist: onAddToWishlistClickSpy,
          onSeeSimilar: onSeeSimilarClickSpy,
          onSeeReviews: onReviewsClickSpy,
        },
        slots: {
          slotImage: () => slotImage,
          slotImageTop: () => slotImageTop,
          slotImageBottom: () => slotImageBottom,
          slotRating: () => slotRating,
        },
      },
      react: (
        <VsfProductCardReact
          imageSrc={imageSrc}
          imageAttr={imageAttr}
          link={link}
          ratingValue={ratingValue}
          maxRatingValue={maxRatingValue}
          reviewsAmount={reviewsAmount}
          title={title}
          price={price}
          oldPrice={oldPrice}
          description={description}
          outOfStock={outOfStock}
          outOfStockLabel={outOfStockLabel}
          inCart={inCart}
          size={size}
          addToCartLabel={addToCartLabel}
          similarLabel={similarLabel}
          badgeText={badgeText}
          vertical={vertical}
          ariaLabelAddToWishlist={ariaLabelAddToWishlist}
          ariaLabelBadge={ariaLabelBadge}
          ariaLabelAddToBasket={ariaLabelAddToBasket}
          onAddToCartClick={onAddToCartClickSpy}
          onAddToWishlistClick={onAddToWishlistClickSpy}
          onSeeSimilarClick={onSeeSimilarClickSpy}
          onReviewsClick={onReviewsClickSpy}
        >
          {slotImage}
          {slotImageTop}
          {slotImageBottom}
          {slotRating}
        </VsfProductCardReact>
      ),
    });
  };

  beforeEach(() => {
    onAddToCartClickSpy = cy.spy();
    onAddToWishlistClickSpy = cy.spy();
    onSeeSimilarClickSpy = cy.spy();
    onReviewsClickSpy = cy.spy();
  });

  afterEach(() => {
    imageSrc = '../../../../../apps/preview/vue/cypress/fixtures/product-card.jpg';
    imageAttr = { alt: 'image' };
    link = '/';
    linkTag = 'a';
    ratingValue = 3;
    maxRatingValue = 5;
    reviewsAmount = 123;
    title = 'The standard chunk of Lorem Ipsum';
    price = '$2,345.99';
    oldPrice = '$3,132.99';
    description = 'There are many variations of passages of Lorem Ipsum available';
    outOfStock = false;
    (outOfStockLabel = 'Out of stock'), (inCart = '12 in cart');
    size = VsfProductCardSize.responsive;
    addToCartLabel = 'Add';
    similarLabel = 'See similar';
    badgeText = '-30%';
    vertical = true;
    cy.viewport(500, 500);
  });

  it('initial state', () => {
    imageSrc = '';
    title = '';
    initializeComponent();

    page().doesNotHaveImage().doesNotHaveTitle().makeSnapshot();
  });

  describe('when badgeText added', () => {
    it('should render tag component in image top slot', () => {
      badgeText = '-30%';
      initializeComponent();

      page().hasBadge(badgeText).makeSnapshot();
    });
  });

  describe('when inCart value above 0', () => {
    it('should render tag component in image bottom slot', () => {
      inCart = '12 in cart';
      initializeComponent();

      page().hasInCart(inCart).makeSnapshot();
    });
  });

  describe('when image, title and description added', () => {
    it('should render correctly', () => {
      initializeComponent();

      page().hasImage(imageSrc).hasTitle(title).hasDescription(description).makeSnapshot();
    });
  });

  describe('when price and oldPrice added', () => {
    it('should render correctly', () => {
      price = '$1,234.50';
      oldPrice = '$1,349.99';
      initializeComponent();

      page().hasPrice(price).hasOldPrice(oldPrice).makeSnapshot();
    });
  });

  describe('when maxRatingValue is set, ratingValue and reviewsAmount added', () => {
    it('should render correctly', () => {
      maxRatingValue = 6;
      ratingValue = 3;
      reviewsAmount = 123;
      initializeComponent();

      page()
        .hasMaxRatingValue(maxRatingValue)
        .hasRatingValue(ratingValue)
        .hasReviewsAmount(reviewsAmount)
        .makeSnapshot();
    });
  });

  describe('when viewport is set below 769px width and component is vertical', () => {
    it('should change size to sm', () => {
      cy.viewport(768, 500);
      initializeComponent();

      page().hasProperSize('192px').makeSnapshot();
    });
  });

  describe('when no badgeText is given and inCart is 0', () => {
    it('should not render', () => {
      badgeText = '';
      inCart = '';
      initializeComponent();

      page().doesNotHaveBadge().doesNotHaveInCart().makeSnapshot();
    });
  });

  describe('when outOfStock is true', () => {
    it('should render out of stock tag and see similar button', () => {
      similarLabel = 'See similar';
      outOfStock = true;
      initializeComponent();

      page().hasOutOfStock().hasSeeSimilarButton(similarLabel).makeSnapshot();
    });
  });

  describe('when vertical is false', () => {
    it('should render component in horizontal version', () => {
      vertical = false;
      cy.viewport(641, 500);
      initializeComponent();

      page().isHorizontal('640px').makeSnapshot();
    });
  });

  describe('when add to cart button is clicked', () => {
    it('should emit addToCart event', () => {
      initializeComponent();

      page().addToCartClick();
      cy.then(() => {
        expect(onAddToCartClickSpy).to.be.called;
        page().makeSnapshot();
      });
    });
  });

  describe('when add to wishlist button is clicked', () => {
    it('should emit addToWishlist event', () => {
      initializeComponent();

      page().addToWishlistClick();
      cy.then(() => {
        expect(onAddToWishlistClickSpy).to.be.called;
        page().makeSnapshot();
      });
    });
  });

  describe('when see similar button is clicked', () => {
    it('should emit seeSimilar event', () => {
      outOfStock = true;
      initializeComponent();

      page().seeSimilarClick();
      cy.then(() => {
        expect(onSeeSimilarClickSpy).to.be.called;
        page().makeSnapshot();
      });
    });
  });

  describe('when see reviews is clicked', () => {
    it('should emit seeSimilar event', () => {
      initializeComponent();

      page().seeReviewsClick();
      cy.then(() => {
        expect(onReviewsClickSpy).to.be.called;
        page().makeSnapshot();
      });
    });
  });
});
