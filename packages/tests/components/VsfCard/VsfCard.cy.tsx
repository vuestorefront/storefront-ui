/// <reference path="../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React, { ReactNode } from 'react';
import { VsfCardSize } from '@storefront-ui/vue/components/VsfCard/types';
import { mount, useComponent } from '../../utils/mount';
import VsfCardBaseObject from './VsfCard.PageObject';

const { vue: VsfCardVue, react: VsfCardReact } = useComponent('VsfCard');

describe('VsfCard', () => {
  let imgSrc: string;
  let imgAttr: Record<string, unknown>;
  let link: string;
  let linkTag: string;
  let title: string;
  let description: string;
  let buttonText: string;
  let size: VsfCardSize;
  let slotImg: ReactNode;

  const page = () => new VsfCardBaseObject('card');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: VsfCardVue,
        props: {
          imgSrc,
          imgAttr,
          link,
          linkTag,
          title,
          description,
          buttonText,
          size,
          slotImg,
        },
        slots: {
          slotImg: () => slotImg,
        },
      },
      react: (
        <VsfCardReact
          imgSrc={imgSrc}
          imgAttr={imgAttr}
          link={link}
          linkTag={linkTag}
          title={title}
          buttonText={buttonText}
          description={description}
          size={size}
        >
          {slotImg}
        </VsfCardReact>
      ),
    });
  };

  afterEach(() => {
    imgSrc = '../../../../../apps/preview/vue/cypress/fixtures/product-card.jpg';
    imgAttr = { alt: 'image' };
    link = '/';
    linkTag = 'a';
    title = 'Title';
    description = 'There are many variations of passages of Lorem Ipsum available';
    buttonText = 'Button';
    size = VsfCardSize.base;
    cy.viewport(500, 500);
  });

  it('initial state', () => {
    imgSrc = '';
    initializeComponent();

    page().doesNotHaveImage().makeSnapshot();
  });

  describe('when image, title and description added', () => {
    it('should render correctly', () => {
      initializeComponent();

      page().hasImage(imgSrc).hasTitle(title).hasDescription(description).makeSnapshot();
    });
  });
});
