/// <reference path="../../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from "react";
import VsfButtonVue from "../../../frameworks/vue/components/VsfButton/VsfButton.vue";
import { VsfButtonSizes, VsfButtonVariants } from '../../../frameworks/vue/components/VsfButton/types';
import VsfButtonReact from "../../../frameworks/react/components/VsfButton/VsfButton";
import { mount } from '../../utils/mount';
import VsfButtonBaseObject from "./VsfButton.PageObject";

describe("VsfButton", () => {
  let size: VsfButtonSizes;
  let variant: VsfButtonVariants;
  let rounded: boolean;
  let disabled: boolean;
  let tile: boolean;
  let icon: boolean;
  let block: boolean;
  let tag: string;
  let link: string;
  let slotContent = 'button content';

  const page = () => new VsfButtonBaseObject('button');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: VsfButtonVue,
        props: {
          size,
          variant,
          rounded,
          disabled,
          tile,
          icon,
          block,
          tag,
          link
        },
        slots: {
          default: () => slotContent,
        },
      },
      react: <VsfButtonReact
        size={size}
        variant={variant}
        rounded={rounded}
        disabled={disabled}
        tile={tile}
        icon={icon}
        block={block}
        tag={tag}
        link={link}
      >{slotContent}</VsfButtonReact>
    });
  }

  afterEach(() => {
    size = VsfButtonSizes.base;
    variant = VsfButtonVariants.primary;
  });

  beforeEach(() => {
    cy.viewport(200, 200)
  });

  it('initial state', () => {
    initializeComponent();

    page().makeSnapshot();
  });

  describe('when size', () => {
    Object.values(VsfButtonSizes).forEach((componentSize) => {
      describe(`${componentSize}`, () => {
        it(`should render correct size ${componentSize}`, () => {
          size = componentSize;
          initializeComponent();

          page().makeSnapshot();
        });
      });
    });
  });

  describe('when variant', () => {
    Object.values(VsfButtonVariants).forEach((componentVariant) => {
      describe(`${componentVariant}`, () => {
        it(`should render correct variant ${componentVariant}`, () => {
          variant = componentVariant;
          initializeComponent();

          page().makeSnapshot();
        });
      });
    });
  });

  describe('when rounded', () => {
    before(() => rounded = true);
    after(() => rounded = false);
    it(`should render with rounded borders`, () => {
      initializeComponent();

      page().makeSnapshot();
    });
  });

  describe('when disabled', () => {
    before(() => disabled = true);
    after(() => disabled = false);
    it(`should render as disabled`, () => {
      initializeComponent();

      page()
        .isDisabled()
        .makeSnapshot();
    });
  });

  describe('when tile', () => {
    before(() => tile = true);
    after(() => tile = false);
    it(`should render as tile`, () => {
      initializeComponent();

      page().makeSnapshot();
    });
  });

  describe('when icon', () => {
    before(() => icon = true);
    after(() => icon = false);
    it(`should render with smaller paddings`, () => {
      initializeComponent();

      page().makeSnapshot();
    });
  });

  describe('when block', () => {
    before(() => block = true);
    after(() => block = false);
    it(`should render full with`, () => {
      initializeComponent();

      page().makeSnapshot();
    });
  });

  describe('when tag=div', () => {
    before(() => tag = 'div');
    after(() => tag = 'button');
    it(`should render as HTMLDivElement`, () => {
      initializeComponent();

      page()
        .hasTag('DIV')
        .makeSnapshot();
    });
  });

  describe('when link', () => {
    before(() => link = 'http://somelink.com');
    after(() => link = '');
    it(`should render as <a> element`, () => {
      initializeComponent();

      page()
        .hasTag('A')
        .makeSnapshot();
    });
  });
});
