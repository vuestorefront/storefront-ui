/// <reference path="../../../../../node_modules/@percy/cypress/types/index.d.ts" />
import React from "react";
import VsfListItemMenuVue from "../../../frameworks/vue/components/VsfListItemMenu/VsfListItemMenu.vue";
import VsfListItemMenuReact from "../../../frameworks/react/components/VsfListItemMenu/VsfListItemMenu";
import { mount } from '../../utils/mount';
import { VsfListItemMenuSizes } from '../../../frameworks/vue/components/VsfListItemMenu/types';
import VsfListItemMenuBaseObject from "./VsfListItemMenu.PageObject";

describe("VsfListItemMenu", () => {
  let disabled: boolean;
  let label: string;
  let size: VsfListItemMenuSizes;
  let link: string;
  let isTruncated: boolean;
  let secondaryText: string;
  let selected: boolean;

  const page = () => new VsfListItemMenuBaseObject('list-item-menu');

  const initializeComponent = () => {
    return mount({
      vue: {
        component: VsfListItemMenuVue,
        props: {
          disabled,
          label,
          size,
          secondaryText,
          link, 
          isTruncated,
          selected
        },
      },
      react: <VsfListItemMenuReact
        disabled={disabled}
        secondaryText={secondaryText}
        link={link}
        is-truncated={isTruncated}
        selected={selected}
        label={label}
        size={size}
    />
    })
  }

  beforeEach(() => {
    cy.viewport(300, 300)

  });

  afterEach(() => {
    size = VsfListItemMenuSizes.base;
  });

  
  it('initial state', () => {
    initializeComponent();

    page().makeSnapshot();
  });

  describe('when prop size is set to ', () => {
    Object.values(VsfListItemMenuSizes).forEach((componentSize) => {
      describe(`${componentSize}`, () => {
        it(`should render correct ${componentSize} size`, () => {
          size = componentSize;
          initializeComponent();

          page().makeSnapshot();
        });
      });
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

 describe('when prop link is set', () => {
    before(() => link = 'http://somelink.com');
    after(() => link = '');
    it(`should render as <a> element`, () => {
      initializeComponent();

      page()
        .hasTag('a')
        .makeSnapshot();
    });
  });
});
