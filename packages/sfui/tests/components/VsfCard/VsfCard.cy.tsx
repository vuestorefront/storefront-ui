/// <reference path="../../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React, { ReactNode } from "react";
import VsfCardVue from "../../../frameworks/vue/components/VsfCard/index";
import VsfCardReact from "../../../frameworks/react/components/VsfCard/VsfCard";
import { mount } from '../../utils/mount';
import VsfCardBaseObject from "./VsfCard.PageObject";
import { VsfCardSizes } from '../../../frameworks/vue/components/VsfCard/types';

describe("VsfCard", () => {
  let imgSrc: string;
  let imgAttr: Record<string, unknown>;
  let link: string;
  let linkTag: string;
  let title: string;
  let description: string;
  let withButton: boolean;
  let buttonText: string;
  let rounded: boolean;
  let size: VsfCardSizes;
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
          withButton,
          buttonText,
          rounded,
          size,
          slotImg
        },
        slots: {
          slotImg: () => slotImg,
        },
      },
      react: <VsfCardReact
        imgSrc={imgSrc}
        imgAttr={imgAttr}
        link={link}
        linkTag={linkTag}
        title={title}
        withButton={withButton}
        buttonText={buttonText}
        description={description}
        size={size}
        rounded={rounded}
      >{slotImg}</VsfCardReact>
    });
  }

  beforeEach(() => {
  })

  afterEach(() => {
    imgSrc = '../../../../../apps/preview/vue/cypress/fixtures/product-card.jpg';
    imgAttr = {alt: "image"};
    link = '/';
    linkTag = 'a';
    title = 'Title';
    description = 'There are many variations of passages of Lorem Ipsum available';
    withButton = true;
    buttonText = 'Button';
    rounded = false;
    size = VsfCardSizes.base;
    cy.viewport(500, 500);
  });

  it('initial state', () => {
    imgSrc = '';
    initializeComponent();

    page()
      .doesNotHaveImage()
      .makeSnapshot();
  });

  describe('when image, title and description added', () => {
    it('should render correctly', () => {
      initializeComponent();

      page()
        .hasImage(imgSrc)
        .hasTitle(title)
        .hasDescription(description)
        .makeSnapshot();
    })
  });
// TODO: Adjust when link component done
  describe('when link empty and linkTag set to button', () => {
    it('should render as button', () => {
      link = ''
      linkTag = 'button'
      initializeComponent();

      page()
        .hasTag('BUTTON')
        .makeSnapshot();
    })
  });

  describe('when rounded is true', () => {
    it('should render component in rounded version', () => {
      rounded = true;
      initializeComponent();

      page()
        .isRounded()
        .makeSnapshot();
    })
  });
});
