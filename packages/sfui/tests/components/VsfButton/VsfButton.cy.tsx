/// <reference path="../../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from "react";
import VsfButtonVue from "../../../frameworks/vue/components/VsfButton/VsfButton.vue";
import VsfButtonReact from "../../../frameworks/react/components/VsfButton/VsfButton";
import { VsfButtonSizes, VsfButtonVariants } from '../../../frameworks/vue/components/VsfButton/types';

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

  describe('when prop size is set to ', () => {
    Object.values(VsfButtonSizes).forEach((componentSize) => {
      describe(`${componentSize}`, () => {
        it(`should render correct ${componentSize} size`, () => {
          size = componentSize;
          initializeComponent();

          page().makeSnapshot();
        });
      });
    });
  });

  describe('when prop variant is set to ', () => {
    Object.values(VsfButtonVariants).forEach((componentVariant) => {
      describe(`${componentVariant}`, () => {
        it(`should render correct ${componentVariant} variant`, () => {
          variant = componentVariant;
          initializeComponent();

          page().makeSnapshot();
        });
      });
    });
  });

  describe('when prop rounded=true', () => {
    before(() => rounded = true);
    after(() => rounded = false);
    it(`should render with rounded borders`, () => {
      initializeComponent();

      page().makeSnapshot();
    });
  });

  describe('when prop disabled=true', () => {
    before(() => disabled = true);
    after(() => disabled = false);
    it(`should render as disabled`, () => {
      initializeComponent();

      page()
        .isDisabled()
        .makeSnapshot();
    });
  });

  describe('when prop tile=true', () => {
    before(() => tile = true);
    after(() => tile = false);
    it(`should render as tile`, () => {
      initializeComponent();

      page().makeSnapshot();
    });
  });

  describe('when prop icon=true', () => {
    before(() => icon = true);
    after(() => icon = false);
    it(`should render with smaller paddings`, () => {
      initializeComponent();

      page().makeSnapshot();
    });
  });

  describe('when prop block=true', () => {
    before(() => block = true);
    after(() => block = false);
    it(`should render full with`, () => {
      initializeComponent();

      page().makeSnapshot();
    });
  });

  describe('when prop tag=div', () => {
    before(() => tag = 'div');
    after(() => tag = 'button');
    it(`should render as HTMLDivElement`, () => {
      initializeComponent();

      page()
        .hasTag('DIV')
        .makeSnapshot();
    });
  });

  describe('when prop link is set', () => {
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
